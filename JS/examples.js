function reverse(){
  var x = document.getElementById("reverseString").value;
  var newString = "";
  for(var i = x.length - 1; i >= 0; i--){
    newString += x[i];
  }
  document.getElementById("displayReverseString").innerHTML = newString;
  document.getElementById("displayReverseString").style.color = '#d00';
}

function tryFactorial(){
  var x = document.getElementById("factorial").value;
  var sum = 1;
  if(x == 0 || x == 1){
    sum = 1;
  }else{
    for(var i = x; i >= 1; i--){
      sum *= i
    }
  }
  document.getElementById("displayFactorial").innerHTML = sum;
  document.getElementById("displayFactorial").style.color = '#d00'

}
