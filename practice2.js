// Asssignment operators
var x= 5;
var y=7;
console.log("Assignment x+y:"+(x+y)); // add and assign operators
//x= x+y
var u= 12;
var i=7;
console.log("Assignment u=i:"+(u-=i)); //subtract and assign operators
/*u= u-i
u=12-7
u=5 */
console.log("Assignment u=i"+(u*=i)); // multiple and assign operatirs
/* u=u*i
u=5*7
u=35 */
console.log("Assignment u/=i:"+(u/=i)); // divide and assign operator
/*
u= u/i
u=35/7
u=5  */
console.log("Assignment u %=i:"+(u%=i)); // module ans addign operator
/*
u=u%i
u=5%7
u=5
*/
         //Special operators
           var n=true;
           var m=false;
           var b=n ? 2:4;
           /* 
           if(condition){
            executes ig condition is true
           }
           else{
            executes if condition is false
           } */
           console.log("value of b:"+b);
           let a=(1,2,3);
           console.log("value of a:"+a);
           

// if/else staement
//fi
var x=true;
if(a){
    console.log("Aditi is beautiful")
}

// if else
var marks=50;
if( marks>35){
console.log("i love u Aditi");
}
 else{
    console.log(" i hate ypu Aditi"); 
 }
    //if else if 
    var day =2;
    if(day==1){
    console.log("today is moday");
}else if(day==2){
    console.log ("today is tuesday");
}else if(day==3){
    console.log ("today is wednesday");
}else if(day==4){
    console.log ("today is tursday");
}else if(day==5){
    console.log ("today is friday");
}else if(day==6){
    console.log ("today is saturday");
}else{
    console.log("today is sunday");
}
//switch statement
 var grade= 'A';
 switch(grade){
    case'A':    
    console.log("The student has secured A grade");
    break;
    case'B':
    console.log("The student has secured B grade");
    break;
    default:
        console.log("The student has niot secured any grade");
 }
    //ex 2
    switch( new Date().getDay){
        case 1:
            console.log("ITS MONDAY");
            break;
            case 2:
            console.log("ITS TUESDAY");
            break;
            case 3:
            console.log("ITS WEDNESDAY");
            break;
            case 4:
            console.log("ITS THURDAY");
 
            break;
            case 5:
            console.log("ITS FRIDAY");
            break;
            case 6:
            console.log("ITS SATURDAY");
            break;
            case 7:
            console.log("ITS SUNDAY");
            break;
            default:
            console.log("Incorrect input");
            break;   
    }
 // EXAMPLE 3
 var x = 1;
 switch(x){
    case 0:
        console.log("off");
        break;
        case 1:
            console.log("on");
            break;
            default:
                console.log("incorrect input");
 }
// LOOPS// 
// for loops
 for( var i=1;i<=100; i++){
    console.log(i);
 }
 // while loop//
 var i=1;
 while(i<=100){
    console.log(i);
    i++;
 }
 // dpo while loop//
 var j=7;
 do{
    console.log(j);
    j++;
 } 
 while (j<=7);   

// FOR IN LOOP

var temp="";
var person={
    firstname:"Aditi",
    lastname:"shukla",
    age:19,
}
for (value in person){
    temp=temp+person[value]+" ";
}
console.log(temp);
// for off loop
var alphabets=["a","b","c","d"];
for (let i=0;i<=alphabets.length-1;i++){
    console.log(alphabets[i]);
}
// 2 way
var alphabets=["m","n","o","p"];
for(value of alphabets){
console.log(value);
}
// string fpr of loop
var s="Ravikant";
for(value of s){
  console.log(value) ; 
}

//FUNCTION
function info() {
    return"hello this is me";
}
function generatesum(num) {
    return num+5;
  
}
console.log(info());
console.log(generatesum(50));
// function object
var add= new Function("num1","num2","return num1+num2");
console.log(add(2,8));
console.log(add(10,10));
// ex 2
var power=new Function("num1","num2","return Math.pow(num1,num2)")
console.log(power(10,2));
// FUNCTION METHOD ADVANCE JS
//call()
function Emp(id,name){
 this.id=id;
 this.name=name;   
}
function permanent(id,name) {
    Emp.call(id,name);
}
console.log(new permanentEmp("1,Ravi shukls").name);
// 2 EXPP
function Emp(id,name){
    this.id=id;
    this.name=name;   
   }
   function permanentEmp(id,name){ 
   Emp.call(this,id,name);
   }
   function temporaryEmp(id,name) {
    Emp.call(this,id,name);
   }
   var permanentEmp=new permanentEmp(1,"RAVI SIR");
   var temporaryEmp=new temporaryEmp(2,"AARAV SIR");
   console.log(permanentEmp.id+ " " +permanentEmp.name);
   console.log(temporaryEmp.id+ " " +temporaryEmp.name);



                   //apply()
 var arr=[6,7,8,9];
 var max=Math.max.apply(this,arr);
 var min=Math.min.apply(this,arr);
 console.log("Array value are:");
 for (value of arr){
    console.log(value);
 }
console.log("Maximum number is;"+max);
console.log("Minimum number is;"+min);
//ex 2
/*var arr1=[1,2,3,4];
var arr2=[6,7,8,9];
console.log("first arry value are;");
for(value of aar1){
    console.log(value);
}
console.log("second array value are;");
for( value of arr2){
console.log(value);
} 
arr1.Push.apply(arr1,arr2);
console.log("concatenated aray is:")
for(value of arr1){
    console.log(value);
}*/
//bind()
var website={
    name:"purnima",
    getname:function(){
        return this.name;
    }
}
var website2={
    name:"google",
    getname:function(){
return this.name;
    }
}
var unboundgetname=website.getname;
var boundgetname=unboundgetname.bind(website2);
console.log(boundgetname());
      /// OBJECT IN JAVASCRIPT//
      // 1 way to create object
      var person={
        firstnam:"harsh",
        lastname:"shukla",
        age:18,
        eyecolor:"blue"
      }
      console.log(person.firstnam + " "+ person.lastname+" " +person.age+" "+ person.eyecolor);

// 2 way to create object 

var worker=new Object();
worker.id=1;
worker.name="binni shukla";
worker.salary=20000;
console.log("object deatils of worker object:")
for(value in worker){
    console.log(worker[value]+" ")
}
// 3 way//
function book(id,name,salary) {
    this.id=id;
    this.name=name;
    this.salary=salary;
   
}
var e =new book(5,"mansi",5000000);
console.log("object detailsof book object:")
for(value in e ){
console.log(e[value]+" ");
}
