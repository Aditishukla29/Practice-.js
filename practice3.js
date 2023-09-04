//  DEFINE OBJECT METHOD IN JS OBJECT//
function emp(id,name, salary) {
    this.id=id;
    this.name=name;
    this.salary=salary;
    this.updatedsalary=updatedsalary;

function updatedsalary(newsalary) {
    this.salary=newsalary;
    
}
}
var e=new emp(3,"Aarav",70000000);
console.log("salary of "+ e.name +"  is: "+ e.salary);
  e.updatedsalary(80000000000);
console.log("updated salary of " +  e.name + "  is: "+ e.salary);



       /// JAVASCRIPT METHODS
var Object1={
    a:1,
    b:2,
    c:3
}
var Object2={
    d:1,
    e:2,
    f:3
}
var Object3= Object.assign({c:5,d:8},Object1);
console.log(Object1,Object3);
var Object4=Object.assign({g:98,f:500},Object2);
console.log(Object4);
// CREATE()
function fruit() {
    this.name="apple";
}
function fun() {
    fruit.call(this);
    fun.prototype=Object.create(fruit.prototype);
    const app=new(fun);
    console.log(fun);
    
}// create not work



// manuplating object//
const love={
    id:488,
    name:"aditi shukla",
    salary:8000
};
console.log(love.id);
console.log(love['id']);
//object method//unable to do
//array//

