import gsap from "gsap";
const play = document.querySelector(".play");
const pause = document.querySelector(".pause");
const resume = document.querySelector(".resume");
const restart = document.querySelector(".restart");
const reverse = document.querySelector(".reverse");
const kill = document.querySelector(".kill");
const yoyo = document.querySelector(".yoyo");
const repeat = document.querySelector(".repeat");

const animation = gsap.to(".box", {
    y: -200,
    x: 400,
    opacity: 1,
    rotationX: 360,
    background: "#ff6f61",
    borderRadius: "50%",
    duration: 3,
});
play.addEventListener("click", () => { animation.play() })
pause.addEventListener("click", () => { animation.pause() })
resume.addEventListener("click", () => { animation.resume() })
restart.addEventListener("click", () => { animation.restart() })
reverse.addEventListener("click", () => { animation.reverse() })
// The kill totally removes the animation unti you referesh the page
kill.addEventListener("click", () => { animation.kill() })
// The yoyo reverses the animation but it can only work with repeat. This is more of a toggle function
// You also have to pass a boolean argument for the yoyo function 
yoyo.addEventListener("click", () => { animation.yoyo(true) })
// This sets the repeat of the entire animation and it is also a toggle field
// you have to pass in the argument of how many times you want to repeat
repeat.addEventListener("click", () => { animation.repeat(3) })
