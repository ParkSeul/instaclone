$(document).ready(function(){
  var $heart = $(".heart");
  $heart.click(function(){
    $(this).toggleClass("heart-pumping");
    // toggle 하면 아래 내용과 동일한 동작임
    //if ($(this).hasClass("heart-pumping")){
    //  $(this).removeClass("heart-pumping");
    //  console.log("to no pump");
    //}
    //else{
    //  $(this).addClass("heart-pumping");
    //  console.log("to yes pump");
    //}

    //$(this).addClass("heart-pumping");
    //console.log("clicked");
  });
});


$(document).ready(function(){
  console.log("i'm loaded");
});



var weapons =["gun", "cannon", "landmine", "bomb", "sword" ];

var soldier = {
  name: "Nicolas",
  age: 57,
  korean: false,
  weapon: weapons[2],
  sayHi: function(name){
    console.log("Hello" + name);
  }
}; 

//var age = prompt("How old are you?");

if(age<18){
  console.log("gtf");
}
else if(age>18 && age <50){
  console.log("father");
}
else if(age>50 && age <80){
  console.log("grandfather");
}
else{
  console.log("dead");
}



function multiply(one, two){
  return one*two;
}

function divide(one, two){
  return one/two;
}

function add(one, two){
  return one+two;
}

function subtraction(one, two){
  return one-two;
}

