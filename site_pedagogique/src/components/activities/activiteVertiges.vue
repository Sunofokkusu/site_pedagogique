<template>
    <div>
      <h2>Je fixerai des vertiges</h2>
      <p>Georges PACHECO</p>
      <div class="wrapper2"><div class="shadow"></div></div>
      <hr />
    </div>
  </template>
  
  <script>
  export default {
    name: "activiteVertiges",
    mounted() {
      const shadow = document.querySelector(".shadow");
  
      document.addEventListener("mousemove", (e) => {
        let x = e.clientX - document.documentElement.clientWidth * 1.5;
        let y = e.clientY - document.documentElement.clientHeight * 1.5;
        shadow.style.transform = "translate(" + x + "px, " + y + "px)";
      });
    },
  };
  </script>
  
  <style>
  .wrapper2 {
    height: 100vh;
    background-image: url("../../assets/photos/je_fixerai_des_vertiges2.jpg");
    background-size: cover;
    position: relative;
    overflow: hidden;
  }
  .shadow {
    position: absolute;
    width: 200vw;
    height: 200vh;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    background-image: radial-gradient(circle at center, transparent, #000 20%);
  }
  </style>
  