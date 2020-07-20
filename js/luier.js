"use strict";

$(document).ready(function(){

  let papa = "Papa";
  let mama = "Mama";
  let papaCounter = 0;
  let mamaCounter = 0;
  const countDownSound = new Audio("audio/beep.wav");
  const manYeahSound = new Audio("audio/manyeah.mp3");
  const manYahaSound = new Audio("audio/maleyahaha.wav");
  const femaleLaughSound = new Audio("audio/femalelaugh.wav");
  const femaleHumSound = new Audio("audio/femalehum.wav");

  const papaKnop = function(){
    let papaInputNaam = prompt("Papa heet zo:", papa);

    if (papaInputNaam !== undefined){
        papaInputNaam = papaInputNaam.trim();
    };

    if (papaInputNaam !== undefined && papaInputNaam !== "" ) {
        $("#papaNaam").html(papaInputNaam);
        papa = papaInputNaam;
        localStorage.setItem("papaNaamCache", papa);
    };
  };

  const mamaKnop = function(){
    let mamaInputNaam = prompt("Mama heet zo:", mama);

    if (mamaInputNaam !== undefined){
        mamaInputNaam = mamaInputNaam.trim();
    };

    if (mamaInputNaam !== undefined && mamaInputNaam !== "" ) {
        $("#mamaNaam").html(mamaInputNaam);
        mama = mamaInputNaam;
        localStorage.setItem("mamaNaamCache", mama);
    };
  };

  const countThree = function() {
    countDownSound.play();
    $("#clickButton").html("3");
    $("html").css("background-image", "url(img/luier_background_light_orange_extra_extra_small.jpg)");
  };

  const countTwo = function() {
    countDownSound.play();
    $("#clickButton").html("2");
    $("html").css("background-image", "url(img/luier_background_orange_extra_extra_small.jpg)");
  };

  const countOne = function() {
    countDownSound.play();
    $("#clickButton").html("1");
    $("html").css("background-image", "url(img/luier_background_dark_orange_extra_extra_small.jpg)");
  };

  const countZero = function() {
    $("#clickButton").html("0");
    $("html").css("background-image", "url(img/luier_background_red_extra_extra_small.jpg)");
  };

  const alertAnswer = function(){
    let randomNumber = Math.random();
    randomNumber *= 10;
    randomNumber = Math.floor(randomNumber);
    if (randomNumber % 2 === 0) {
        showPapaAlert();
    } else {
        showMamaAlert();
    }
    setTimeout(resetClickButton, 3000);
  }
  
  const wieVerschoontDeLuier = function() {
    countThree();
    setTimeout(countTwo, 1000);
    setTimeout(countOne, 2000);
    setTimeout(countZero, 3000);
    setTimeout(alertAnswer, 3100);
  };

  const resetClickButton = function() {
    $("#clickButton").html("Klik");
    $("html").css("background-image", "url(img/luier_background_green_extra_extra_small.jpg)");
  };

  const updatePapaCounter = function() {
    $("#papaCounter").html(papaCounter);
    localStorage.setItem("papaCounterCache", papaCounter);
  };

  const updateMamaCounter = function() {
    $("#mamaCounter").html(mamaCounter);
    localStorage.setItem("mamaCounterCache", mamaCounter);
  };

  const playMaleSound = function(){
    if (mamaCounter % 2 === 0) {
      manYeahSound.play();
    } else {
      manYahaSound.play();
    };
  };

  const playFemaleSound = function(){
    if (papaCounter % 2 === 0) {
      femaleLaughSound.play();
    } else {
      femaleHumSound.play();
    };
  };

  const showPapaAlert = function(){
    playFemaleSound();
        setTimeout(function(){alert(papa + " moet de luier verschonen.")}, 1000);
        setTimeout(function(){papaCounter++;}, 1000);
        setTimeout(updatePapaCounter, 1000);
  };

  const showMamaAlert = function(){
    playMaleSound();
        setTimeout(function(){alert(mama + " moet de luier verschonen.")}, 2000);
        setTimeout(function(){mamaCounter++;}, 2000);
        setTimeout(updateMamaCounter, 2000);
  };

  const resetScores = function(){
    papaCounter=0;
    mamaCounter=0;
    updatePapaCounter();
    updateMamaCounter();
  };

  //load stored values
  if (localStorage.getItem("papaNaamCache") !== undefined){
      papa = localStorage.getItem("papaNaamCache");
      console.log(papa);
  };

  if (localStorage.getItem("mamaNaamCache") !== undefined){
      mama = localStorage.getItem("mamaNaamCache");
      console.log(mama);
  };

  if (localStorage.getItem("papaCounterCache") !== undefined){
      papaCounter = localStorage.getItem("papaCounterCache");
      console.log(papaCounter);
  };

  if (localStorage.getItem("mamaCounterCache") !== undefined){
      mamaCounter = localStorage.getItem("mamaCounterCache");
      console.log(mamaCounter);
  };


  //set values on screen
  $("#papaCounter").html(papaCounter);
  $("#mamaCounter").html(mamaCounter);

  $("#papaNaam").html(papa);
  $("#mamaNaam").html(mama);

  //add listeners
  $("#clickButton").on("click", wieVerschoontDeLuier);
  $("#papa").on("click", papaKnop);
  $("#mama").on("click", mamaKnop);
  $("#resetButton").on("click",resetScores);

  
  // opening animation
  $("#clickButtonContainer").slideDown(1000);
  $("#papaMamaContainer").slideDown(1000);  
  $("#resetButtonContainer").slideDown(1000);

});

