<template>
  <div>
    <headerPage />
    <div class="corps">
      <h2>Qu'est ce que le bleu?</h2>
      <p class="def">
        Le bleu est une couleur primaire, c'est à dire une couleur qui ne peut
        pas être reproduite par un mélange d'autres couleurs. C'est l'une des
        couleurs les plus courantes dans la nature et la vie quotidienne.
      </p>
      <h2>Les oeuvres bleues connues dans l'art</h2>
      <p>Clique sur les cases pour faire apparaître les œuvres.</p>
      <div class="row">
        <div class="card col-2">
          <div class="card__face card__face--front">Jour bleu, de Cfey</div>
          <div class="card__face card__face--back">
            <img class="col-2 img" src="../assets/exemples/jour.jpg" />
          </div>
        </div>
        <div class="card col-2">
          <div class="card__face card__face--front">
            Depuis un endroit élevé, de Stuart Dalby
          </div>
          <div class="card__face card__face--back">
            <img class="col-2 img" src="../assets/exemples/eleve.jpg" />
          </div>
        </div>
        <div class="card col-2">
          <div class="card__face card__face--front">
            Perception bleue 2, de Weilong Chen
          </div>
          <div class="card__face card__face--back">
            <img class="col-2 img" src="../assets/exemples/perception.jpg" />
          </div>
        </div>
        <div class="card col-2">
          <div class="card__face card__face--front">
            Self-Portrait, de Vincent van Gogh
          </div>
          <div class="card__face card__face--back">
            <img class="col-2 img" src="../assets/exemples/self.jpg" />
          </div>
        </div>
        <div class="card col-2">
          <div class="card__face card__face--front">
            Starry Night, de Vincent van Gogh
          </div>
          <div class="card__face card__face--back">
            <img class="col-2 img" src="../assets/exemples/starry.jpg" />
          </div>
        </div>
      </div>
      <h2>A toi de jouer!</h2>
      <p>Mélange des couleurs avec le bleu pour voir le résultat.</p>
      <div v-if="!melange">
        <div class="row">
          <div class="col-2 ble"></div>
          <div class="col-2" :class="color"></div>
          <div class="col-1">
            <div class="choixR" @click="color = 'roug'"></div>
            <div class="choixJ" @click="color = 'jaun'"></div>
            <div class="choixW" @click="color = 'white'"></div>
          </div>
        </div>
        <button @click="melanger" class="boutton">Mélanger</button>
      </div>
      <div v-else>
        <div class="row">
          <div class="col-2" :class="colorMelange"></div>
        </div>
        <button @click="reset" class="boutton">
          Retour au choix des couleurs
        </button>
      </div>
      <h2>Les photos bleues de l'exposition</h2>
      <div class="photosInfos" v-for="photo in jsonPhotosSorted" :key="photo">
        <div class="row">
          <img class="col-4" :src="getImg(photo.chemin)" />
          <div class="col-6">
            <h2>{{ photo.nom }}</h2>
            <p>{{ photo.photographe }}</p>
            <p>{{ photo.descriptionCouleur }}</p>
          </div>
        </div>
        <hr />
      </div>
    </div>
    <div class="navigation">
      <span class="prev" @click="this.$router.push({ name: 'pageJaune' })"
        >◀ Jaune</span
      >
      <span class="next" @click="this.$router.push({ name: 'pageNoir' })"
        >Noir ▶</span
      >
    </div>
    <footerPage />
  </div>
</template>

<script>
import headerPage from "@/components/headerPages.vue";
import footerPage from "@/components/footerPage.vue";
import myJSON from "@/assets/photos.json";
export default {
  name: "pageBleu",
  components: { headerPage, footerPage },
  data() {
    return {
      jsonPhotos: myJSON,
      jsonPhotosSorted: [],
      melange: false,
      color: "white",
      colorMelange: "",
    };
  },
  mounted() {
    window.scroll(0, 0);
    this.jsonPhotos.photographies.forEach((photo) => {
      if (photo.couleur === "bleu") {
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
    melanger() {
      this.melange = true;
      if (this.color === "white") {
        this.colorMelange = "bleuC";
      } else if (this.color === "jaun") {
        this.colorMelange = "vert";
      } else if (this.color === "roug") {
        this.colorMelange = "violet";
      }
    },
    reset() {
      this.color = "white";
      this.colorMelange = "";
      this.melange = false;
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
.choixJ {
  cursor: pointer;
  margin-left: 20px;
  height: 5vh !important;
  border: 1px solid black;
  margin-bottom: 10px;
  background-color: yellow;
}
.bleuC {
  height: 20vh !important;
  border: 1px solid black;
  background-color: lightblue;
  margin-bottom: 30px;
}
.violet {
  height: 20vh !important;
  border: 1px solid black;
  background-color: purple;
  margin-bottom: 30px;
}
.next {
  margin-left: 5%;
}
.next,
.prev {
  cursor: pointer;
}
</style>
