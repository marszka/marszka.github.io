$(function () { // wait for document ready
     // init
     var controller = new ScrollMagic.Controller();
     // define movement of panels
     var wipeAnimation = new TimelineMax()
         .fromTo("div.panel.second", 1, {x: "-100%"}, {x: "0%", ease: Linear.easeNone})  // in from left
         .fromTo("div.panel.third",    1, {x:  "100%"}, {x: "0%", ease: Linear.easeNone})  // in from right
         .fromTo("div.panel.fourth", 1, {y: "-100%"}, {y: "0%", ease: Linear.easeNone}) // in from top
         .fromTo("div.panel.fifth", 1, {y: "100%"}, {y: "0%", ease: Linear.easeNone}); // in from bottom
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