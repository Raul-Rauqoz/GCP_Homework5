const route = require('express').Router();
const con = require('../database/database');
let current_user = undefined;

// - Crear usuarios
// - Acceder a un usuario / sign in
// - Obtener los usuarios (solo para usuarios con el rol Admin. De lo contrario retornar 403)
// - Cambiar contraseña
// - Modificar datos
// - Dar de baja al usuario
// - Ruta para ver la versión de la API

route.get('/', (req, res) => {
	if (current_user !== undefined) {
		current_user = undefined;
		res.status(200).send('log out');
	} else {
		res.status(200).send('login first');
	}
});

route.post('/signup', (req, res) => {
	const { username, nick, pass, rol } = req.body;

	try {
		con.query('select * from user where nick=?', [ nick ], (err, result) => {
			if (err) throw err;
			if (result.length > 0) {
				res.status(200).send('user exists');
			} else {
				con.query('insert into user (username,nick,pass,rol,active) values (?,?,?,?,?)', [
					username,
					nick,
					pass,
					rol,
					true
				]);
				res.status(200).send('user create');
			}
		});
	} catch (error) {
		res.status(500).send('error');
	}
});

route.post('/signin', (req, res) => {
	const { nick, pass } = req.body;

	try {
		con.query('select * from user where nick=? and pass=?', [ nick, pass ], (err, result) => {
			if (err) throw err;
			if (result.length > 0) {
				current_user = result[0];
				res.status(200).send(current_user);
			} else {
				res.status(403).send('invalid user');
			}
		});
	} catch (error) {
		res.status(500).send('error');
	}
});

route.get('/allusers', async (req, res) => {
	if (current_user !== undefined && current_user.rol === 'admin') {
		try {
			con.query('select * from user', (err, result) => {
				if (err) throw err;
				current_user = result[0];
				res.status(200).send(current_user);
			});
		} catch (error) {
			res.status(500).send('error');
		}
	} else {
		res.status(403).send('not admin');
	}
});

route.put('/changepass', async (req, res) => {
	const { nick, pass, newpass } = req.body;
	const pre = await users_model.findOne({ nick, pass });
	if (pre !== null && pre.active === true) {
		const post = await users_model.findOneAndUpdate(pre, { pass: newpass });
		current_user = post;
		res.status(200).send('password changed');
	} else {
		current_user = undefined;
		res.status(403).send('invalid user');
	}
});

route.get('/version', (req, res) => {
	res.status(200).send('test rauqoz - version 1.0.0');
});

module.exports = route;
