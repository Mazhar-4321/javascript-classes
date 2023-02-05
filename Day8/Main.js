var complexData = {
    "students": [
        {
            "firstName": "Mazhar",
            "lastName": "Ali",
            "city": "Hyderabad",
            "state": "Telangana",
            "zip": "500008",
            "phoneNumber": "8125629427",
            "email": "syedmazharali742@gmail.com"
        },
        {
            "firstName": "Prashik",
            "lastName": "Kamble",
            "city": "akola",
            "state": "Maharastra",
            "zip": "444001",
            "phoneNumber": "8806187589",
            "email": "prashikkamble@gmail.com"
        },
        {
            "firstName": "Ratnadip",
            "lastName": "Bharde",
            "city": "amaravathi",
            "state": "Maharastra",
            "zip": "444601",
            "phoneNumber": "8983253934",
            "email": "ratnadipbharde@gmail.com"
        },
        {
            "firstName": "Priyanka",
            "lastName": "Shinde",
            "city": "Nasik",
            "state": "Maharastra",
            "zip": "420003",
            "phoneNumber": "9518905320",
            "email": "priyankashinde@gmail.com"
        },
        {
            "firstName": "Jaison",
            "lastName": "Adidela",
            "city": "Hyderabad",
            "state": "Telangana",
            "zip": "500001",
            "phoneNumber": "7013770364",
            "email": "jaisonadidela@gmail.com"
        }
    ],
    "mentors": [
        {
            "firstName": "Pritam",
            "lastName": "Suryavanshi",
            "city": "Nanded",
            "state": "Maharastra",
            "zip": "411024",
            "phoneNumber": "8169842509",
            "email": "pritamsuryavanshi@gmail.com"
        },
        {
            "firstName": "Adeeba",
            "lastName": "Sultana",
            "city": "Bengaluru",
            "state": "Karnataka",
            "zip": "560063",
            "phoneNumber": "9513142863",
            "email": "adeebasultana@gmail.com"
        }
    ],
    "supervisors": [
        {
            "firstName": "Ajeet",
            "lastName": "Singh",
            "city": "Varanasi",
            "state": "UttarPradesh",
            "zip": "411024",
            "phoneNumber": "9918691313",
            "email": "ajeetsingh@gmail.com"
        }
    ],
    "Lead": [
        {
            "firstName": "Ashish",
            "lastName": "Deokate",
            "city": "Goa",
            "state": "Maharastra",
            "zip": "411024",
            "phoneNumber": "7798639808",
            "email": "ashishdeokate@gmail.com"
        }
    ]
}
function getUniqueStates(initialValue, currentValue) { // [Telangana,Maharastra],Telangana
    if (initialValue.indexOf(currentValue) == -1) {
        initialValue.push(currentValue)
    }
    return initialValue
}
//Object.values(complexData)=[ [5 objects],[2 objects],[1 ob],[1 obj]]
//flatMap(e=>e)  =[ 9 0bjects]
//filter (based on city) =[8 objects]
//map( for getting partial data i.e sate) =[objects with state property only]
//reduce ( logic for getting unique states) =[ ]
//no chaining
//Object.entries(complexData).forEach(e=>console.log("eleel",e[0]))
var array = Object.entries(complexData).filter(entry => entry[0] === 'students').
    map(e => e[1]).forEach(e => {
        e.filter(e2 => e2.city !== "Hyderabad").forEach(e1 => console.log(e1.firstName))
    })
//console.log(array)
//console.log(Object.entries(complexData).filter(entry=>entry[0]==='students').
    // console.log(array.flatMap(e => e).
    // filter(obj => obj.city !== "Hyderabad").
    // map(e => e.state).
    // reduce(getUniqueStates, []))
   // Object.entries(complexData).filter(entry=>entry[0]==='students')