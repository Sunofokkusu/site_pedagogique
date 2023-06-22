<template>
  <div>
    <div class="row">
      <img
        class="col-md-4 col-12"
        src="../../assets/photos/grottes_du_trou_noir.jpg"
      />
      <div class="col-md-6 col-12">
        <h2>Grotte du trou noir</h2>
        <p>François DENIS</p>
        <div class="row">
          <img class="pictog col-4" src="../../assets/pictos/crayon.png" />
          <div class="col-8">
            <p class="falc">
              Que vois-tu sur cette photo ?<br />Essaie de le redessiner<br />
            </p>
            <p>Couleur:&nbsp;<input type="color" v-model="color" /></p>
            <div id="toPdf">
              <vue-drawing-canvas
                :width="widthCanva"
                :height="heightCanva"
                :color="color"
                :canvasId="idCanva"
                lineJoin="round"
                ref="VueCanvasDrawing2"
              />
              <br />
            </div>
            <div class="row">
              <button
                @click.prevent="$refs.VueCanvasDrawing2.reset()"
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
          </div>
        </div>
      </div>
    </div>
    <hr />
  </div>
</template>

<script>
import VueDrawingCanvas from "vue-drawing-canvas";
import html2pdf from "html2pdf.js";
export default {
  name: "activiteGrotte",
  components: { VueDrawingCanvas },
  data() {
    return {
      color: "#000000",
      widthCanva: "",
      heightCanva: "",
      idCanva: "VueCanvasDrawing2",
    };
  },
  mounted() {
    this.widthCanva = window.innerWidth / 4;
    this.heightCanva = window.innerHeight / 2;
  },
  methods: {
    getImg(img) {
      return require(`../../assets/photos/${img}`);
    },
    exportToPDF() {
      html2pdf(document.getElementById("toPdf"), {
        margin: 3,
        filename: "grotte_du_trou_noir.pdf",
      });
    },
  },
};
</script>

<style>
#VueCanvasDrawing2 {
  border: 2px solid black;
}
</style>
