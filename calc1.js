const max_length= 15;
const out_prec= 6;
var h = 0, chn2 = 0;
function getrough() {
	return document.getElementById("rough").innerText;
}
function printrough(num) {
	if (chn2 == 0) {
		document.getElementById("rough").innerText += num;
	}
}
function printrough1(num) {
	document.getElementById("rough1").innerText += num;
}
function getrough1() {
	return document.getElementById("rough1").innerHTML;
}
function gethis() {
	return document.getElementById("history-val").innerText;
}
function printhis(num) {
	var len = gethis().length;
	if (len < 19) {
		document.getElementById("history-val").innerText += num;
	}
	else {
		chn2 = 1;
	}
}
function printOut(num) {
	var res= format(num);
	h=num;
	if(isFloat(h))
	{
		let m=max_length-res.length;
		document.getElementById("output-val").innerText=h.toFixed(m);
	}
	else
	{
		if(res.length<=max_length)
		{
			document.getElementById("output-val").innerText=res;
		}
		else
		{
			document.getElementById("output-val").innerText=h.toPrecision(out_prec);
		}
	}	
}
function getOutput() {
	return document.getElementById("output-val").innerHTML;
}
function factorial(n) {
	var ans = 1;
	for (var i = 2; i <= n; i++) {
		ans = ans * i;
	}
	return ans;
}
function isFloat(n) {
	return Number(n) === n && n % 1 !== 0;
}
function format(num) {
	if (num == "-") {
		return "";
	}
	var n = Number(num);
	var value = n.toLocaleString("en");
	return value;
}
function noformat(num) {
	return Number(num.replace(/,/g, ''));
}
function ext() {
	var i;
	document.getElementById("history").classList.toggle("history");
	document.getElementById("output").classList.toggle("output");
	document.getElementById("keyboard").classList.toggle("keyboard");
	var w = document.getElementsByClassName("next");
	for (i = 0; i < w.length; i++) {
		w[i].classList.toggle("next1");
	}
	var x = document.getElementsByClassName("newkey");
	for (i = 0; i < x.length; i++) {
		x[i].classList.toggle("newkey1");
	}
	var y = document.getElementsByClassName("operator");
	for (i = 0; i < y.length; i++) {
		y[i].classList.toggle("operator1");
	}
	var z = document.getElementsByClassName("number");
	for (i = 0; i < z.length; i++) {
		z[i].classList.toggle("number1");
	}
}
var operator2 = document.getElementsByClassName("operator2");
var p = 0, clr = 0;;
for (var i = 0; i < operator2.length; i++) {
	operator2[i].addEventListener('click', function () {
		var a = getrough1();
		var d = getrough();
		if ((!d) && (this.value == "^" || this.value == "!" || this.value == "^1/")) {
			printhis("0");
			printrough("0");
		}
		if (this.id == "(") {
			if (a) {
				printrough("*");
			}
			printhis(this.value);
			printrough(this.id);
		}
		else if (this.id == ")") {
			printhis(this.value);
			printrough(this.id);
		}
		else if (this.id == "!") {
			printhis(this.value);
			var fac = factorial(getrough1());
			var fac1 = getrough();
			var l = getrough1().length;
			var l1 = getrough().length;
			var new1 = fac1.slice(0, l1 - l);
			document.getElementById("rough").innerHTML = new1;
			printrough(fac);
		}
		else if (this.value == "sin(" || this.value == "cos(" || this.value == "tan(" || this.value == "^" || this.id == "3.142") {
			if (a && this.value != "^") {
				printrough("*");
			}
			printhis(this.value);
			printrough(this.id);
		}
		else {
			if (c == 1) {
				c = 0;
				document.getElementById("history-val").classList.add("history1");
				document.getElementById("output-val").classList.add("output1");
				document.getElementById("history-val").classList.remove("history2");
				document.getElementById("output-val").classList.remove("output2");
				document.getElementById("history-val").innerHTML = out;
				document.getElementById("output-val").innerHTML = "0";
			}
			if (a && this.value != "^1/") {
				printrough("*");
			}
			printhis(this.value);
			printrough(this.id);
			document.getElementById("rough1").innerHTML = "";
		}
		clr = 1;
		document.getElementById("back").classList.add("disable");
		var res = eval(rough);
		printOut(res);
		document.getElementById("rough1").innerHTML = "";
	});
}
var operator = document.getElementsByClassName("operator");
var c = 0;
for (var i = 0; i < operator.length; i++) {
	operator[i].addEventListener('click', function () {
		if (this.id == "clear") {
			c = 0;
			document.getElementById("history-val").classList.remove("history2");
			document.getElementById("output-val").classList.remove("output2");
			document.getElementById("history-val").innerHTML = "";
			document.getElementById("rough").innerHTML = "";
			document.getElementById("rough1").innerHTML = "";
			document.getElementById("output-val").innerHTML = "0";
			clr=0;
			document.getElementById("back").classList.remove("disable");
			printOut("0");
		}
		else if (this.id == "back" && c == 0 && clr == 0) {
			var out = gethis().toString();
			var out0 = getrough().toString();
			var out1 = getrough1().toString();
			if (out || out1 || out0) {
				out = out.substr(0, out.length - 1);
				out1 = out1.substr(0, out1.length - 1);
				out0 = out0.substr(0, out0.length - 1);
				if (out.length - 1 == -1) {
					document.getElementById("history-val").innerHTML = "";
					clr = 1;
					document.getElementById("back").classList.add("disable");
				}
				else {
					document.getElementById("history-val").innerHTML = out;
					clr = 0;
					document.getElementById("back").classList.remove("disable");
				}
				if (out1.length - 1 == -1) {
					document.getElementById("rough1").innerHTML = "";
				}
				else {
					document.getElementById("rough1").innerHTML = out1;
				}
				if (out0.length - 1 == -1 || clr == 1) {
					document.getElementById("rough").innerHTML = "";
				}
				else {
					document.getElementById("rough").innerHTML = out0;
				}
			}
		}
		else if (this.id != "back") {
			var out = getOutput();
			var rough = getrough();
			if (this.id == "=") {
				c++;
				if (c > 1) {
					c = 1;
				}
				document.getElementById("history-val").classList.add("history2");
				document.getElementById("output-val").classList.add("output2");
				var res = eval(rough);
				printOut(res);
				document.getElementById("rough").innerHTML = res;
				document.getElementById("rough1").innerHTML = res;
			}
			else {
				if (c == 1) {
					c = 0;
					document.getElementById("history-val").classList.add("history1");
					document.getElementById("output-val").classList.add("output1");
					document.getElementById("history-val").classList.remove("history2");
					document.getElementById("output-val").classList.remove("output2");
					document.getElementById("history-val").innerHTML = out;
					document.getElementById("output-val").innerHTML = "0";
				}
				printhis(this.value);
				printrough(this.id);
			}
			document.getElementById("rough1").innerHTML = "";
			var res = eval(rough);
			printOut(res);
		}
		
	});
}
var number = document.getElementsByClassName("number");
for (var i = 0; i < number.length; i++) {
	number[i].addEventListener('click', function () {
		var out = noformat(getrough());
		if (out != NaN) {
			if (c == 1) {
				c = 0;
				document.getElementById("history-val").classList.add("history1");
				document.getElementById("output-val").classList.add("output1");
				document.getElementById("history-val").classList.remove("history2");
				document.getElementById("output-val").classList.remove("output2");
				document.getElementById("history-val").innerHTML = "";
				document.getElementById("output-val").innerHTML = "0";
				document.getElementById("rough").innerHTML = "";
			}
			printhis(this.value);
			printrough(this.id);
			printrough1(this.id);
		}
	});
}

