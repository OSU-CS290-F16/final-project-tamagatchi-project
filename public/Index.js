var intro = true;
var sick = false;
var age = 0;
var hunger = 1;
var happy = 1;
var weight = 0;
var poo = 0;
var name = "Deutch";
var training = 0;
var dir = '';
var action = "Normal";
backgroundShell = document.getElementById('caseShell');
backgroundShellCover = document.getElementById('shellCover');
//var Gender;

///////////////////////////////////////////////////////////////////////////
var viewStats = 0;
///////////////////////////////////////////////////////////////////////////

document.getElementById("caseShell").addEventListener("click", screenClick);
document.getElementById("stats").addEventListener("click", statsFunc);
document.getElementById("eat").addEventListener("click", eatFunc);
document.getElementById("poo").addEventListener("click", pooFunc);
document.getElementById("play").addEventListener("click", playFunc);
document.getElementById("connected").addEventListener("click", connectFunc);
document.getElementById("good").addEventListener("click", goodFunc);
document.getElementById("sick").addEventListener("click", sickFunc);
document.getElementById("sleep").addEventListener("click", sleepFunc);
document.getElementById("bad").addEventListener("click", badFunc);
document.getElementById("attention").addEventListener("click", attentionFunc);
document.getElementById('weight-value').innerHTML = weight;
document.getElementById('age-value').innerHTML = age;
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function GameClock(){ // shows time from 0-23 hrs
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);

  if(s == 00) { //add to stats every 1 minute
    hunger = hunger - 1;
    if(hunger <= 1){
      hunger = 0;
    }
    if(happy < 5){
      happy = happy + 1;
      poo = poo + 1;
    }
    age = age + 0.25;
  }
 
  var t = setTimeout(GameClock, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

 function hideHearts(set){
  document.getElementById('hearts-1').classList.add('hidden');
  document.getElementById('hearts-2').classList.add('hidden');
 }

function showHearts(set){
  var object = "hearts-" + set;
  heartImage = document.getElementById(object);
  if(set == 1){
    var path = "./Settings/Hearts/Hearts-" + hunger + ".png";
  }
  else{
    var path = "./Settings/Hearts/Hearts-" + happy + ".png";
  }
  heartImage.src = path;
  document.getElementById(object).classList.remove('hidden');
}

function showStats() {
  document.getElementById('age-overlay').classList.remove('hidden');
  document.getElementById('weight-overlay').classList.remove('hidden');
}

function hideStats() {
  document.getElementById('age-overlay').classList.add('hidden');
  document.getElementById('weight-overlay').classList.add('hidden');
}

//////////////////////////////////////////////////////////////////
function back(){
  dir = "./Characters/" + name + "/Age-" + age + "/" + name + "-Age-" + age + "-" + action + ".gif";
  backgroundShell.src = dir;
  document.getElementById('Overlay-Shell-Back').classList.add('hidden');
  showButtons();
  hideStats();
  document.getElementById('petName').classList.add('hidden');
  document.getElementById('petIcon').classList.add('hidden');
}

function hideButtons(){
  document.getElementById('buttons1').classList.add('hidden');
  document.getElementById('buttons2').classList.add('hidden');
}
function showButtons(){
  document.getElementById('buttons1').classList.remove('hidden');
  document.getElementById('buttons2').classList.remove('hidden');
}



 function screenClick() {

     if(intro === true){
       intro = false;
       age = age + 1;
       backgroundShell.src = "./Characters/Deutch/Age-0/Deutch-Egg.gif";

       setTimeout(function(){
         backgroundShell.src = "./Characters/Deutch/Age-1/Deutch-Age-2-Normal.gif";
         showButtons();
       }, 0);//replace 0 with 6000 when done debuging

     }

     else{
         back();
     }

};

////////////////////////////////////////////////////////////////////////////
  function statsFunc(){//break up funtion for onclick hearts
    hideButtons();
    backgroundShell = document.getElementById('caseShell');
    backgroundShell.src = "./Settings/Stats.png";
    showHearts('1');
    showHearts('2');
    document.getElementById('Overlay-Shell-Training').classList.remove('hidden');
   }

function trainingFunc(){
    document.getElementById('Overlay-Shell-Training').classList.add('hidden');
    document.getElementById('Overlay-Shell-Age').classList.remove('hidden');
    backgroundShell = document.getElementById('caseShell');
    hideButtons();
    hideHearts();
    dir = "./Settings/Training/Training-" + training + ".png";
    backgroundShell.src = dir;
}
    //hide hunger and happy hearts
    // unhide boxes according to training
    function Age_Weight_NameFunc(){
      // document.getElementById('Overlay-Shell-Age').classList.add('hidden');
      document.getElementById('Overlay-Shell-Back').classList.remove('hidden');
      // document.getElementById('year').classList.remove('hidden');
      // document.getElementById('petWeight').classList.remove('hidden');
      showStats();
      document.getElementById('petIcon').classList.remove('hidden');
      document.getElementById('petName').classList.remove('hidden');
      hideButtons();
      backgroundShell = document.getElementById('caseShell');
      backgroundShell.src = "./Settings/Age-Weight-Name.png";

}
////////////////////////////////////////////////////////////////////////////

  function eatFunc(){
    dir = "./Characters/" + name + "/Age-" + age + "/" + name + "-Age-" + age + "-Eating.gif";
    backgroundShell.src = dir;
    setTimeout(function(){
      back();
    }, 3500);

    if(hunger < 5) {
      hunger = hunger + 1;
      poo = poo + .25;
      training = training + 1;
      weight = weight + .5;
    }
  }

  function pooFunc(){
    dir = "./Characters/" + name + "/Age-" + age + "/" + name + "-Age-" + age + "-Poo.gif";
    backgroundShell.src = dir;
    setTimeout(function(){
      back();
    }, 3500);
    if(poo < 1){
      happy = happy + 1;
      poo = 0;
      training = training + 1;
      weight = weight - .25;
    }
  }

  function playFunc(){
    dir = "./Characters/" + name + "/Age-" + age + "/" + name + "-Age-" + age + "-Playing.gif";
    backgroundShell.src = dir;
    setTimeout(function(){
      back();
    }, 4500);
    happy = happy + 1;

    training = training + 1;
    weight = weight -.25;

  }

  function connectFunc() {
    dir = "./Settings/connected.png" ;
    hideButtons();
    backgroundShell.src = dir;
    backgroundShell.addEventListener("click", back);
  }

  function goodFunc(){
    dir = "./Characters/" + name + "/Age-" + age + "/" + name + "-Age-" + age + "-Happy.gif";
    backgroundShell.src = dir;
    setTimeout(function(){
      back();
    }, 3500);
    happy = happy + 1;
  }

  function sickFunc(){
    dir = "./Characters/" + name + "/Age-" + age + "/" + name + "-Age-" + age + "-Happy.gif";
    backgroundShell.src = dir;
    setTimeout(function(){
      back();
    }, 3500);
    sick = false;
  }

  function sleepFunc(){
    levelUp();
    dir = "./Characters/" + name + "/Age-" + age + "/" + name + "-Age-" + age + "-Sleep.gif";
    backgroundShell.src = dir;
    setTimeout(function(){
      back();
    }, 3500);
    // if(training < (age*age)){//if it sleeps for so long // set a time if time < '#'
    //   age = age + 1;
    // };
  }

  function badFunc(){
    dir = "./Characters/" + name + "/Age-" + age + "/" + name + "-Age-" + age + "-Bad.gif";
    backgroundShell.src = dir;
    setTimeout(function(){
      back();
    }, 3500);
    happy = happy - 1;
    if (happy <= 0) {
      happy = 1;
    }
    training = training + 1;
  }

  function attentionFunc(){
    hideButtons();
    if(sick ===true){
        backgroundShell.src = "./Settings/Attention/Attention-Sick.png";
    }
    else if(happy <= 2){
        backgroundShell.src = "./Settings/Attention/Attention-Unhappy.png";
    }
    else if(hunger <= 2){
        backgroundShell.src = "./Settings/Attention/Attention-Hungry.png";
    }
    else if(poo >= 2){
        backgroundShell.src = "./Settings/Attention/Attention-Dirty.png";
    }
    else if(training >= 6){
        backgroundShell.src = "./Settings/Attention/Attention-Tired.png";
    }
    else{
        backgroundShell.src = "./Settings/Attention/Attention-Normal.png";
    }
//if health < 1 -- alert user (by highlighting the area or a pop up box or something noticeable)
//if happy < 1 -- alert user
//if poo > 2 -- alert user
//if sick -- alert user
//when the user chooses a function that fixes the issue (ex. eating snack to raise hunger level), alert disappears.
  }

  function levelUp(){
    dir = "./Settings/Year/Age-" + age + ".png";
    document.getElementById('year').src = dir;
  }
