
//logical operators  
// |  or 
// & and 
// ! not


let mark =200

let per= mark*100/500

console.log("Percentage:" , per)


if (per >=90){

    console.log("Grade A+")
}

if (per>=80 && per<90 ){

    console.log("Grade A")
}

if (per>=70 && per<80 ){

    console.log("Grade B")
}

if (per>=60 && per<70 ){

    console.log("Grade C")
}

if (per<60 ){

    console.log("Fail")
}