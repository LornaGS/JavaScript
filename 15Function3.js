
//let salary = 3000

function tax(salary){

    let mytax = 0
    
   if (salary >= 5000 ){
        mytax = salary *0.20

    }else {

       mytax = salary * 0.10
    }

    //let mytax = salary *0.2

    return mytax
    
}

for (let ChangingSalary=1000;ChangingSalary<=10000;ChangingSalary+=100)
{
    console.log("the tax calc on the salary" , ChangingSalary, "is", tax(ChangingSalary))
}
 //let T = tax(salary)

 //console.log("Salary", salary, "Tax", T)
 //console.log(tax(salary))



//let tax = 0
    
   // if (salary >= 2000 ){
    //     tax = salary *0.20

   // }else {

   //     tax = salary * 0.10
    //}


//   console.log("Name of employee", name)
   // console.log("Salary", salary)
   // console.log("-----------------------")
   // console.log("Tax Calculation:", tax)
   // console.log("Net", net)
   // console.log("-----------------------")
