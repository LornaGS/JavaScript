



function ones(num){

  let words= ""

  switch(num)
  {
    case 0: words= "zero "; break  
    case 1: words= "one "; break
    case 2: words= "two "; break
    case 3: words= "three "; break
    case 4: words= "four "; break
    case 5: words= "five "; break
    case 6: words= "six "; break 
    case 7: words= "seven "; break 
    case 8: words= "eight "; break 
    case 9: words= "nine "; break 
  }

    return words
}


function ty(num){

  let words = ""

  switch(num) {
  case 20: words= "twenty"; break  
  case 30: words= "thirty"; break
  case 40: words= "forty"; break
  case 50: words= "fifty"; break
  case 60: words= "sixty"; break
  case 70: words= "seventy"; break
  case 80: words= "eighty"; break 
  case 90: words= "ninety"; break 
  }
  return words
}


function convert (number){
  //let number = 1

  let result = ""

  if (number>9999){


  }else{

  if (number>=1000)
    {
  
      result = ones(parseInt(number/1000)) + "thousand "

      number %= 1000

    }

      if (number >=100){

        result+= ones(parseInt(number/100)) + "hundred "

        number %= 100
      }
      
      if (number >=20){

        result += ty(parseInt(number/10)*10 +" ") 

        number %= 10
      }

      if (number >=1){

        result+= ones(parseInt(number)) 
        
      }

    }

    return result
}

for (let changingnumber=1; changingnumber<=1000; changingnumber++){
  
  console.log(convert(changingnumber))


  }


