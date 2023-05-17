const heroSection = document.querySelector(".section-hero");

// Create a responsive navbar component 

const mobile_nav = document.querySelector(".mobile-navbar-btn"); 
const headerElem = document.querySelector(".header");

mobile_nav.addEventListener('click', () => {
  headerElem.classList.toggle("active");
}) 

// Create a sticky responsive navbar component

const observer = new IntersectionObserver((entries) => {
  const ent = entries[0];
  !ent.isIntersecting ? 
  document.body.classList.add("sticky"):
  document.body.classList.remove("sticky");

}, {
  
  root:null,
  threshold: 0,

});
observer.observe(heroSection);



// Create a portfolio tabbed component 


const p_btns = document.querySelector(".p-btns");
const p_btn = document.querySelectorAll(".p-btn");
const p_img_elem = document.querySelectorAll(".img-overlay");

p_btns.addEventListener('click', (e) =>{
  const p_btn_clicked = e.target;
  console.log(p_btn_clicked);

  p_btn.forEach((curElem) => curElem.classList.remove("p-btn-active"));

  p_btn_clicked.classList.add("p-btn-active");

  const btn_num = p_btn_clicked.dataset.btnNum;
  console.log(btn_num);

  const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);

  p_img_elem.forEach((curElem) => curElem.classList.add("p-image-not-active"));

  img_active.forEach((curElem) => curElem.classList.remove("p-image-not-active"));
});



// Swiper js code 
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  autoplay:{
    delay: 2500,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Scroll to top button 

const footerElem = document.querySelector(".section-footer");

const scroollElement = document.createElement("div");
scroollElement.classList.add("scrollTop-style");

scroollElement.innerHTML = `<ion-icon name="arrow-up-outline" class="scroll-top"></ion-icon>`;

footerElem.after(scroollElement);

const scrollTop = () =>{
  heroSection.scrollIntoView({ behavior: "smooth"});
};

scroollElement.addEventListener("click" , scrollTop);

// Animate number counter 
const counterNum = document.querySelectorAll(".counter-numbers");
const speed = 200;
counterNum.forEach((curElem) => {

  const updateNumber = () => {
    const targetNumber = parseInt(curElem.dataset.number);
    // console.log(targetNumber);
    const initialNum = parseInt(curElem.innerText);
    // console.log(initialNum);
    const incrementNumber = Math.trunc(targetNumber/ speed);
    // console.log(incrementNumber);
    if(initialNum < targetNumber){
      curElem.innerText = `${initialNum + incrementNumber}+`;

      setTimeout(updateNumber, 10);
    }
  };

  updateNumber();
});

const workSection = document.querySelector(".section-work-data");
const workObserver = new IntersectionObserver((entries, observer) => {
  const [entry] = entries;
  console.log(entries);
  // if(entry.isIntersecting = false
  if(!entry.isIntersecting) return;
  const counterNum = document.querySelectorAll(".counter-numbers");
const speed = 200;
counterNum.forEach((curElem) => {

  const updateNumber = () => {
    const targetNumber = parseInt(curElem.dataset.number);
    // console.log(targetNumber);
    const initialNum = parseInt(curElem.innerText);
    // console.log(initialNum);
    const incrementNumber = Math.trunc(targetNumber/ speed);
    // console.log(incrementNumber);
    if(initialNum < targetNumber){
      curElem.innerText = `${initialNum + incrementNumber}+`;

      setTimeout(updateNumber, 10);
    }
  };

  updateNumber();
});
observer.unobserve(workSection);
}, {
  root:null,
  threshold:0,
});

workObserver.observe(workSection);