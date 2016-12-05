function calculation(type, num1, num2){
  if(type == 'addition'){
    console.log(num1+ num2);
  }
  else if(type == 'subtract'){
    console.log(num1-num2);
  }
  else if(type == 'divide'){
    console.log(num1/num2);
  }
  else if(type == 'multiply'){
    console.log(num1*num2);
  }
}

calculation('subtract', 2, 4);