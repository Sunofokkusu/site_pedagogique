<template>
  <div>
    <headerPage />
    <div class="corps">
      <h2>Qu'est ce que le noir?</h2>
      <p class="def">
        Le noir est l'absence de lumière. Contrairement au blanc et aux autres
        teintes, le noir pur existe dans la nature en l'absence totale de
        lumière.
      </p>
      <h2>Les oeuvres noires connues dans l'art</h2>
      <div class="row">
        <img
          class="col-2"
          src="../assets/exemples/voile.jpg"
        />
        <img
          class="col-2 img"
          src="../assets/exemples/black.jpg"
        />
        <img
          class="col-2 img"
          src="../assets/exemples/n6.jpg"
        />
        <img
          class="col-2 img"
          src="../assets/exemples/peinture.jpeg"
        />
        <img
          class="col-2 img"
          src="../assets/exemples/rotterdam.png"
        />
      </div>
      <div class="row">
        <div class="col-2">Voile de calice noir, de Henri Matisse</div>
        <div class="col-2 img">Black Paintings, de Franko B</div>
        <div class="col-2 img">No. 6 (?), de Mark Rothko</div>
        <div class="col-2 img">Peinture 30.03.84, de Pierre Soulages</div>
        <div class="col-2 img">Rotterdam Horizontal #5, de Richard Serra</div>
      </div>
      <h2>A toi de jouer!</h2>
      <p>Mélange des couleurs avec le noir pour voir le résultat.</p>
      <div v-if="!melange">
        <div class="row">
          <div class="col-2 noi"></div>
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
      <h2>Les photos noires de l'exposition</h2>
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
      <span class="prev" @click="this.$router.push({ name: 'pageBleu' })"
        >◀ Bleu</span
      >
      <span class="next" @click="this.$router.push({ name: 'pageGris' })"
        >Gris ▶</span
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
  name: "pageNoir",
  components: { headerPage, footerPage },
  data() {
    return {
      jsonPhotos: myJSON,
      jsonPhotosSorted: [],
      color: "white",
      colorMelange: "",
      melange: false,
    };
  },
  mounted() {
    window.scroll(0, 0);
    this.jsonPhotos.photographies.forEach((photo) => {
      if (photo.couleur === "noir") {
        this.jsonPhotosSorted.push(photo);
      }
    });
  },
  methods: {
    getImg(img) {
      return require(`../assets/photos/${img}`);
    },
    melanger() {
      this.melange = true;
      if (this.color === "roug") {
        this.colorMelange = "rougF";
      } else if (this.color === "ble") {
        this.colorMelange = "bleuF";
      } else if (this.color === "white") {
        this.colorMelange = "grey";
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
.noi {
  height: 20vh !important;
  border: 1px solid black;
  margin-bottom: 30px;
  background-color: black;
}
.rougF {
  height: 20vh !important;
  border: 1px solid black;
  background-color: darkred;
  margin-bottom: 30px;
}
.bleuF {
  height: 20vh !important;
  border: 1px solid black;
  background-color: darkblue;
  margin-bottom: 30px;
}
.grey {
  height: 20vh !important;
  border: 1px solid black;
  background-color: grey;
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
