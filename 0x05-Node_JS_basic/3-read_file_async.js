const fs = require('fs').promises;

async function countStudents(path) {
	try {
		const data = await fs.readFile(path, 'utf8');
		const lines = data.split(/\r?\n/).filter(line => line.trim() !== '');
		const fields = {};
		let totalStudents = 0;

		lines.slice(1).forEach(line => {
			const [fname, , , field] = line.split(',');
			if (fields[field]) {
				fields[field].count += 1;
				fields[field].students.push(fname);
			} else {
				fields[field] = { count: 1, students: [fname] };
			}
			totalStudents += 1;
		});
		
		let result = `Number of students: ${totalStudents}\n`;
		for (const field in fields) {
			const { count, students } = fields[field];
			result += `Number of students in ${field}: ${count}. List: ${students.join(', ')}\n`;
		}

		return result;
	} catch (error) {
		throw new Error('Cannot load the database');
	}
}

module.exports = countStudents;
