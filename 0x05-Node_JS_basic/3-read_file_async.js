const fs = require('fs').promises;

function countStudents(path) {
	return fs.readFile(path, { encoding: 'utf8' })
	.then((data) => {
		const lines = data.split(/\r?\n/);
		const fields = {};
		let countStudents = 0;

		for (let i = 1; i < lines.length; i++) {
			const line = lines[i].trim();
			if (line === '') continue;

			const [fname, lname, age, field] = line.split(',');

			// Increment local student count
			countStudents += 1;

			// Check if the field is already in the fields object
			if (!fields[field]) {
				fields[field] = {
					count: 1,
					students: [fname],
				};
			} else {
				fields[field].count += 1;
				fields[field].students.push(fname);
			}
		}

		// Log the total number of students
		console.log(`Number of students: ${countStudents}`);

		// Log the number of students and their names in each field
		for (const [field, data] of Object.entries(fields)) {
			const names = data.students.join(', ');
			console.log(`Number of students in ${field}: ${data.count}. List: ${names}`);
		}
	})
	.catch(() => {
		throw new Error('Cannot load the database');
	});
}

module.exports = countStudents;
