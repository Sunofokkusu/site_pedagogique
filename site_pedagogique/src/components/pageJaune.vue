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
      <h2>Les oeuvres jaunes dans l'art</h2>
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
      <activiteJaune/>
      <h2>Les photos jaunes de l'exposition</h2>
      <activiteLVIV/>
      <activiteLVIV2/>
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
      <activiteVertiges/>
    </div>
    <div class="navigation">
      <span class="prev" @click="this.$router.push({ name: 'pageBlanc' })"
        >◀ Blanc</span
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
import activiteJaune from "@/components/activities/activiteJaune.vue";
import activiteVertiges from "@/components/activities/activiteVertiges.vue";
import activiteLVIV from "@/components/activities/activiteLVIV.vue";
import activiteLVIV2 from "@/components/activities/activiteLVIV2.vue";
import myJSON from "@/assets/photos.json";
export default {
  name: "pageJaune",
  components: { headerPage, footerPage, activiteJaune, activiteVertiges, activiteLVIV, activiteLVIV2 },
  data() {
    return {
      jsonPhotos: myJSON,
      jsonPhotosSorted: [],
      jsonPhotosSortedActivite: [],
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
</style>
