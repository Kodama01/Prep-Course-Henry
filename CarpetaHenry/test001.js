  let arguments = [5,5]
  if (arguments.length === 0){
      console.log(0);
   }   else if (arguments.length === 1){  
      console.log(arguments[0]);
   }  else if (arguments.length >= 2){
      let mult = arguments.reduce((acc,currVal) => acc * currVal);
      console.log(mult);
   }