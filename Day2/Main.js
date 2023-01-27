var javascriptStudentsName = ["Taha", "Afridi", "Saif", "Zubair"]
console.warn(javascriptStudentsName)
console.log(javascriptStudentsName.slice(1,4))
console.log(javascriptStudentsName.length)
javascriptStudentsName.push(56) ; // ["Taha", "Afridi", "Saif", "Zubair",56]
console.log(javascriptStudentsName)
javascriptStudentsName.pop() //["Taha", "Afridi", "Saif", "Zubair"]
console.log(javascriptStudentsName)
javascriptStudentsName.shift(); //[ "Afridi", "Saif", "Zubair"]
console.log(javascriptStudentsName)
javascriptStudentsName.unshift('Mazhar')//["Mazhar", "Afridi", "Saif", "Zubair"]
console.log(javascriptStudentsName)
javascriptStudentsName.splice(2,0,89) //["Mazhar", "Afridi",89, "Saif", "Zubair"]
console.log(javascriptStudentsName)
javascriptStudentsName.splice(2) //["Mazhar", "Afridi"]
console.log(javascriptStudentsName)
