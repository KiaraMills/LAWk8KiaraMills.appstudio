var dessertList = ['Chocolate Cake','Cream Brulee','Cheesecake',
                  'Keyline Pie','Cherry Cobbler','Chocolate Chip Cookies']

dessertVoting.onshow=function(){
    drpDesserts.clear()  
    for (i = 0; i < dessertList.length; i++) 
        drpDesserts.addItem(dessertList[i])
  /* add a loop here that adds all the desserts in the array 
     to the dropdown.
  */
}




drpDesserts.onclick=function(s){
   if (typeof(s) == "object")
    return                     
   else {
    drpDesserts.value = s   
    lblMessage.value = (`You picked ${s} - thats a great choice!`)
    }
}

      
        /* add code here to get item user chose and output 
        it in a label, using a literal.
        */
    


btnNextForm.onclick=function(){
    ChangeForm(describeYou)
}
