const functions = require('@google-cloud/functions-framework');
const con = require('./database');

functions.http('rauqozfunc', (req, res) => {
	try {
		con.query('select * from user', (err, result) => {
			if (err) throw err;
			if (result.length == 0) {
				res.status(200).send([]);
			} else {
				res.status(200).send(result[0]);
			}
		});
	} catch (error) {
		res.status(500).send('error');
	}
});
