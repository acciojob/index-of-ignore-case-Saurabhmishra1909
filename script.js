function indexOfIgnoreCase(s1, s2) {
  // write your code here
	const s3=s2.toLowerCase();
	const s4=s1.toLowerCase();
	return s4.indexOf(s3);
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
