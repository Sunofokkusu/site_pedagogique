<template>
  <div>
    <headerPage />
    <div class="corps">
      <h2>Qu'est ce que l'art abstrait?</h2>
      <p class="def">
        L'art abstrait est un mouvement international qui domine tout le XXe
        siècle. Il ne représente pas des sujets ou des objets du monde naturel,
        mais des formes et des couleurs pour elles-mêmes.
      </p>
      <h2>Les art abstraits connus dans l'art</h2>
      <div class="row">
        <img class="col-2" src="../assets/exemples/sanstitre.jpg" />
        <img class="col-2 img" src="../assets/exemples/congress.jpg" />
        <img class="col-2 img" src="../assets/exemples/abstract.jpg" />
        <img class="col-2 img" src="../assets/exemples/composition.jpg" />
        <img class="col-2 img" src="../assets/exemples/cytwombly.jpg" />
      </div>
      <div class="row">
        <div class="col-2">Sans titre, de Zao Wou-Ki</div>
        <div class="col-2 img">Congress, de Julie Mehretu</div>
        <div class="col-2 img">Abstract Painting, de Gerhard Richter</div>
        <div class="col-2 img">
          Composition II in Red, Blue, and Yellow, de piet mondrian
        </div>
        <div class="col-2 img">Sans titre, de Cy Twombly</div>
      </div>
      <h2>A toi de jouer!</h2>
      <p>
        Dessine ton propre art abstrait.<br />Couleur:&nbsp;<input
          type="color"
          v-model="color"
        />
      </p>
      <div id="toPdf">
        <vue-drawing-canvas
          :width="widthCanva"
          :color="color"
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
        <button style="cursor: pointer;margin-left: 10px" @click="exportToPDF">Exporter en PDF</button>
      </div>
      <h2>Les photos abstraites de l'exposition</h2>
      <div class="photosInfos" v-for="photo in jsonPhotosSorted" :key="photo">
        <div class="row">
          <img class="col-4" :src="getImg(photo.chemin)" />
          <div class="col-6">
            <h2>{{ photo.nom }}</h2>
            <p>{{ photo.photographe }}</p>
            <p>{{ photo.descriptionTheme }}</p>
          </div>
        </div>
        <hr />
      </div>
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
import html2pdf from "html2pdf.js";
export default {
  name: "pageAbstrait",
  components: { headerPage, footerPage, VueDrawingCanvas },
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
      if (photo.theme === "abstrait") {
        this.jsonPhotosSorted.push(photo);
      }
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
}
</style>
