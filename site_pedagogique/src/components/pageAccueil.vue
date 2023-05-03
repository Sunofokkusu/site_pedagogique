<template>
  <div>
    <div class="header">
      <div class="bg">
        <h1 class="title">L'ÉVÉNEMENT PHOTOGRAPHIQUE</h1>
        <p class="descr">
          Cette édition 2023 s’articule autour d’une pensée philosophique:
          <strong>Danse avec la Terre</strong>. Elle aborde la dimension
          symbolique et poétique de notre rapport à notre planète, à notre
          environnement, à notre société, une pensée qui amène une réflexion sur
          nos modes de vie contemporains et leurs influences sur l’environnement
          et les hommes.
        </p>
      </div>
    </div>
    <div class="photos">
      <h2>PHOTOS PAR THÈME</h2>

      <div class="row">
        <div
          class="card portrait col-2"
          @click="this.$router.push({ name: 'pagePortrait' })"
        >
          PORTAITS
          <hr />
        </div>
        <div
          class="card paysage col-2"
          @click="this.$router.push({ name: 'pagePaysage' })"
        >
          PAYSAGES
          <hr />
        </div>
        <div
          class="card abstrait col-2"
          @click="this.$router.push({ name: 'pageAbstrait' })"
        >
          ABSTRAIT
          <hr />
        </div>
        <div
          class="card all col-2"
          @click="this.$router.push({ name: 'allPhotos' })"
        >
          TOUT VOIR
          <hr />
        </div>
      </div>

      <h2>PHOTOS PAR COULEURS</h2>

      <div class="row">
        <div
          class="card jaune col-2"
          @click="this.$router.push({ name: 'pageJaune' })"
        >
          JAUNE
          <hr />
        </div>

        <div
          class="card bleu col-2"
          @click="this.$router.push({ name: 'pageBleu' })"
        >
          BLEU
          <hr />
        </div>

        <div
          class="card noir col-2"
          @click="this.$router.push({ name: 'pageNoir' })"
        >
          NOIR
          <hr />
        </div>

        <div
          class="card gris col-2"
          @click="this.$router.push({ name: 'pageGris' })"
        >
          GRIS
          <hr />
        </div>
      </div>
    </div>
    <div class="infos">
      <h2>INFORMATIONS</h2>
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
  height: 100vh;
  margin-top: 0 !important;
  background-color: black;
  color: white;
  padding-top: 1px;
}
.bg {
  height: 90vh;
  background-image: url("../assets/background.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.title {
  padding-top: 25vh;
  font-size: 4vw;
  font-weight: bold;
  margin-bottom: 0;
}
.descr {
  padding-left: 20px;
  padding-right: 20px;
}
h2 {
  font-size: 3vw;
  font-weight: bold;
}
.photos {
  height: 100%;
  color: black;
}
.row {
  justify-content: center;
}
.card {
  margin-left: 20px;
  border-radius: 15px;
  height: 300px !important;
  color: white;
  cursor: pointer;
}
.portrait {
  background-image: url("../assets/photos/teCassePasLaTete.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.paysage {
  background-image: url("../assets/photos/Anne-sophieCOSTENOBLE.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.abstrait {
  background-image: url("../assets/photos/bayle.PNG");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.all {
  background-image: url("../assets/background.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.jaune {
  background-image: url("../assets/photos/LVIV.PNG");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.bleu {
  background-image: url("../assets/photos/space.PNG");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.noir {
  background-image: url("../assets/photos/samedi25avril.PNG");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.gris {
  background-image: url("../assets/photos/hivernies.PNG");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
hr{
    border-top: white;
}
.infos {
  background-color: black;
  color: white;
}
body {
  margin: 0 !important;
}
</style>
