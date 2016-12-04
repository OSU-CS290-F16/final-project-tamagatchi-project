var intro = true;
var age = 0;
var hunger = 0;
var happy =0;
var weight = 0;
var name = "Deutch";
var training = 0;
//var Gender;
document.getElementById("caseShell").addEventListener("click", screenClick);





 function screenClick() {
   console.log("It worked");
     image = document.getElementById('caseShell');

     if(intro = true){
       intro = false;
       image.src = "./Characters/Deutch/Age-0/Deutch-Egg.gif";
       gif.finish('end', function (){
         image.src = "./Characters/Deutch/Age-1/Deutch-Age-1-Normal.gif";
       });
     }
       image.src = imgName;
};

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
