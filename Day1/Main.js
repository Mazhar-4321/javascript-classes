var a=5 
var b=6
var array=[1,2,3,4,5]
console.log(array)
console.log(a)
console.log(`Arithmetic Operators: +,-,*,/,%,** a=${a} b=${b} `,a+b,a-b,a*b,a/b,a%b,a**b)
console.log("Relational Operators: <,>,<=,>=,==,!= ",a<b,a>b,a<=b,a>=b,a==b,a!=b)
console.log("logical Operator: &&,|| ",a<b&&a<99,a<b||a<99)
if(a<b){
    console.log("a is smaller than b")
}else{
    console.log("b is smaller than a")
}
if(a%2==0){
    console.log("a is even")
}else{
    console.log("a is odd")
}
var i=0
while(i<10){
    console.log(i)
    i++;
}