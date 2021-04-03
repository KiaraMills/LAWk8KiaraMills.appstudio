rboCharacteristics.onchange=function(){
let userChoice = $("input[name=rboCharacteristics]:checked").prop("value")
   console.log(`You picked ${userChoice}`)
   if (rboCharacteristics.value == 0)  
      console.log(` I would agree that you are a 'optomistic' person too!`)
  else if  (rboCharacteristics.value == 1)  
      console.log(` I would agree that you are a 'pessimistic' person too.`)
  else if (rboCharacteristics.value == 2)  
      console.log(` I would agree that you are a 'trusting' person too!`)
  else if (rboCharacteristics.value == 3)  
      console.log(` I would agree that you are a 'envious' person too.`)
}



btnNextForm1.onclick=function(){
  ChangeForm(favExercises)
}
