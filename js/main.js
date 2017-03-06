$(function () { // wait for document ready
     // init
     var controller = new ScrollMagic.Controller();
     // define movement of panels
     var wipeAnimation = new TimelineMax()
         .fromTo("div.panel.second", 1, {x: "-100%"}, {x: "0%", ease: Linear.easeNone})  // in from left
         .fromTo("div.panel.third",    1, {x:  "100%"}, {x: "0%", ease: Linear.easeNone})  // in from right
         .fromTo("div.panel.fourth", 1, {y: "-100%"}, {y: "0%", ease: Linear.easeNone}); // in from top
         // create scene to pin and link animation
     new ScrollMagic.Scene({
         triggerElement: "#pinContainer",
         triggerHook: "onLeave",
         duration: "300%"
     })
     .setPin("#pinContainer")
     .setTween(wipeAnimation)
     .addTo(controller);
});

var firstImagesChange = document.getElementById("changeFirst");
var secondImagesChange = document.getElementById("changeSecond");
var thirdImagesChange = document.getElementById("changeThird");

var imagesForFirstGame = ["img/first_but_first.png","img/first_but_second.png","img/first_but_third.png","img/first_game.png"];
var imagesForSecondGame = ["img/second_but_first.png","img/second_but_second.png","img/second_but_third.png","img/second_game.png"];
var imagesForThirdGame = ["img/third_but_first.png","img/third_but_second.png","img/third_but_third.png","img/third_game.png"];

var indexFirst=0;
var indexSecond=0;
var indexThird=0;

function changeFirstImages() {
  firstImagesChange.setAttribute("src", imagesForFirstGame[indexFirst]);
  indexFirst++;
  if (indexFirst >= imagesForFirstGame.length) {
    indexFirst=0;
  }
}

function changeSecondImages() {
  secondImagesChange.setAttribute("src", imagesForSecondGame[indexSecond]);
  indexSecond++;
  if (indexSecond >= imagesForSecondGame.length) {
    indexSecond=0;
  }
}

function changeThirdImages()
{
  thirdImagesChange.setAttribute("src", imagesForThirdGame[indexThird]);
  indexThird++;
  if(indexThird >= imagesForThirdGame.length)
  {
    indexThird=0;
  }
}

setInterval(changeFirstImages, 1500);
setInterval(changeSecondImages, 1500);
setInterval(changeThirdImages, 1500);
