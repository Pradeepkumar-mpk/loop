var n=parseInt(prompt("Enter a number:"));
	add=0
	add1=0
	while(n!=0)
	{
		var remainder =n%10
		if (remainder%2==0)
		{	
			add=add+remainder;
		}
		else
		{
			add1=add1+remainder;
		}
		n=parseInt(n/10);
    }
console.log("sum of even number is "+add );
console.log("sum of odd number is "+add1 );
