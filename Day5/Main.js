var personDetails1 = {
    name: "Syed Mazhar Ali",
    address: "Golconda",
    city: "Hyderabad",
    state: "Telangana",
    zip: 500008,
    country: "India",
    email: "syedmazharali742@gmail.com",
    phone: "8125629427"
}
//console.log(personDetails1.name)
//console.log(personDetails1.city)
var personDetails2={
    name: "Syed Mazhar Ali",
    address: "Golconda",
    city: "Hyderabad",
    state: "Telangana",
    zip: 500008,
    country: "India",
    email: "syedmazharali742@gmail.com",
    phone: ["8125629427","9398240597"]
}
//console.log(personDetails2.phone[0])
var complexData={
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
 
  Object.values(complexData).flatMap(element=>element).forEach(e=>{if(e.city!=="Hyderabad"){console.log(e.firstName)}})