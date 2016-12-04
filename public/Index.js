var intro = true;
var sick = false;
var age = 0;
var hunger = 0;
var happy =0;
var weight = 0;
var poo = 0;
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
       age = age + 1;
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
    //unhide hearts in hunger and happy places accordingly
    image.addEventListener("click", function(){
      hideButtons();
      image.src = "./Settings/Training.png";
      //hide hunger and happy hearts
      // unhide boxes according to training
      image.addEventListener("click", function(){
        hideButtons();
        image.src = "./Settings/Age-Weight-Name.png";
        //hide boxes
        //show age icon and swap src if age above 1
        //unhide name
        //unhide age and change if above 1
        //unhide weight and change accordingly
        image.addEventListener("click", function(){
          hideButtons();
          dir = "./Characters/" + name + "/Age-" + age + "/" + name + "-Age-" + age + "-" + action + ".gif";
          image.src = dir;
          showButtons();
        });
      });
    });
  }

  //function timer(){
    //hunger = hunger - 1;
//}




  function eatFunc(){
    dir0 = "./Characters/" + name + "/Age-" + age + "/" + name + "-Age-" + age + "-Eating.gif";
    image.src = dir0;
    setTimeout(function(){
      back();
    }, 3500);

    if(hunger < 5) {
      hunger = hunger + 1;
      poo = poo + .25;
      training = training +.25;
      weight = weight + .5
    }
  }

  function pooFunc(){
    dir0 = "./Characters/" + name + "/Age-" + age + "/" + name + "-Age-" + age + "-Poo.gif";
    image.src = dir0;
    setTimeout(function(){
      back();
    }, 3500);
    if(poo < 1){
      happy = happy + .5;
      poo = 0;
      training = training + .25;
      weight = weight - .25;
    }
  }

  function playFunc(){
    dir0 = "./Characters/" + name + "/Age-" + age + "/" + name + "-Age-" + age + "-Play.gif";
    image.src = dir0;
    setTimeout(function(){
      back();
    }, 4500);
    happy = happy +.5;
    training = training -.125;
    weight = weight -.25;

  }

  function connectFunc(){

  }

  function goodFunc(){
    dir0 = "./Characters/" + name + "/Age-" + age + "/" + name + "-Age-" + age + "-Happy.gif";
    image.src = dir0;
    setTimeout(function(){
      back();
    }, 3500);
    happy = happy + 1;
  }

  function sickFunc(){
    dir0 = "./Characters/" + name + "/Age-" + age + "/" + name + "-Age-" + age + "-Happy.gif";
    image.src = dir0;
    setTimeout(function(){
      back();
    }, 3500);
    sick = false;
  }

  function sleepFunc(){
    dir0 = "./Characters/" + name + "/Age-" + age + "/" + name + "-Age-" + age + "-Sleep.gif";
    image.src = dir0;
    setTimeout(function(){
      back();
    }, 3500);
    if(training < (age*age)){//if it sleeps for so long // set a time if time < '#'
      age = age + 1;
    }
  }

  function badFunc(){
    dir0 = "./Characters/" + name + "/Age-" + age + "/" + name + "-Age-" + age + "-Bad.gif";
    image.src = dir0;
    setTimeout(function(){
      back();
    }, 3500);
    happy = happy - 1;
    training = training + 1;

  }

  function attentionFunc(){
//idk what to put here
  }
