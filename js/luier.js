
$(document).ready(function(){

    //add listeners
    $("#clickButton").click(wieVerschoontDeLuier);
    $("#papa").click(papaKnop);
    $("#mama").click(mamaKnop);
    $("#resetButton").click(resetScores);

    var papa = "Papa";
    var mama = "Mama";
    var papaCounter = 0;
    var mamaCounter = 0;
    var countDownSound = new Audio("audio/beep.wav");
    var manYeahSound = new Audio("audio/manyeah.mp3");
    var manYahaSound = new Audio("audio/maleyahaha.wav");
    var femaleLaughSound = new Audio("audio/femalelaugh.wav");
    var femaleHumSound = new Audio("audio/femalehum.wav");



    //load stored values
    if (localStorage.getItem("papaNaamCache") !=null){
        papa = localStorage.getItem("papaNaamCache");
        console.log(papa);
    }

    if (localStorage.getItem("mamaNaamCache") !=null){
        mama = localStorage.getItem("mamaNaamCache");
        console.log(mama);
    }

    if (localStorage.getItem("papaCounterCache") !=null){
        papaCounter = localStorage.getItem("papaCounterCache");
        console.log(papaCounter);
    }

    if (localStorage.getItem("mamaCounterCache") !=null){
        mamaCounter = localStorage.getItem("mamaCounterCache");
        console.log(mamaCounter);
    }

    //set values on screen
    $("#papaCounter").html(papaCounter);
    $("#mamaCounter").html(mamaCounter);

    $("#papaNaam").html(papa);
    $("#mamaNaam").html(mama);

    //functions
    function papaKnop(){
      var papaInputNaam = prompt("Papa heet zo", papa);

      if (papaInputNaam != null){
          papaInputNaam = papaInputNaam.trim();
      }

      if (papaInputNaam != null && papaInputNaam != "" ) {
          $("#papaNaam").html(papaInputNaam);
          papa = papaInputNaam;
          localStorage.setItem("papaNaamCache", papa);
      }
    }

    function mamaKnop(){
      var mamaInputNaam = prompt("Mama heet zo", mama);

      if (mamaInputNaam != null){
          mamaInputNaam = mamaInputNaam.trim();
      }

      if (mamaInputNaam != null && mamaInputNaam != "" ) {
          $("#mamaNaam").html(mamaInputNaam);
          mama = mamaInputNaam;
          localStorage.setItem("mamaNaamCache", mama);
      }
    }

    function wieVerschoontDeLuier() {
      countThree();
      setTimeout(countTwo, 1000);
      setTimeout(countOne, 2000);
      setTimeout(countZero, 3000);
      setTimeout(alertAnswer, 3100);
    }

    function countThree() {
      countDownSound.play();
      $("#clickButton").html("3");
      $("html").css("background-image", "url(img/luier_background_light_orange_extra_extra_small.jpg)");
    }

    function countTwo() {
      countDownSound.play();
      $("#clickButton").html("2");
      $("html").css("background-image", "url(img/luier_background_orange_extra_extra_small.jpg)");
    }

    function countOne() {
      countDownSound.play();
      $("#clickButton").html("1");
      $("html").css("background-image", "url(img/luier_background_dark_orange_extra_extra_small.jpg)");
    }

    function countZero() {
      $("#clickButton").html("0");
      $("html").css("background-image", "url(img/luier_background_red_extra_extra_small.jpg)");
    }

    function resetClickButton() {
      $("#clickButton").html("Klik");
      $("html").css("background-image", "url(img/luier_background_green_extra_extra_small.jpg)");
    }

    function updatePapaCounter() {
      $("#papaCounter").html(papaCounter);
      localStorage.setItem("papaCounterCache", papaCounter);
    }

    function updateMamaCounter() {
      $("#mamaCounter").html(mamaCounter);
      localStorage.setItem("mamaCounterCache", mamaCounter);
    }

    function alertAnswer(){
      let randomNumber = Math.random();
      randomNumber *= 10;
      randomNumber = Math.ceil(randomNumber);
      if (randomNumber % 2 === 0) {
          playFemaleSound();
          setTimeout(function(){alert(papa + " moet de luier verschonen.")}, 1000);
          setTimeout(function(){papaCounter++;}, 1000);
          setTimeout(updatePapaCounter, 1000);
          // updatePapaCounter();
      } else {
          playMaleSound();
          setTimeout(function(){alert(mama + " moet de luier verschonen.")}, 2000);
          setTimeout(function(){mamaCounter++;}, 2000);
          // alert(mama + " moet de luier verschonen.");
          setTimeout(updateMamaCounter, 2000);

          // updateMamaCounter();
      }
      setTimeout(resetClickButton, 3000);
    }

    function playMaleSound(){
      if (mamaCounter % 2 === 0) {
        manYeahSound.play();
      } else {
        manYahaSound.play();
      }
    }

    function playFemaleSound(){
      if (papaCounter % 2 === 0) {
        femaleLaughSound.play();
      } else {
        femaleHumSound.play();
      }
    }

    function resetScores(){
      papaCounter=0;
      mamaCounter=0;
      updatePapaCounter();
      updateMamaCounter();
    }













});
