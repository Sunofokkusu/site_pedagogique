<template>
  <div>
    <div class="header">
      <div class="bg">
        <h1 class="title">L'ÉVÉNEMENT PHOTOGRAPHIQUE</h1>
        <p class="descr">
          Cette édition 2023 s’articule autour d’une pensée philosophique:
          <strong>Danse avec la Terre</strong>. Elle aborde la dimension symbolique et poétique
          de notre rapport à notre planète, à notre environnement, à notre
          société, une pensée qui amène une réflexion sur nos modes de vie
          contemporains et leurs influences sur l’environnement et les hommes.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "pageAccueil",
};
</script>

<style>
.center {
  text-align: center;
}
.header {
  height: 98vh;
  margin-top: 0 !important;
  background-color: black;
  color: white;
  padding-top: 1px;
  padding-bottom: 20px;
}
.bg {
  height: 95vh;
  background-image: url("../assets/background.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.title {
  padding-top: 40vh;
}
.descr{
padding-left: 20px;
padding-right: 20px;
}
body {
  margin: 0 !important;
}
</style>
