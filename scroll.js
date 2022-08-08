gsap.registerPlugin(ScrollTrigger);


const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".wrap",
        markers: true,
        scrub: true,
        pin: true,
        toggleActions: "restart",
    }
}); //tl 위에 선언해야 함

tl.to(".wrap", {
    scrollTrigger: {
        trigger: ".wrap",
    },
    backgroundColor: "white",
    // end: "+=500",
}).to(".start-text", {
    scrollTrigger: {
        trigger: ".wrap",
    },
    scale: 0,
}).from([".text1, .text3, .text3"], {
    scrollTrigger: {
        trigger: ".wrap",
    },
    xPercent: 300,
}).from([".text2, .text4"], {
    scrollTrigger: {
        trigger: ".wrap",
    },
    xPercent: -100,
}).to(".slide2", {
    opacity: 1,
}).to(".p1", {
    scrollTrigger: {
        trigger: ".p1",
    },
    y: 10,
    opacity: 1,
}).to(".p2", {
    y: 10,
    opacity: 1,
}).to(".p3", {
    y: 10,
    opacity: 1,
}).to(".p4", {
    y: 80,
    opacity: 1,
}).to(".p5", {
    y: 80,
    opacity: 1,
}).to(".p6", {
    y: 80,
    opacity: 1,
}).to(".p7", {
    y: 80,
    opacity: 1,
}).to(".p8", {
    y: 200,
    opacity: 1,
}).to(".p9", {
    y: 200,
    opacity: 1,
}).to(".p10", {
    y: 200,
    opacity: 1,
}).to(".flip-text", {
    y: 100,
}).to(".flip-text", {
    y: 200,
})


const flipText = document.querySelector(".p9").getBoundingClientRect().width;
const colorBar = document.querySelector(".color-bar");

colorBar.style.width = `${flipText}px`;

