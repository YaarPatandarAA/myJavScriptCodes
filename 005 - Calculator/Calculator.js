function add(a,b){
	return alert(a + b);
}
function sub(a,b){
	return alert(a - b);
}
function mul(a,b){
	return alert(a * b);
}
function div(a,b){
	return alert(a / b);
}

document.write("My Calculator")
var num1, num2, again;

var ans = confirm("Welcome to My Calculator\nWould You Like to Proceed");


if(ans == true){
	var opr = prompt("Please enter which operation you would like to do? (+ - * /)");
	num1 = prompt("Enter first number?"); num1 = parseInt(num1);
	num2 = prompt("Enter second number?"); num2 = parseInt(num2);
	switch (opr){
		case '+':
			add(num1,num2);
			break;
		case '-':
			sub(num1,num2);
			break;
		case '*':
			mul(num1,num2);
			break;
		case '/':
			div(num1,num2);
			break;
		default:
			alert("Incorrect Input!!!! Fail");
			break;
	}
}
else{
	alert("Good Bye!");
	ans = false;
}
