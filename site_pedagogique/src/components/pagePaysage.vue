<template>
  <div>
    <headerPage />
    <div class="corps">
      <h2>Qu'est ce qu'un paysage?</h2>
      <p class="def">
        Le paysage est constitué par l'ensemble des éléments observables à
        partir d'un lieu précis. Dans l'art, c'est une représentation de la
        nature.
      </p>
      <h2>Les paysages connus dans l'art</h2>
      <p>Clique sur les cases pour faire apparaître les œuvres.</p>
      <div class="row">
        <div class="card col-2">
          <div class="card__face card__face--front">
            La nuit étoilée, de Vincent van Gogh
          </div>
          <div class="card__face card__face--back">
            <img class="col-2 img" src="../assets/exemples/nuit.jpg" />
          </div>
        </div>
        <div class="card col-2">
          <div class="card__face card__face--front">
            Soleil couchant à Etretat, de Monet
          </div>
          <div class="card__face card__face--back">
            <img class="col-2 img" src="../assets/exemples/soleil.jpg" />
          </div>
        </div>
        <div class="card col-2">
          <div class="card__face card__face--front">
            Le moine au bord de la mer, de Caspar David Friedrich
          </div>
          <div class="card__face card__face--back">
            <img class="col-2 img" src="../assets/exemples/moine.png" />
          </div>
        </div>
        <div class="card col-2">
          <div class="card__face card__face--front">
            Le Grand canal à l’église de la Salute, Giovanni Antonio Canal
          </div>
          <div class="card__face card__face--back">
            <img class="col-2 img" src="../assets/exemples/canal.jpg" />
          </div>
        </div>
        <div class="card col-2">
          <div class="card__face card__face--front">
            L’Estaque, de André Derain
          </div>
          <div class="card__face card__face--back">
            <img class="col-2 img" src="../assets/exemples/estaque.jpg" />
          </div>
        </div>
      </div>
      <h2>A toi de jouer!</h2>
      <p>Crée ton propre paysage en choisissant son contenu.</p>
      <div v-if="ok" class="mainCanvas" id="toPdf">
        <img :src="getImgPays(tab1[iHaut])" class="overlayImage" />
        <img :src="getImgPays(tab2[iMilieu])" class="overlayImage" />
        <img :src="getImgPays(tab3[iBas])" class="overlayImage" />
      </div>
      <div class="row">
        <div @click="changeBas('gauche')" class="btn">
          <img src="../assets/arrowLeft.png" class="arrow" />
        </div>
        <div class="col-2 choix">
          <img :src="getImgPays(tab3[iBas])" class="previewImg" />
        </div>
        <div @click="changeBas('droite')" class="btn">
          <img src="../assets/arrowRight.png" class="arrow" />
        </div>
        <div @click="changeMilieu('gauche')" class="btn">
          <img src="../assets/arrowLeft.png" class="arrow arrowL" />
        </div>
        <div class="col-2 choix choixL">
          <img :src="getImgPays(tab2[iMilieu])" class="previewImg" />
        </div>
        <div @click="changeMilieu('droite')" class="btn">
          <img src="../assets/arrowRight.png" class="arrow" />
        </div>
        <div @click="changeHaut('gauche')" class="btn">
          <img src="../assets/arrowLeft.png" class="arrow arrowL" />
        </div>
        <div class="col-2 choix choixL">
          <img :src="getImgPays(tab1[iHaut])" class="previewImg" />
        </div>
        <div @click="changeHaut('droite')" class="btn">
          <img src="../assets/arrowRight.png" class="arrow" />
        </div>
      </div>
      <div class="row">
        <button class="boutton" @click="exportToPDF">Exporter en PDF</button>
      </div>
      <h2>Les paysages de l'exposition</h2>
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
      <span class="prev" @click="this.$router.push({ name: 'pagePortrait' })"
        >◀ Portrait</span
      >
      <span class="next" @click="this.$router.push({ name: 'pageAbstrait' })"
        >Abstrait ▶</span
      >
    </div>
    <footerPage />
  </div>
</template>

<script>
import headerPage from "@/components/headerPages.vue";
import footerPage from "@/components/footerPage.vue";
import myJSON from "@/assets/photos.json";
import html2pdf from "html2pdf.js";
export default {
  name: "pagePaysage",
  components: { headerPage, footerPage },
  data() {
    return {
      jsonPhotos: myJSON,
      jsonPhotosSorted: [],
      jsonPhotosSortedActivite: [],
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
    window.scroll(0, 0);
    this.jsonPhotos.photographies.forEach((photo) => {
      if (photo.theme === "paysage" && photo.activite === "non") {
        this.jsonPhotosSorted.push(photo);
      }else if (photo.theme === "paysage" && photo.activite === "oui"){
        this.jsonPhotosSortedActivite.push(photo);
      }
    });
    this.ok = true;
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
    getImgPays(img) {
      return require(`../assets/${img}`);
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
.next {
  margin-left: 5%;
}
.next,
.prev {
  cursor: pointer;
}
</style>
