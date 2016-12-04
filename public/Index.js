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
document.getElementById("stats").addEventListener("click", statsFunc);
document.getElementById("eat").addEventListener("click", eatFunc);
document.getElementById("poo").addEventListener("click", pooFunc);
document.getElementById("play").addEventListener("click", playFunc);
document.getElementById("connected").addEventListener("click", connectFunc);
document.getElementById("good").addEventListener("click", goodFunc);
document.getElementById("sick").addEventListener("click", sickFunc);
document.getElementById("sleep").addEventListener("click", sleepFunc);
document.getElementById("bed").addEventListener("click", badFunc);
document.getElementById("attention").addEventListener("click", attentionFunc);


function back(){
  dir = "./Characters/" + name + "/Age-" + age + "/" + name + "-Age-" + age + "-" + action + ".gif";
  image.src = dir;
}


 function screenClick() {

     image = document.getElementById('caseShell');

     if(intro === true){
       intro = false;
       image.src = "./Characters/Deutch/Age-0/Deutch-Egg.gif";

       setTimeout(function(){
         image.src = "./Characters/Deutch/Age-1/Deutch-Age-1-Normal.gif";
       }, 6000);

     }
     else{
        back();
     }

};



  function statsFunc(){

    image.src = "./Settings/Stats.png";
    image.addEventListener("click", function(){
      image.src = "./Settings/Training.png";
      document.getElementById("caseShell").addEventListener("click", function(){
        image.src = "./Settings/Age-Weight-Name.png";
        document.getElementById("caseShell").addEventListener("click", back);
      });
    });
  }



  function eatFunc(){

  }

  function pooFunc(){

  }

  function playFunc(){

  }

  function connectFunc(){

  }

  function goodFunc(){

  }

  function sickFunc(){

  }

  function sleepFunc(){

  }

  function badFunc(){

  }

  function attentionFunc(){

  }
