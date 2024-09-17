const fs = require('fs');

function countStudents(path) {
	try {
		// Read the CSV file synchronously
		const results = fs.readFileSync(path, { encoding: 'utf8'}).split(/\r?\n/);

		// Initialize counters and data storage
		const fields = {};
		let countStudents = 0;

		// Iterate over each line of the file
		for (let i = 1; i < results.length; i++) {
			const line = results[i].trim();
			if (line == '') continue;

			const [fname, lname, age, field] = line.split(',');

			// Increment total student count
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
	} catch (error) {
		console.log('Cannot load the database');
	}
}

module.exports = countStudents;

