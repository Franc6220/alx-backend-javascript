// 1-stdin.js
process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
	const uname = process.stdin.read();

	if (uname) {
		process.stdout.write(`Your name is: ${uname.toString().trim()}\n`);

		// Close stdin manually to simulate process end in piped input
		process.stdin.end();
	}
});

process.stdin.on('end', () => {
	process.stdout.write('This important software is now closing\n');
});
