const http = require('http');

// Create the server
const app = http.createServer((req, res) => {
	// Set the response code to 200 (OK) 
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');

	// Send " " in response body
	res.end('Hello Holberton School!\n');
});

// Make the server listen on port 1245
app.listen(1245, () => {
	console.log('Server running at http://localhost:1245/');
});

// Export the server for external use
module.exports = app;
