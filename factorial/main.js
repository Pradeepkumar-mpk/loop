var n =parseInt(prompt("enter number"));
var factorial = 1;
/*for ( var i=1;i<=n;i++){
	factorial *=i
	console.log(factorial);
}*/

/*let i =1;
while(i<=n){
	console.log(factorial*=i);
	i++
}*/
let i = 1;
do {
	console.log(factorial*=i);
	i++
}
while(i<=n)