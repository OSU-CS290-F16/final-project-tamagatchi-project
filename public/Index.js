var intro = true;
var age = 1;
var hunger = 0;
var happy =0;
var weight = 0;
var name = "Deutch";
var training = 0;
var dir = '';
var action = "Normal";



//var Gender;
document.getElementById("caseShell").addEventListener("click", screenClick);
document.getElementById("stats").addEventListener("click", status);


 function screenClick() {
   console.log("It worked");
     image = document.getElementById('caseShell');

     if(intro === true){
       intro = false;
       image.src = "./Characters/Deutch/Age-0/Deutch-Egg.gif";

       setTimeout(function(){
         image.src = "./Characters/Deutch/Age-1/Deutch-Age-1-Normal.gif";
       }, 6000);

     }
     else{
        dir = "./Characters/" + name + "/Age-" + age + "/" + name + "-Age-" + age + "-" + action + ".gif";
        image.src = dir;
     }

};

  function status(){

    image.src = "./Settings/Stats.png";
  }

//function eventListen() {
//  console.log("It worked");
//  document.getElementById("shell").click();
  // window.addEventListener('DOMContentLoaded', function (event) {
  //
  //   var screenClick = document.getElementById('shell');
  //   screenClick.addEventListener('click', screenClick);
  //
  // });
//};
