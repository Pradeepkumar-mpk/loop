var n = parseInt(prompt("enter number"));
var actualNumber = n;
var reverseNumber = 0;
while(n!=0){
	reverseNumber= (reverseNumber*10)+(n%10);
	n = parseInt(n/10);
}
/*
do{
	reverseNumber= (reverseNumber*10)+(n%10);
	n = parseInt(n/10);
}
while(n!=0);*/

 if (reverseNumber===actualNumber){
	alert("It is a palindrome number");
}
else{
	alert("Not a palindrome number");
}