<template>
  <div>
    <h2>A toi de jouer!</h2>
    <p>Crée ton propre paysage en choisissant son contenu.</p>
    <div v-if="ok" class="mainCanvas" id="toPdf">
      <img :src="getImgPays(tab1[iHaut])" class="overlayImage" />
      <img :src="getImgPays(tab2[iMilieu])" class="overlayImage" />
      <img :src="getImgPays(tab3[iBas])" class="overlayImage" />
    </div>
    <div class="row">
      <div @click="changeBas('gauche')" class="btn">
        <img src="../../assets/arrowLeft.png" class="arrow" />
      </div>
      <div class="col-2 choix">
        <img :src="getImgPays(tab3[iBas])" class="previewImg" />
      </div>
      <div @click="changeBas('droite')" class="btn">
        <img src="../../assets/arrowRight.png" class="arrow" />
      </div>
      <div @click="changeMilieu('gauche')" class="btn">
        <img src="../../assets/arrowLeft.png" class="arrow arrowL" />
      </div>
      <div class="col-2 choix choixL">
        <img :src="getImgPays(tab2[iMilieu])" class="previewImg" />
      </div>
      <div @click="changeMilieu('droite')" class="btn">
        <img src="../../assets/arrowRight.png" class="arrow" />
      </div>
      <div @click="changeHaut('gauche')" class="btn">
        <img src="../../assets/arrowLeft.png" class="arrow arrowL" />
      </div>
      <div class="col-2 choix choixL">
        <img :src="getImgPays(tab1[iHaut])" class="previewImg" />
      </div>
      <div @click="changeHaut('droite')" class="btn">
        <img src="../../assets/arrowRight.png" class="arrow" />
      </div>
    </div>
    <div class="row">
      <button class="boutton" @click="exportToPDF">Exporter en PDF</button>
    </div>
  </div>
</template>

<script>
import html2pdf from "html2pdf.js";
export default {
  name: "activitePaysage",
  data() {
    return {
      tab1: ["ciel1.png", "ciel2.png", "ciel3.png"],
      tab2: ["milieu1.png", "milieu2.png", "milieu3.png", "milieu4.png"],
      tab3: ["bas1.png", "bas2.png", "bas3.png"],
      iBas: 0,
      iMilieu: 0,
      iHaut: 0,
      ok: false,
    };
  },
  mounted() {
    this.ok = true;
  },
  methods: {
    getImgPays(img) {
      return require(`../../assets/${img}`);
    },
    changeHaut(direction) {
      if (direction === "gauche") {
        if (this.iHaut === 0) {
          this.iHaut = 2;
        } else {
          this.iHaut -= 1;
        }
      } else if (direction === "droite") {
        if (this.iHaut === 2) {
          this.iHaut = 0;
        } else {
          this.iHaut += 1;
        }
      }
    },
    changeMilieu(direction) {
      if (direction === "gauche") {
        if (this.iMilieu === 0) {
          this.iMilieu = 3;
        } else {
          this.iMilieu -= 1;
        }
      } else if (direction === "droite") {
        if (this.iMilieu === 3) {
          this.iMilieu = 0;
        } else {
          this.iMilieu += 1;
        }
      }
    },
    changeBas(direction) {
      if (direction === "gauche") {
        if (this.iBas === 0) {
          this.iBas = 2;
        } else {
          this.iBas -= 1;
        }
      } else if (direction === "droite") {
        if (this.iBas === 2) {
          this.iBas = 0;
        } else {
          this.iBas += 1;
        }
      }
    },
    exportToPDF() {
      html2pdf(document.getElementById("toPdf"), {
        margin: 10,
        filename: "paysage.pdf",
      });
    },
  }
};
</script>

<style>
.mainCanvas {
  display: flex;
  justify-content: center;
  position: relative;
  height: 50vh !important;
  margin-bottom: 30px;
}
.overlayImage {
  height: 100% !important;
  position: absolute;
  top: 0;
}
.arrow {
  width: 4vw;
}
.choix{
  margin-bottom: 20px;
}
.arrowL {
  margin-left: 30px;
}
.previewImg {
  width: 15vw;
  border: 1px solid black;
}
.btn {
  display: flex;
  cursor: pointer;
  align-items: center;
}
</style>
