if (arguments.length === 0){
   return(0);
}   else if (arguments.length === 1){  
   return(arguments[0]);
}  else if (arguments.length >= 2){
   let mult = arguments.reduce((acc,currVal) => acc * currVal);
   return(mult);
}