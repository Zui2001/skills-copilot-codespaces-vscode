// create a wev server
// create a route for comments
// send back some comments

const express = require('express');
const app = express();

app.get('/comments', (req, res) => {
	res.send('Comments');
});

app.listen(3000, () => {
	console.log('Server is up and running on port 3000');
});