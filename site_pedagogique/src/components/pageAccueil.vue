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
      <h2 class="acc">
        LA PHOTOGRAPHIE <font-awesome-icon :icon="['fas', 'camera']" />
      </h2>
      <div class="row">
        <img class="imgintro col-5" src="../assets/photos/intro.jpg" />
        <p class="col-5 q-mt-sm">
          Il existe plusieurs manières de faire des images<br />
          La peinture, le dessin et aussi la photographie<br />
          La photographie est une manière de faire des images <br />
          Les photographies peuvent être sur du papier, sur un ordinateur ou un
          téléphone<br />
          Avec les photographies on peut garder des moments en souvenir
        </p>
      </div>
    </div>
    <hr />
    <div class="photos">
      <h2 class="acc">PHOTOS PAR THÈME</h2>

      <div class="row">
        <div
          class="card portrait col-2"
          @click="this.$router.push({ name: 'pagePortrait' })"
        >
          <font-awesome-icon class="picto" icon="fa-solid fa-user" /> PORTRAITS
        </div>
        <div
          class="card paysage col-2"
          @click="this.$router.push({ name: 'pagePaysage' })"
        >
          <font-awesome-icon class="picto" icon="fa-solid fa-mountain-sun" />
          PAYSAGES
        </div>
        <div
          class="card abstrait col-2"
          @click="this.$router.push({ name: 'pageAbstrait' })"
        >
          <font-awesome-icon class="picto" icon="fa-solid fa-wave-square" />
          ABSTRAIT
        </div>
        <div
          class="card natureMorte col-2"
          @click="this.$router.push({ name: 'pageNatureMorte' })"
        >
          <font-awesome-icon class="picto" icon="fa-solid fa-apple-whole" />
          NATURE MORTE
        </div>
        <div
          class="card all col-2"
          @click="this.$router.push({ name: 'allPhotos' })"
        >
          <font-awesome-icon class="picto" icon="fa-solid fa-border-all" /> TOUT
          VOIR
        </div>
      </div>

      <h2 class="acc">PHOTOS PAR COULEURS</h2>

      <div class="row">
        <div
          class="card jaune col-2"
          @click="this.$router.push({ name: 'pageJaune' })"
        >
          JAUNE
        </div>

        <div
          class="card bleu col-2"
          @click="this.$router.push({ name: 'pageBleu' })"
        >
          BLEU
        </div>

        <div
          class="card noir col-2"
          @click="this.$router.push({ name: 'pageNoir' })"
        >
          NOIR
        </div>

        <div
          class="card gris col-2"
          @click="this.$router.push({ name: 'pageGris' })"
        >
          GRIS
        </div>

        <div
          class="card blanc col-2"
          @click="this.$router.push({ name: 'pageBlanc' })"
        >
          BLANC
        </div>
      </div>
    </div>
    <div class="infos">
      <h2 class="infoTitle">
        INFORMATIONS <font-awesome-icon icon="fa-solid fa-circle-info" />
      </h2>
      <div class="row pb">
        <div class="col-4 adress">
          47 Bd d’Austrasie – à côté de l’Autre Canal <br />
          <div class="map">
            <l-map
              ref="map"
              :zoom="zoom"
              :center="[48.693143444429246, 6.1993434429581304]"
            >
              <l-tile-layer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                layer-type="base"
                name="OpenStreetMap"
              ></l-tile-layer>
              <l-marker
                :lat-lng="[48.693143444429246, 6.1993434429581304]"
              ></l-marker>
            </l-map>
          </div>
        </div>
        <div class="col-4 q-ml-md">
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
    <footerPage />
  </div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import footerPage from "@/components/footerPage.vue";
import { LMap, LTileLayer, LMarker } from "@vue-leaflet/vue-leaflet";
export default {
  name: "pageAccueil",
  components: {
    LMap,
    LTileLayer,
    LMarker,
    footerPage,
  },
  data() {
    return {
      zoom: 15,
    };
  },
  mounted() {
    window.scroll(0, 0);
  },
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
  margin-bottom: 0 !important;
}
.acc {
  margin-bottom: 20px !important;
}
.photos,
.intro {
  height: 100%;
  color: black;
  background-color: white;
}
.imgintro {
  width: 650px !important;
}
.row {
  justify-content: center;
}
.card {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
  border-radius: 15px;
  height: 300px !important;
  width: 250px !important;
  color: white;
  cursor: pointer;
  margin-bottom: 15px;
  font-size: 30px;
}
.picto {
  font-size: 60px;
  position: absolute;
  top: 20%;
  left: 40%;
}
.all {
  background-image: url("/src/assets/background.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.portrait {
  background-image: url("/src/assets/photos/bayle2.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.paysage {
  background-image: url("/src/assets/photos/nuit_dorages.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.abstrait {
  background-image: url("/src/assets/photos/oneiros.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.natureMorte {
  background-image: url("/src/assets/photos/ostende.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.jaune {
  background-image: url("/src/assets/photos/LVIV.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.bleu {
  background-image: url("/src/assets/photos/space.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.noir {
  background-image: url("/src/assets/photos/sur_la_terre_comme_au_ciel.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.gris {
  background-image: url("/src/assets/photos/bayle4.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.blanc {
  background-image: url("/src/assets/photos/homme.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
hr {
  border-top: white;
}
.infoTitle {
  color: white;
  margin-bottom: 20px !important;
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
  padding-bottom: 65px;
}
.pb2 {
  padding-bottom: 20px;
}
a {
  text-decoration: underline;
  color: white;
}
</style>
