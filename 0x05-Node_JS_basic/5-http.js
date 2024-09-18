const http = require('http');
const fs = require('fs');
const path = require('path');
const countStudents = require('./3-read_file_async');

// Create the server
const app = http.createServer((req, res) => {
	if (req.method === 'GET') {
		if (req.url === '/') {
			// Handle the root path
			res.statusCode = 200;
			res.setHeader('Content-Type', 'text/plain');
			res.end('Hello Holberton School!\n');
		} else if (req.url === '/students') {
			// Handle the /students path
			const filePath = process.argv[2];
			countStudents(filePath)
			.then(() => {
				res.statusCode = 200;
				res.setHeader('Content-Type', 'text/plain');
				// Assuming countStudents logs the data, you need to capture it to send as response.
				res.end('This is the list of our students\n');
			})
			.catch((error) => {
				res.statusCode = 500;
				res.setHeader('Content-Type', 'text/plain');
				res.end('Cannot load the database\n');
			});
		} else {
			// Handle unknown paths
			res.statusCode = 404;
			res.setHeader('Content-Type', 'text/plain');
			res.end('Not Found\n');
		}
	} else {
		res.statusCode = 405;
		res.setHeader('Content-Type', 'text/plain');
		res.end('Method Not Allowed\n');
	}
});

// Make the server listen on port 1245
app.listen(1245, () => {
	console.log('Server running at http://localhost:1245/');
});

// Export the server for external use
module.exports = app;
