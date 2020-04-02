const arrow = document.querySelector("#arrow");
let arrowRects = arrow.getBoundingClientRect();
let arrowX = arrowRects.left + arrowRects.width / 2;
let arrowY = arrowRects.top + arrowRects.height / 2;


window.addEventListener("resize", function(event) {
    arrowRects = arrow.getBoundingClientRect();
    arrowX = arrowRects.left + arrowRects.width / 2;
    arrowY = arrowRects.top + arrowRects.height / 2;
  });

  window.addEventListener("scroll", function(event) {
    arrowRects = arrow.getBoundingClientRect();
    arrowX = arrowRects.left + arrowRects.width / 2;
    arrowY = arrowRects.top + arrowRects.height / 2;
  });

  addEventListener("mousemove", function(event) {
    arrow.style.transform = "rotate(calc(180deg + " + Math.atan2(event.clientY - arrowY, event.clientX - arrowX) + "rad))";
});




