// Use 'const' for taskFirst function as the variable should not be reassigned
export function taskFirst() {
	const task = 'I prefer const when I can.';
	return task;
}

// Use 'let' for taskNext function as 'combination' can be reassigned
export function taskNext() {
	let combination = 'But sometimes let';
	combination += getLast();    // Reassigns the value by concatenating
	return combination;
}

// Helper function to return the last part of the sentence
export function getLast() {
	return ' is okay';
}
