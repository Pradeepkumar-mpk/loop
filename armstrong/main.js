var n = parseInt(prompt("enter number"));
var i = n;
var sum = 0;
while (i>0){
	var digit= i%10;
	sum=sum+digit**3;
	i=parseInt(i/10);
}
/*do{
	var digit= i%10;
	sum=sum+digit**3;
	i=parseInt(i/10);
}
while(i>0);*/

/*for (i=n;i>0;i++){
	var digit= i%10;
	sum=sum+digit**3;
	i=parseInt(i/10);
}*/

if (sum===n){
	alert("it is a armstrong number");
}
else{
	alert("it is not a armstrong number");
}