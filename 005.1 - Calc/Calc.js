function add(){
	var input1 = parseInt(document.getElementById("num1").value);
	var input2 = parseInt(document.getElementById("num2").value);
	
    if ((input1.length === 0) || (input2.length === 0)) {
        alert("Please enter a valid input");
        return;
    }
	
    document.getElementById("ans").innerHTML = "Answer: " + (input1 + input2);
}
function sub(){
	var input1 = parseInt(document.getElementById("num1").value);
	var input2 = parseInt(document.getElementById("num2").value);
	
    if ((input1.length === 0) || (input2.length === 0)) {
        alert("Please enter a valid input");
        return;
    }
	
    document.getElementById("ans").innerHTML = "Answer: " + (input1 - input2);
}
function mul(){
	var input1 = parseInt(document.getElementById("num1").value);
	var input2 = parseInt(document.getElementById("num2").value);
	
    if ((input1.length === 0) || (input2.length === 0)) {
        alert("Please enter a valid input");
        return;
    }
	
    document.getElementById("ans").innerHTML = "Answer: " + (input1 * input2);
}
function div(){
	var input1 = parseInt(document.getElementById("num1").value);
	var input2 = parseInt(document.getElementById("num2").value);
	
    if ((input1.length === 0) || (input2.length === 0)) {
        alert("Please enter a valid input");
        return;
    }
	
    document.getElementById("ans").innerHTML = "Answer: " + (input1 / input2);
}