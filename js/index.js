$(document).ready(function() {
   var tmp = [];
/*
button functionality for numbers. There is a better way to do this but I am not exactly sure how. It works tho. Numbers end up as an array but there will be a function in the equals button to resolve this.
*/
 document.getElementById("nine").onclick = function(){
     tmp.push("9");
    document.getElementById("result-field").innerHTML = tmp;} 
  document.getElementById("eight").onclick = function(){
     tmp.push("8");
    document.getElementById("result-field").innerHTML = tmp;}
  document.getElementById("seven").onclick = function(){
     tmp.push("7");
    document.getElementById("result-field").innerHTML = tmp;} 
  document.getElementById("six").onclick = function(){
     tmp.push("6");
    document.getElementById("result-field").innerHTML = tmp;}
  document.getElementById("five").onclick = function(){
     tmp.push("5");
    document.getElementById("result-field").innerHTML = tmp;} 
  document.getElementById("four").onclick = function(){
     tmp.push("4");
    document.getElementById("result-field").innerHTML = tmp;}
  document.getElementById("three").onclick = function(){
     tmp.push("3");
    document.getElementById("result-field").innerHTML = tmp;}
  document.getElementById("two").onclick = function(){
     tmp.push("2");
    document.getElementById("result-field").innerHTML = tmp;}  
   document.getElementById("one").onclick = function(){
     tmp.push("1");
    document.getElementById("result-field").innerHTML = tmp;}
   document.getElementById("three").onclick = function(){
     tmp.push("3");
    document.getElementById("result-field").innerHTML = tmp;}
  document.getElementById("two").onclick = function(){
     tmp.push("2");
    document.getElementById("result-field").innerHTML = tmp;}
   document.getElementById("zero").onclick = function(){
     tmp.push("0");
    document.getElementById("result-field").innerHTML = tmp;}
     document.getElementById("decimal").onclick = function(){
     tmp.push(".");
    document.getElementById("result-field").innerHTML = tmp;}
//equations, will convert to js appropriate characters with equals sign function
       document.getElementById("multiply").onclick = function(){
     tmp.push("x");         
    document.getElementById("result-field").innerHTML = tmp;}
         document.getElementById("divide").onclick = function(){
     tmp.push("%");
    document.getElementById("result-field").innerHTML = tmp;}
           document.getElementById("add").onclick = function(){
     tmp.push("+");
    document.getElementById("result-field").innerHTML = tmp;}
             document.getElementById("subtract").onclick = function(){
     tmp.push("-");
    document.getElementById("result-field").innerHTML = tmp;}
//equals function
   
             if (tmp[0] === '*'|| tmp[0] ==='+' || tmp[0] === '/'){
              tmp[0] = tmp[0].replace('');
         }  //prevent calculations from beginning with an operator
             
             function operators(){
                 return /\d/g;
             }
      document.getElementById("equals").onclick = function(){
    var sum = tmp.toString()
                   .replace(/,/g,'')
                    .replace('%','/')
                    .replace('x','*');
    var fn = new Function("return " + tmp.join(" "));
      document.getElementById("sum").innerHTML = fn();}
});//end doc read func
