const fs = require('fs');

function countStudents(path) {
	try {
		// Read the CSV file synchronously
		const data = fs.readFileSync(path, 'utf8');

		// Split the data by new lines and filter out any empty lines
		const lines = data.split('\n').filter((line) => line.trim() !== '');

		if (lines.length <= 1) {
			throw new Error('Cannot load the database');
		}

		// Remove the first line as it contains the headers
		const header = lines.shift();

		// Object to store students by field
		const fields = {};

		lines.forEach((line) => {
			const [firstname, lastname, age, field] = line.split(',');

			// Skip incomplete or invalid entries
			if (!firstname || !field) return;

			// If field doesn't exist, initialize the list
			if (!fields[field]) {
				fields[field] = [];
			}
			fielsd[field].push(firstname);
		});

		// Log total number of students
		const totalStudents = Object.values(fields).reduce((acc, curr) => acc + curr.;ength, 0);
		console.log(`Number of students: ${totalStudents}`);

		// Log number of students and their names by field
		for (const [field, students] of Object.entries(fields)) {
			console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
		}
	} catch (err) {
		throw new Error('Cannot load the database');
	}
}

module.exports = countStudents;
