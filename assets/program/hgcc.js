document.write('Chance to get <i><b>u</b></i>/<i><b>w</b></i> copies of <i><b>x</b></i> after picking <i><b>y</b></i> cards from a <i><b>z</b></i> card deck.<table class="hno"><tr align="left"><td><input id="population" type="text" maxlength="2" size="1"/></td><th> of cards in the deck (z)</th></tr><tr align="left"><td><input id="sample" type="text" maxlength="2" size="1"/></td><th> of cards picked from deck (y)</th></tr><tr align="left"><td><input id="possible" type="text" maxlength="2" size="1"/></td><th> of card <i><b>x</b></i> in deck (w)</th></tr><tr align="left"><td><input id="success" type="text" maxlength="2" size="1"/></td><th> of card <i><b>x</b></i> in pick (u)</th></tr></table><input type="button" onclick="evalhgcc()" value="Evaluate" /><div id="errhgcc"></div><br /><div id="anshgcc"></div>');

var f = [];
function factorial (n) {
  if (n == 0) return f[n] = 1;
  if (f[n]) return f[n]; // return existing value
  return f[n] = factorial(n-1) * n;
}

function smaller(a,b){
	return (a<b) ? a : b;
}

function P(n, r){
    if (r>n) return 0;
    return f[n]/f[n - r];
}

function C(n, r){
	if (r>n) return 0;
    return f[n]/(f[r]*f[n - r]);
}

function HGC(a,b,c,d){
	return (C(b,d)*C(a-b,c-d))/C(a,c);
}

function HGCC(a,b,c,d){
	factorial(a); // memoization up to deck size
	var x=[0,0,0,0,0];
	for (var i=0;i<d;i++) x[0] += HGC(a,b,c,i);
	for (var i=0;i<=d;i++) x[1] += HGC(a,b,c,i);
	x[2] += HGC(a,b,c,d);
	for (var i=d;i<=smaller(b,c);i++) x[3] += HGC(a,b,c,i);
	for (var i=d+1;i<=smaller(b,c);i++) x[4] += HGC(a,b,c,i);
	return x;
}

function check(a,b,c,d){
	var t = "";
	if (!a || a<=0) t += "ERR: input error for z <br />";
	if (!b || b<=0) t += "ERR: input error for w <br />";
	if (!c || c<=0) t += "ERR: input error for y <br />";
	if (!d || d<=0) t += "ERR: input error for u <br />";
	if (b>a) t += "ERR: # x in deck > # cards in deck.<br />";
	if (c>a) t += "ERR: # cards picked > # cards in deck.<br />";
	if (d>b) t += "ERR: # successes > # x in deck.<br />";
	if (d>c) t += "ERR: # successes > # cards picked.<br />";
	document.getElementById('errhgcc').innerHTML = t;
	if (t != "") return 1;
	return 0;
}

function pretty(x,y){
	var result = "";
	result += "Chance < " + y + ": " + 100*x[0].toFixed(4) + "%<br />";
	result += "Chance <= " + y + ": " + 100*x[1].toFixed(4) + "%<br />";
	result += "Chance = " + y + ": " + 100*x[2].toFixed(4) + "%<br />";
	result += "Chance >= " + y + ": " + 100*x[3].toFixed(4) + "%<br />";
	result += "Chance > " + y + ": " + 100*x[4].toFixed(4) + "%<br />";
	return result;
}

function evalhgcc(){
	var a = parseFloat(document.getElementById("population").value);
	var b = parseFloat(document.getElementById("possible").value);
	var c = parseFloat(document.getElementById("sample").value);
	var d = parseFloat(document.getElementById("success").value);
	if (check(a,b,c,d)) return;
	result = pretty(HGCC(a,b,c,d),d);
	document.getElementById('anshgcc').innerHTML = result;
}