var aadharList = [
    {
        name: {
            firstName: "Syed",
            lastName: "Afridi",
            middleName: null
        },
        aadharNumber: 1234567890,
        address: {
            city: "Hyderabad",
            state: "Telangana",
            plot: "plot no 1",
            locality: "Golconda"
        },
        fatherName: "Afridi dad",
        gender: "male",
        mobileNumbers: [098765780978676, 117647168468126]
    },
    {
        name: "Mazhar",
        aadharNumber: 1243567890,
        address: "Golconda",
        fatherName: "Mazhar dad",
        gender: "male"
    },
    {
        name: "Saif",
        aadharNumber: 1234657890,
        address: "Hussaini Alam",
        fatherName: "Saif dad",
        gender: "male"
    },
    {
        name: "Nameer",
        aadharNumber: 1234568790,
        address: "Malakpet",
        fatherName: "Nameer dad",
        gender: "male"
    },
    {
        name: "Mir",
        aadharNumber: 2134567890,
        address: "Tolichowki",
        fatherName: "Mir dad",
        gender: "male"
    },
    {
        name: "Mira",
        aadharNumber: 2135467890,
        address: "Golconda",
        fatherName: "Mira dad",
        gender: "female"
    }
]
var numbers = [1, 2, 3, 4, 5]
// Print aadhar Numbers
function printOnlyAadhar(candidate) {
    console.log(candidate)
}
function printNumbersOfArray(number) {
    // console.log(number + 100)
}
//aadharList.forEach(printOnlyAadhar)   // it accepts a functioin and do not return anything
//aadharList.forEach((candidate)=>console.log(candidate))
numbers.forEach(printNumbersOfArray)
// traditional method
for (var i = 0; i < numbers.length; i++) {
    // console.log(numbers[i])
}
// for of
for (var number of numbers) {
    //console.log(number)
}

function filterCandidates(candidate) {
    return candidate.address === "Golconda"
}

aadharList.filter(filterCandidates).forEach(printOnlyAadhar)