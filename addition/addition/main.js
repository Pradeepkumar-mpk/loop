
var n = parseInt(prompt("enter number"));
var add = 0;
while(n!=0){
	let digit=n%10;
	add= (add*10)+digit;
	n = parseInt(n/10);
}
temp=0;
while(add!=0)
{
	rem=add%10;
	temp+=rem;
	add = parseInt(add/10)
	if(add!=0)
	{
		document.write(rem+"+");
	}
	else
	{
		document.write(rem);
	}
}
document.write("="+temp);
