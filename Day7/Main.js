var array=[1,2,3,4]
var employeeDetails=[
    {
        salary:50000,
        position:"developer"
    },
    {
        salary:10000,
        position:"Manager"
    },
    {
        salary:70000,
        position:"Teacher"
    }
]
var sum=0;
for( var i of array){
    sum = sum+i;
}
console.log(sum)
function add ( initialValue,currentValue){ // 6,4
    return initialValue+currentValue // 10
}
function totalSalary(initialValue,currentValue){
    return initialValue + currentValue.salary
}
function getOnlyPositions(employee){
    return employee.salary
}
function print(element){
    console.log(element)
}
console.log(array.reduce(add,0))
console.log(employeeDetails.reduce(totalSalary,0))
employeeDetails.map(getOnlyPositions).forEach(print)