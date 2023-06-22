<template>
  <div>
    <headerPage />
    <div class="corps">
      <section class="grisbg">
        <h2>
          Qu'est ce que l'art abstrait
          <font-awesome-icon icon="fa-solid fa-circle-question" />
        </h2>
        <p class="def">
          Image qui représente des formes et des couleurs mélangés
        </p>
      </section>
      <h2>
        L'abstrait dans l'art
        <font-awesome-icon icon="fa-solid fa-paintbrush" />
      </h2>
      <p class="def">
        Clique sur les cases pour avoir des informations sur l'œuvre.
      </p>
      <div class="row">
        <div class="card col-2">
          <div class="card__face card__face--front">
            <img class="col-2 img" src="../assets/exemples/sanstitre.jpg" />
          </div>
          <div class="card__face card__face--back">
            Sans titre, de Zao Wou-Ki
          </div>
        </div>
        <div class="card col-2">
          <div class="card__face card__face--front">
            <img class="col-2 img" src="../assets/exemples/congress.jpg" />
          </div>
          <div class="card__face card__face--back">
            Congress, de Julie Mehretu
          </div>
        </div>
        <div class="card col-2">
          <div class="card__face card__face--front">
            <img class="col-2 img" src="../assets/exemples/abstract.jpg" />
          </div>
          <div class="card__face card__face--back">
            Abstract Painting, de Gerhard Richter
          </div>
        </div>
        <div class="card col-2">
          <div class="card__face card__face--front">
            <img class="col-2 img" src="../assets/exemples/composition.jpg" />
          </div>
          <div class="card__face card__face--back">
            Composition II in Red, Blue, and Yellow, de piet mondrian
          </div>
        </div>
        <div class="card col-2">
          <div class="card__face card__face--front">
            <img class="col-2 img" src="../assets/exemples/cytwombly.jpg" />
          </div>
          <div class="card__face card__face--back">
            Sans titre, de Cy Twombly
          </div>
        </div>
      </div>
      <section class="grisbg">
        <h2>A toi de jouer <font-awesome-icon icon="fa-solid fa-gamepad" /></h2>
        <p class="def">
          Dessine ton propre art abstrait.<br />Couleur:&nbsp;<input
            type="color"
            v-model="color"
          />
        </p>
        <div id="toPdf">
          <vue-drawing-canvas
            :width="widthCanva"
            :color="color"
            lineJoin="round"
            ref="VueCanvasDrawing"
          />
          <br />
        </div>
        <div class="row">
          <button
            @click.prevent="$refs.VueCanvasDrawing.reset()"
            style="cursor: pointer"
          >
            Supprimer
          </button>
          <button
            style="cursor: pointer; margin-left: 10px"
            @click="exportToPDF"
          >
            Exporter en PDF
          </button>
        </div>
      </section>
      <h2>Les photos abstraites de l'exposition</h2>
      <div class="photosInfos" v-for="photo in jsonPhotosSorted" :key="photo">
        <div class="row">
          <img class="col-4" :src="getImg(photo.chemin)" />
          <div class="col-6">
            <h2>{{ photo.nom }}</h2>
            <p>{{ photo.photographe }}</p>
            <p v-for="ligne in photo.description" :key="ligne">{{ ligne }}</p>
          </div>
        </div>
        <hr />
      </div>
      <activiteGrotte />
      <activiteLVIV2 />
      <activiteSurLaTerre />
    </div>
    <div class="navigation">
      <span class="prev" @click="this.$router.push({ name: 'pagePaysage' })"
        >◀ Paysage</span
      >
      <span class="next" @click="this.$router.push({ name: 'pageNatureMorte' })"
        >Nature morte ▶</span
      >
    </div>
    <footerPage />
  </div>
</template>

<script>
import VueDrawingCanvas from "vue-drawing-canvas";
import headerPage from "@/components/headerPages.vue";
import footerPage from "@/components/footerPage.vue";
import myJSON from "@/assets/photos.json";
import activiteSurLaTerre from "@/components/activities/activiteSurLaTerre.vue";
import activiteGrotte from "@/components/activities/activiteGrotte.vue";
import activiteLVIV2 from "@/components/activities/activiteLVIV2.vue";
import html2pdf from "html2pdf.js";
export default {
  name: "pageAbstrait",
  components: {
    headerPage,
    footerPage,
    VueDrawingCanvas,
    activiteSurLaTerre,
    activiteGrotte,
    activiteLVIV2,
  },
  data() {
    return {
      jsonPhotos: myJSON,
      jsonPhotosSorted: [],
      color: "#000000",
      widthCanva: "",
    };
  },
  mounted() {
    window.scroll(0, 0);
    this.widthCanva = window.innerWidth / 2;
    this.jsonPhotos.photographies.forEach((photo) => {
      if (photo.theme === "abstrait" && photo.activite === "non") {
        this.jsonPhotosSorted.push(photo);
      }
    });
    var card = document.querySelectorAll(".card");
    card.forEach((card) => {
      card.addEventListener("click", function () {
        card.classList.toggle("is-flipped");
      });
    });
  },
  methods: {
    getImg(img) {
      return require(`../assets/photos/${img}`);
    },
    exportToPDF() {
      html2pdf(document.getElementById("toPdf"), {
        margin: 3,
        filename: "abstrait.pdf",
      });
    },
  },
};
</script>

<style>
body {
  margin: 0 !important;
}
.corps {
  margin-top: 60px;
}
.grisbg {
  background-color: lightgray;
  padding-bottom: 10px;
}
.navigation {
  height: 50px;
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
}
.next {
  margin-left: 5%;
}
.next,
.prev {
  cursor: pointer;
}
#VueDrawingCanvas {
  border: 2px solid black;
  background-color: white;
}
</style>
