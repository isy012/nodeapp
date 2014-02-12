var i, a, b, max;

max = 100000000;

var d = Date.now();

for (i=0; i<max; i++){
	a = 1234 + 5678 + i;
	b = 1234 * 5678 + i;
	c = 123 / 2 + i;
}

console.log(Date.now()-d);