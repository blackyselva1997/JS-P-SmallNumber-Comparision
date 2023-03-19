let number= [1000,1500,2000,2500,3000,3500,4000,4500,5000,5500,6000,6500,7000,7500,8000,8500,9000,9500,10000];
let a= number.length;
for (i=0; i<a; i++) {
	if (3000<number[i] && 7000>number[i]) {
		document.write("small- ", number[i]);
		document.write("<br>");
	}
}