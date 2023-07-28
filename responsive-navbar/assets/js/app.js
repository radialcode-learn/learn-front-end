let cursorIcon = document.querySelector(".cursorIcon");
let cursorblur = document.querySelector(".cursorblur");
document.addEventListener("mousemove", (dets) => {
    // console.log(dets);

    cursorIcon.style.left = dets.x + "px"
    cursorIcon.style.top = dets.y + "px"
    cursorblur.style.left = dets.x - 120 + "px"
    cursorblur.style.top = dets.y - 120 + "px"
})

gsap.to("header", {
    // backgroundImage: "linear-gradient(180deg, #33A7F9 0 %, rgba(51, 167, 249, 0.45) 63.02 %, rgba(51, 167, 249, 0) 100 %)",
    backgroundColor: "rgb( 0, 0, 0)",
    duration: 0.5,
    scrollTrigger: {
        trigger: "header",
        scroller: "body",
        start: " top  -10%",
        marker: true,
        end: "bottom -11%",
        scrub: 3
    }
})