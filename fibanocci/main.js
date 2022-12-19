var n = parseInt(prompt("enter number"));
let a=0;
let b=1;
let c=b;
/*for (var i=1;i<n;i++){
	console.log(c);
	c=a+b;
	a=b;
	b=c;
}*/

/*let i = 1;
while( i<n){
	console.log(c);
	c=a+b;
	a=b;
	b=c;
	i++
}*/

let i=1;
do{
	console.log(c);
	c=a+b;
	a=b;
	b=c;
	i++
}
while(i<n);
