let physics = 30
let chemistry = 40
let maths = 48


let results = physics + chemistry + maths
let percentage = results * 100/450

console.log("Marks Obtained:", results)
console.log("Percentage", percentage)

if (percentage>=60) {
    console.log("You have passed the exam")
}

else {
    console.log("You have failed the exam")
}