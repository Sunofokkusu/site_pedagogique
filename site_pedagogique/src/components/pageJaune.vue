<template>
  <div>
    <headerPage />
    <div class="corps">
      <h2>Qu'est ce que le jaune?</h2>
      <p class="def">
        Le jaune est une couleur primaire, c'est à dire une couleur qui ne peut
        pas être reproduite par un mélange d'autres couleurs. C'est une couleur
        lumineuse et chaleureuse. C’est la couleur du soleil, de la lumière et
        de la gaieté.
      </p>
      <h2>Les oeuvres jaunes connues dans l'art</h2>
      <p>Clique sur les cases pour faire apparaître les œuvres.</p>
      <div class="row">
        <div class="card col-2">
          <div class="card__face card__face--front">
            Going to the Ball, de Turner
          </div>
          <div class="card__face card__face--back">
            <img class="col-2 img" src="../assets/exemples/ball.jpg" />
          </div>
        </div>
        <div class="card col-2">
          <div class="card__face card__face--front">
            Les tournesols, de Van Gogh
          </div>
          <div class="card__face card__face--back">
            <img class="col-2 img" src="../assets/exemples/tournesols.jpg" />
          </div>
        </div>
        <div class="card col-2">
          <div class="card__face card__face--front">
            Le phare de Collioure, de André Derain
          </div>
          <div class="card__face card__face--back">
            <img class="col-2 img" src="../assets/exemples/phare.jpg" />
          </div>
        </div>
        <div class="card col-2">
          <div class="card__face card__face--front">
            Le baiser, de Gustav Klimt
          </div>
          <div class="card__face card__face--back">
            <img class="col-2 img" src="../assets/exemples/baiser.jpg" />
          </div>
        </div>
        <div class="card col-2">
          <div class="card__face card__face--front">
            Jaune orange rouge, de Mark Rothko
          </div>
          <div class="card__face card__face--back">
            <img class="col-2 img" src="../assets/exemples/jaune.jpg" />
          </div>
        </div>
      </div>
      <h2>A toi de jouer!</h2>
      <p>Mélange des couleurs avec le jaune pour voir le résultat.</p>
      <div v-if="!melange">
        <div class="row">
          <div class="col-2 jaun"></div>
          <div class="col-2" :class="color"></div>
          <div class="col-1">
            <div class="choixR" @click="color = 'roug'"></div>
            <div class="choixB" @click="color = 'ble'"></div>
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
      <h2>Les photos jaunes de l'exposition</h2>
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
      <span class="prev" @click="this.$router.push({ name: 'pageGris' })"
        >◀ Gris</span
      >
      <span class="next" @click="this.$router.push({ name: 'pageBleu' })"
        >Bleu ▶</span
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
  name: "pageJaune",
  components: { headerPage, footerPage },
  data() {
    return {
      jsonPhotos: myJSON,
      jsonPhotosSorted: [],
      jsonPhotosSortedActivite: [],
      melange: false,
      color: "white",
      colorMelange: "",
    };
  },
  mounted() {
    window.scroll(0, 0);
    this.jsonPhotos.photographies.forEach((photo) => {
      if (photo.couleur === "jaune" && photo.activite === "non") {
        this.jsonPhotosSorted.push(photo);
      } else if (photo.couleur === "jaune" && photo.activite === "oui") {
        this.jsonPhotosSortedActivite.push(photo);
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
        this.colorMelange = "jauneC";
      } else if (this.color === "ble") {
        this.colorMelange = "vert";
      } else if (this.color === "roug") {
        this.colorMelange = "orange";
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
.jaun {
  height: 20vh !important;
  border: 1px solid black;
  margin-bottom: 30px;
  background-color: yellow;
  margin-left: 20px;
}
.white {
  height: 20vh !important;
  border: 1px solid black;
  margin-left: 20px;
}
.roug {
  height: 20vh !important;
  border: 1px solid black;
  margin-left: 20px;
  background-color: red;
}
.ble {
  height: 20vh !important;
  border: 1px solid black;
  margin-left: 20px;
  background-color: blue;
  margin-bottom: 30px;
}
.jauneC {
  height: 20vh !important;
  border: 1px solid black;
  background-color: lightyellow;
  margin-bottom: 30px;
}
.vert {
  height: 20vh !important;
  border: 1px solid black;
  background-color: green;
  margin-bottom: 30px;
}
.orange {
  height: 20vh !important;
  border: 1px solid black;
  background-color: orange;
  margin-bottom: 30px;
}
.boutton,
.choixB,
.choixR,
.choixW {
  cursor: pointer;
  margin-bottom: 10px;
}
.choixB {
  height: 5vh !important;
  border: 1px solid black;
  margin-left: 20px;
  background-color: blue;
}
.choixR {
  height: 5vh !important;
  border: 1px solid black;
  margin-left: 20px;
  background-color: red;
}
.choixW {
  height: 5vh !important;
  border: 1px solid black;
  margin-left: 20px;
  background-color: white;
}
.next {
  margin-left: 5%;
}
.next,
.prev {
  cursor: pointer;
}
</style>
