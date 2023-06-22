<template>
  <div>
    <div class="row">
      <div class="cursor col-12">
        <div class="wrapper"><div class="shadow"></div></div>
      </div>
      <div class="col-md-6 col-12">
        <h2>Sleepless country</h2>
        <p>Adrienne SURPRENANT</p>
        <div class="row">
          <img class="pictog col-4" src="../../assets/pictos/lampe.png" />
          <div class="col-8">
            <p class="falc">
              Quelqu’un se cache dans le noir<br />Cherche-le ! <br />A-t-il
              l’air heureux ou triste ?
            </p>
          </div>
        </div>
      </div>
    </div>
    <hr />
  </div>
</template>

<script>
export default {
  name: "sleeplessCountry",
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
.wrapper {
  height: 100vh;
  background-image: url("../../assets/photos/sleepless_country.jpg");
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
