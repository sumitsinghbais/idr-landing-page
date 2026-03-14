/* SMOOTH SCROLL FOR NAVBAR */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener("click", function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({
behavior:"smooth"
});

});

});

/* SCROLL REVEAL ANIMATION */

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){
entry.target.classList.add("show");
}

});

});

document.querySelectorAll("section").forEach(section => {
observer.observe(section);
});

/* CARD TILT ANIMATION */

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

card.addEventListener("mousemove",(e)=>{

const rect = card.getBoundingClientRect();

const x = e.clientX - rect.left;
const y = e.clientY - rect.top;

const centerX = rect.width / 2;
const centerY = rect.height / 2;

const rotateX = (y - centerY) / 15;
const rotateY = (centerX - x) / 15;

card.style.transform =
`rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform =
"rotateX(0deg) rotateY(0deg) translateY(0px)";

});

});

/* LOGO MOUSE INTERACTION */

const logo = document.querySelector(".floating-logo");

if(logo){

document.addEventListener("mousemove",(e)=>{

let x = (window.innerWidth / 2 - e.pageX) / 60;
let y = (window.innerHeight / 2 - e.pageY) / 60;

logo.style.transform =
`rotateY(${x}deg) rotateX(${y}deg)`;

});

}
