// 1-stdin.js

// Output the welcome message
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Ensure that stdin is in flowing mode to handle input
process.stdin.setEncoding('utf8');

process.stdin.on('data', (data) => {
	const name = data.trim(); // Trim to remove any extra newlines or spaces
	process.stdout.write(`Your name is: ${name}\n`);

	// Close the stdin stream once the name is received
	process.stdin.end();
});

// Handle the end of input stream and print the closing message
process.stdin.on('end', () => {
	process.stdout.write('This important software is now closing\n');
});

