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
    <div class="intro">
      <h2>LA PHOTOGRAPHIE</h2>
      <img class="imgintro" src="../assets/photos/intro.jpg"/>
    </div>
    <hr/>
    <div class="photos">
      <h2>PHOTOS PAR THÈME</h2>

      <div class="row">
        <div
          class="card portrait col-2"
          @click="this.$router.push({ name: 'pagePortrait' })"
        >
          PORTRAITS
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
          class="card natureMorte col-2"
          @click="this.$router.push({ name: 'pageNatureMorte' })"
        >
          NATURE MORTE
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
      <h2 class="infoTitle">INFORMATIONS</h2>
      <div class="row pb">
        <div class="col-4 adress">
          47 Bd d’Austrasie – à côté de l’Autre Canal <br />
          <div class="map">
            <l-map ref="map" :zoom="zoom" :center="[48.693143444429246, 6.1993434429581304]">
              <l-tile-layer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                layer-type="base"
                name="OpenStreetMap"
              ></l-tile-layer>
              <l-marker :lat-lng="[48.693143444429246, 6.1993434429581304]" ></l-marker>
            </l-map>
          </div>
        </div>
        <div class="col-4">
          L’OCTROI NANCY. Du 12 mai au 4 juin 2023<br />
          Vernissage • 12 mai 2023 à 18h <br />
          <hr class="sepInfo" />
          Entrée payante: Prix libre <br />
          <hr class="sepInfo" />
          Ouverture:<br />
          <strong>Mardi, mercredi, jeudi</strong> 15h > 19h<br />
          <strong>Vendredi</strong> 15h > 23h<br />
          <strong>Samedi</strong> 14h > 23h<br />
          <strong>Dimanche</strong> 14h > 18h<br />
          <strong>Lundi 29 mai</strong> 15h > 19h <br />
        </div>
      </div>
      <div class="pb2">
        <strong>Site web</strong> :
        <a href="https://evenement-photographique.fr"
          >https://evenement-photographique.fr</a
        ><br />
        <strong>Instagram</strong> :
        <a href="https://www.instagram.com/levenementphotonancy"
          >https://www.instagram.com/levenementphotonancy</a
        ><br />
        <strong>Page FB</strong> :
        <a href="https://www.facebook.com/EvenementPhotographiqueNancy"
          >https://www.facebook.com/EvenementPhotographiqueNancy</a
        ><br />
      </div>
    </div>
    <footerPage/>
  </div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import footerPage from '@/components/footerPage.vue';
import { LMap,LTileLayer,LMarker } from "@vue-leaflet/vue-leaflet";
export default {
  name: "pageAccueil",
  components: {
    LMap,
    LTileLayer,
    LMarker,
    footerPage
  },
  data() {
    return {
      zoom: 15,
    };
  },
  mounted(){
    window.scroll(0, 0);
  }
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
  background-image: url("/src/assets/background.png");
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
.photos, .intro {
  height: 100%;
  color: black;
  background-color: white;
}
.imgintro{
  width: 50vw;
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
  /* background-image: url("../assets/photos/bayle2.jpg"); */
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.paysage {
  /* background-image: url("../assets/photos/nuit_dorages.jpg"); */
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.abstrait {
  /* background-image: url("../assets/photos/oneiros.jpg"); */
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.natureMorte {
  /* background-image: url("../assets/photos/ostende.png"); */
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.jaune {
  /* background-image: url("../assets/photos/LVIV.jpg"); */
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.bleu {
  /* background-image: url("../assets/photos/space.png"); */
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.noir {
  /* background-image: url("../assets/photos/sur_la_terre_comme_au_ciel.jpg"); */
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.gris {
  /* background-image: url("../assets/photos/bayle4.jpg"); */
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
hr {
  border-top: white;
}
.infoTitle {
  color: white;
}
.infos {
  background-color: black;
  color: white;
}
.sepInfo {
  width: 40%;
}
.map {
  height: 100%;
  width: 100%;
}
body {
  margin: 0 !important;
}
.pb {
  padding-bottom: 100px;
}
.pb2 {
  padding-bottom: 20px;
}
a {
  text-decoration: underline;
  color: white;
}
</style>
