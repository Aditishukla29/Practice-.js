
// varaiable in js
var a=10;
var $a="hello";
console.log(a);
console.log($a);


var x=10;
var y=20;
var z=x+y;
console.log(z);


//using let aND const

// let acces only under the scope{}
//const access under and outside of the scope{}
{
    var temp="this ia a temp varaiable";
    console.log(temp);

}
// local varaiable//
function abc(){
    var x=10;
    console.log(x);
}
abc();



//2 ex
var x=20;
function abc(){
    console.log(x);
}
abc();
console.log(x);

// global variable/.




var temp=2000;
function a(){
    console.log(temp);
}

console.log(temp);

// declearing global varaible in function//

function abc(){
    var x="this is a js varable";
    console.log(x);

}
abc();

// js primitive data type//
var a="helli i love u aditi";
console.log(a) ;//string variable
var num=10000; // numeric valure
console .log (num);
var yes= true; // bollean varable
var no= false; // bollean varable
var yes= true; // bollean varable
var t ; // undefined
console.log(t);
var u=''; // null varaible
console.log(u);


// non primitive //
var car=["ertige" ,"verna","Xuv"];
console.log(car[0]);
console.log( car[1]);
console.log( car[2]);

// arithmatic operators//
var r=40;
var v=30;
var i=6;
console.log("summation:" +(r+v));
console.log( "subtraction;"+(r-v));
console.log("multiplication:" +(r*v));
console.log( "division;"+(r/v));
console.log("reminder of 40 and 6 is;"+(r%i));
// increment operators

console.log("prein crement on v:" +(++v))
console.log("post increment on v:"+(v++))
// decrement operator
console.log("pre decrement :" +(--r))
console.log(" posrt decfement:"+(r--))
console.log("value of r:"+r)


// comparison operators//

var d=10;
var c=8;
var e=10;
console.log("comparison operators");
if(d==e){
    console.log("value are same");
}



//bitwise operatiors//
//AND

var u=5;
var i=9;
console.log(" u & i:"+(u&i));
//OR
console.log("bitwise u/i:"+(u/i));
//XOR
console.log(" bitwise u^i:"+(u^i));
//NOT
console.log(" bitwise ~u:"+(~u));


// LOGICAL OPERATORS//
var f=true;
var g=false;
console.log();("logical operators");
if (f && g){
  console.log("statement is true");
}
console.log("statement is true");
if(f || g){
    console.log ("statement is true");
}
if(! f){
    console.log("statement is true");
}
