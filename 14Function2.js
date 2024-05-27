
//function passing 2 parameter and calling with a string
function message(name, subject){


    console.log("welcome:" , name,"you will teach" ,subject)
}

//message ("Lorna", "Programming in java")
//message ("Jim", "Programming in VB")
//message ("Harry", "teach maths")



//function passing 2 integers, doing a calculation and calling the function

function addition(num1,num2){

    let num3= num1+num2

    console.log("answer", num3)
}

//addition(3,4)


// function with a if .. else

function Payslip(name, salary){

    let tax = 0
    
    if (salary >= 2000 ){
         tax = salary *0.20

    }else {

        tax = salary * 0.10
    }

    let net = salary - tax

    console.log("Name of employee", name)
    console.log("Salary", salary)
    console.log("-----------------------")
    console.log("Tax Calculation:", tax)
    console.log("Net", net)
    console.log("-----------------------")



}


Payslip("Lorna", 2500)

