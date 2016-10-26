var first_no;
var operation = "";
function dis(x){
	var present_value = document.getElementById("display").value;			
   var result = present_value + "" + x;
   document.getElementById("display").value = result;
}

function clear_display(){
	operation="";
	document.getElementById("display").value = "";
}

function add() {
	if(operation!="")
	{ get_result();}
	first_no = document.getElementById("display").value;
	clear_display();
	operation = "+";
}

function subtract() {
	if(operation!="")
	{ get_result();}
	first_no = document.getElementById("display").value;
	clear_display();
	operation = "-";
}

function multiply() {
	if(operation!="")
	{ get_result();}
	first_no = document.getElementById("display").value;
	clear_display();
	operation = "*";
}

function divide() {
	if(operation!="")
	{ get_result();}
	first_no = document.getElementById("display").value;
	clear_display();
	operation = "/";
}

function get_result() {
	var current_value = document.getElementById("display").value;
	var res;
	switch(operation){
		case "+":
		       	  	res = +current_value + +first_no;
				  	document.getElementById("display").value = res;
				  	break;
	    case "-":
	    			res =  +first_no - +current_value	;
	    			document.getElementById("display").value = res;
	    			break;
		case "*":
	    			res = +current_value * +first_no;
	    			document.getElementById("display").value = res;
	    			break;
		case "/":
	    			res = +current_value / +first_no;
	    			document.getElementById("display").value = res;
	    			break;
		default:
	    			res = +current_value;
	    			document.getElementById("display").value = res;
	    			break;

	}
}