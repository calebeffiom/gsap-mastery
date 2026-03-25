import gsap from "gsap";
gsap.to(".box", {
    y: -200,
    x: -400,
    opacity: 1,
    rotationX: 360,
    background: "#ff6f61",
    borderRadius: "50%",
    scale: 2,
    duration: 4,
    repeat: -1,
    yoyo: true,
});