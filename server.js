const express = require('express');
const cors = require('cors');
const app = express();
const routes = require('./Routes/Routes');
const port = process.env.PORT || 4000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use('/', routes);

app.listen(port, (error) => {
	if (error) throw error;
	console.log('server on');
});
