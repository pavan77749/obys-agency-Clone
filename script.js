function loadingAnimation() {

    var t1 = gsap.timeline();
    t1.from(".line h1", {
      y: 100,
      stagger: 0.5,
      duration: 0.6,
      delay: 0.5,
    });
    t1.from("#line1-part1 .line h2", {
      opacity: 0,
      onStart: function () {
        var h5timer = document.querySelector("#line1-part1 h5");
        var grow = 0;
        setInterval(function () {
          if (grow < 100) {
            h5timer.innerHTML = grow++;
          } else {
            h5timer.innerHTML = grow;
          }
        }, 45);
      },
    });
    t1.to('.line h2 ',{
        animationName:"anime",
        opacity:1
    })
    t1.to("#loader", {
      opacity: 0,
      duration: 0.2,
      delay: 3.5,
    });
    t1.from("#page1", {
      delay: 0.4,
      y: 1600,
      opacity: 0,
      ease: Power4,
    });
    t1.to("#loader", {
      display: "none",
    });
}
loadingAnimation()

//  cursor 
function cursor(){

  document.addEventListener("mousemove",function(dets){
    gsap.to('#crsr',{
      left:dets.x,
      top:dets.y
    })
  })
  Shery.makeMagnet("#nav-part2 h4" /* Element to target.*/, { });
}
cursor()

