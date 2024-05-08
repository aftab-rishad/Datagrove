//Function For Smooth Scroll
function smoothScroll() {
  const lenis = new Lenis({
    lerp: 0.05,
    syncTouch: true,
    touchMultiplier: 1,
    touchInertiaMultiplier: 35,
    lock: true,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
}
smoothScroll();
//Function For Website Animation
function animation() {
  gsap.from(".hero-animation", {
    y: -100,
    opacity: 0,
    duration: 0.8,
    stagger: 0.5,
  });
  gsap.to(".hero-right", {
    width: 0,
    scrollTrigger: {
      trigger: "#hero-section",
      scroller: "body",
      // markers: true,
      start: "top 0%",
      scrub: 2,
      pin: true,
    },
  });
  gsap.to(".hero-center div", {
    opacity: 0,
    display: "none",
    scrollTrigger: {
      trigger: ".hero-center",
      scroller: "body",
      // markers: true,
      start: "top 0%",
      scrub: 2,
    },
  });
  gsap.from(".anim-for-port", {
    y: 50,
    stagger: 0.3,
    opacity: 0,
    ease: Expo,
    duration: 1,
    scrollTrigger: {
      trigger: "#portfolio-projects",
      scroller: "body",
      // markers: true,
      start: "top 50%",
    },
  });
  Shery.textAnimate("#cm-heading h1", {
    style: 1,
    duration: 3,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
  });
  Shery.makeMagnet(".shake-eff", {
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });
}
animation();
//Function For Testimonial Section
function testimonial() {
  let image = document.querySelector("#testi-img");
  let name = document.querySelector("#testi-name");
  let name1 = document.querySelector("#testi-name-1");
  let name2 = document.querySelector("#testi-name-2");
  let name3 = document.querySelector("#testi-name-3");
  let name4 = document.querySelector("#testi-name-4");
  let names = document.querySelectorAll(".testi-names");
  name1.addEventListener("click", () => {
    name.innerHTML = "Daniel Garcia";
    image.src = "img-vid/person-1.png";
  });
  name2.addEventListener("click", () => {
    name.innerHTML = "Aftab Rishad";
    image.src = "img-vid/person-2.png";
  });
  name3.addEventListener("click", () => {
    name.innerHTML = "Olivia Edwards";
    image.src = "img-vid/person-3.png";
  });
  name4.addEventListener("click", () => {
    name.innerHTML = "Amelia Lee";
    image.src = "img-vid/person-4.png";
  });
  names.forEach((elem) => {
    elem.addEventListener("mouseenter", () => {
      gsap.to(elem.childNodes[3], {
        scale: 1,
      });
    });
    elem.addEventListener("mouseleave", () => {
      gsap.to(elem.childNodes[3], {
        scale: 0,
      });
    });
    elem.addEventListener("mousemove", (det) => {
      gsap.to(elem.childNodes[3], {
        x: det.x - elem.getBoundingClientRect().x - 50,
        y: det.y - elem.getBoundingClientRect().y - 100,
      });
    });
  });
}
testimonial();
