var n = parseInt(prompt("enter number"));
var reverseNumber=0;
while(n!=0){
	let digit=n%10;
	
	n = parseInt(n/10);
	
	switch (digit){
	case 0 :
		document.write("zero<br>");
		break;
	case 1 :
		document.write("one<br>");
		break;
	case 2 :
		document.write("two<br>");
		break;
	case 3 :
		document.write("three<br>");
		break;
	case 4 :
		document.write("four<br>");
		break;
	case 5 :
		document.write("five<br>");
		break;
	case 6 :
		document.write("six<br>");
		break;
	case 7 :
		document.write("seven<br>");
		break;
	case 8 :
		document.write("eight<br>");
		break;
	case 9 :
		document.write("nine<br>");
		break;
	}	
	
}
console.log(reverseNumber)
