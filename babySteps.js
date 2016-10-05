var sumaTotal = 0;
for (var i = 2; i < process.argv.length; i++) {
	sumaTotal += Number(process.argv[i]);
}
console.log(sumaTotal);