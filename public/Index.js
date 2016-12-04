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

function hideButtons(){
  document.getElementById('buttons0').classList.add('hidden');
  document.getElementById('buttons1').classList.add('hidden');
}
function showButtons(){
  document.getElementById('buttons0').classList.remove('hidden');
  document.getElementById('buttons1').classList.remove('hidden');
}


 function screenClick() {

     image = document.getElementById('caseShell');

     if(intro === true){
       intro = false;
       hideButtons();
       image.src = "./Characters/Deutch/Age-0/Deutch-Egg.gif";

       setTimeout(function(){
         image.src = "./Characters/Deutch/Age-1/Deutch-Age-1-Normal.gif";
         showButtons();
       }, 6000);


     }
     else{
        back();
     }

};



  function statsFunc(){
    hideButtons();
    image.src = "./Settings/Stats.png";
    image.addEventListener("click", function(){
      hideButtons();
      image.src = "./Settings/Training.png";
      image.addEventListener("click", function(){
        hideButtons();
        image.src = "./Settings/Age-Weight-Name.png";
        image.addEventListener("click", function(){
          hideButtons();
          dir = "./Characters/" + name + "/Age-" + age + "/" + name + "-Age-" + age + "-" + action + ".gif";
          image.src = dir;
          showButtons();
        });
      });
    });
  }



  function eatFunc(){
    dir0 = "./Characters/" + name + "/Age-" + age + "/" + name + "-Age-" + age + "-Eating.gif";
    image.src = dir0;
    setTimeout(function(){
      back();
    }, 3500);

    if(hunger < 5) {
      hunger = hunger + 1;
    }
  }

  function pooFunc(){
    dir0 = "./Characters/" + name + "/Age-" + age + "/" + name + "-Age-" + age + "-Poo.gif";
    image.src = dir0;
    setTimeout(function(){
      back();
    }, 3500);
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
