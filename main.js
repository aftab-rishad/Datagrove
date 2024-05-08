//Function For Smooth Scroll
function smoothScroll() {
  const lenis = new Lenis({
    lerp: 0.05,
    syncTouch: true,
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
  Shery.textAnimate("#cm-heading h1", {
    style: 1,
    duration: 3,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
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
  Shery.imageEffect("#cm-project img", {
    style: 3,
    config: {
      uFrequencyX: { value: 7.63, range: [0, 100] },
      uFrequencyY: { value: 7.63, range: [0, 100] },
      uFrequencyZ: { value: 61.07, range: [0, 100] },
      geoVertex: { range: [1, 64], value: 18.79 },
      zindex: { value: -9996999, range: [-9999999, 9999999] },
      aspect: { value: 0.6715541381456129 },
      ignoreShapeAspect: { value: true },
      shapePosition: { value: { x: 0, y: 0 } },
      shapeScale: { value: { x: 0.5, y: 0.5 } },
      shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
      shapeRadius: { value: 0, range: [0, 2] },
      currentScroll: { value: 0 },
      scrollLerp: { value: 0.07 },
      gooey: { value: false },
      infiniteGooey: { value: false },
      growSize: { value: 4, range: [1, 15] },
      durationOut: { value: 1, range: [0.1, 5] },
      durationIn: { value: 1.5, range: [0.1, 5] },
      displaceAmount: { value: 0.5 },
      masker: { value: true },
      maskVal: { value: 1.58, range: [1, 5] },
      scrollType: { value: 0 },
      noEffectGooey: { value: true },
      onMouse: { value: 1 },
      noise_speed: { value: 0.2, range: [0, 10] },
      metaball: { value: 0.2, range: [0, 2] },
      discard_threshold: { value: 0.5, range: [0, 1] },
      antialias_threshold: { value: 0.002, range: [0, 0.1] },
      noise_height: { value: 0.5, range: [0, 2] },
      noise_scale: { value: 10, range: [0, 100] },
    },
  });
  Shery.imageEffect("#seo-project img", {
    style: 6,
    config: {
      noiseDetail: { value: 9.16, range: [0, 100] },
      distortionAmount: { value: 2.98, range: [0, 10] },
      scale: { value: 36.36, range: [0, 100] },
      speed: { value: 0.39, range: [0, 1] },
      zindex: { value: -9996999, range: [-9999999, 9999999] },
      aspect: { value: 1.5641985747070903 },
      ignoreShapeAspect: { value: true },
      shapePosition: { value: { x: 0, y: 0 } },
      shapeScale: { value: { x: 0.5, y: 0.5 } },
      shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
      shapeRadius: { value: 0, range: [0, 2] },
      currentScroll: { value: 0 },
      scrollLerp: { value: 0.07 },
      gooey: { value: false },
      infiniteGooey: { value: false },
      growSize: { value: 4, range: [1, 15] },
      durationOut: { value: 1, range: [0.1, 5] },
      durationIn: { value: 1.5, range: [0.1, 5] },
      displaceAmount: { value: 0.5 },
      masker: { value: true },
      maskVal: { value: 1.18, range: [1, 5] },
      scrollType: { value: 0 },
      geoVertex: { range: [1, 64], value: 1 },
      noEffectGooey: { value: true },
      onMouse: { value: 0 },
      noise_speed: { value: 0.2, range: [0, 10] },
      metaball: { value: 0.2, range: [0, 2] },
      discard_threshold: { value: 0.5, range: [0, 1] },
      antialias_threshold: { value: 0.002, range: [0, 0.1] },
      noise_height: { value: 0.5, range: [0, 2] },
      noise_scale: { value: 10, range: [0, 100] },
    },
  });
  Shery.imageEffect("#web-dev-img", {
    style: 5,
    gooey: true,
    config: {
      a: { value: 0.46, range: [0, 30] },
      b: { value: -0.97, range: [-1, 1] },
      zindex: { value: -9996999, range: [-9999999, 9999999] },
      aspect: { value: 2.753061224489796 },
      ignoreShapeAspect: { value: true },
      shapePosition: { value: { x: 0, y: 0 } },
      shapeScale: { value: { x: 0.5, y: 0.5 } },
      shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
      shapeRadius: { value: 0, range: [0, 2] },
      currentScroll: { value: 0 },
      scrollLerp: { value: 0.07 },
      gooey: { value: true },
      infiniteGooey: { value: true },
      growSize: { value: 4, range: [1, 15] },
      durationOut: { value: 1, range: [0.1, 5] },
      durationIn: { value: 1.5, range: [0.1, 5] },
      displaceAmount: { value: 0.5 },
      masker: { value: true },
      maskVal: { value: 1.06, range: [1, 5] },
      scrollType: { value: 0 },
      geoVertex: { range: [1, 64], value: 1 },
      noEffectGooey: { value: true },
      onMouse: { value: 1 },
      noise_speed: { value: 0.2, range: [0, 10] },
      metaball: { value: 0.2, range: [0, 2], _gsap: { id: 34 } },
      discard_threshold: { value: 0.5, range: [0, 1] },
      antialias_threshold: { value: 0, range: [0, 0.1] },
      noise_height: { value: 0.5, range: [0, 2] },
      noise_scale: { value: 10, range: [0, 100] },
    },
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
