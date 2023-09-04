function returnInfo () {
	var info = { name: "Mary", major: "CS" };
	return [info.name, info.major];
}

var [ personName, personMajor ] = returnInfo();
console.log( personName );
console.log( personMajor );