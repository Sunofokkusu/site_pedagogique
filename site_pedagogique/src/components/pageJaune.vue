<template>
  <div>
    <headerPage />
    <div class="corps">
      <section class="grisbg">
        <h2>
          Qu'est ce qui est jaune
          <font-awesome-icon icon="fa-solid fa-circle-question" />
        </h2>
        <p class="def">
          Le soleil est jaune.<br/> Les poussins sont jaunes.<br/> Les bananes sont jaunes.<br/> Le pissenlit est jaune.
        </p>
      </section>
      <h2>
        Les oeuvres jaunes dans l'art
        <font-awesome-icon icon="fa-solid fa-paintbrush" />
      </h2>
      <p class="def">
        Clique sur les cases pour avoir des informations sur l'œuvre.
      </p>
      <div class="row">
        <div class="card col-2">
          <div class="card__face card__face--front">
            <img class="col-2 img" src="../assets/exemples/ball.jpg" />
          </div>
          <div class="card__face card__face--back">
            Going to the Ball, de Turner
          </div>
        </div>
        <div class="card col-2">
          <div class="card__face card__face--front">
            <img class="col-2 img" src="../assets/exemples/tournesols.jpg" />
          </div>
          <div class="card__face card__face--back">
            Les tournesols, de Van Gogh
          </div>
        </div>
        <div class="card col-2">
          <div class="card__face card__face--front">
            <img class="col-2 img" src="../assets/exemples/phare.jpg" />
          </div>
          <div class="card__face card__face--back">
            Le phare de Collioure, de André Derain
          </div>
        </div>
        <div class="card col-2">
          <div class="card__face card__face--front">
            <img class="col-2 img" src="../assets/exemples/baiser.jpg" />
          </div>
          <div class="card__face card__face--back">
            Le baiser, de Gustav Klimt
          </div>
        </div>
        <div class="card col-2">
          <div class="card__face card__face--front">
            <img class="col-2 img" src="../assets/exemples/jaune.jpg" />
          </div>
          <div class="card__face card__face--back">
            Jaune orange rouge, de Mark Rothko
          </div>
        </div>
      </div>
      <activiteJaune />
      <h2>Les photos jaunes de l'exposition</h2>
      <activiteLVIV />
      <activiteLVIV2 />
      <div class="photosInfos" v-for="photo in jsonPhotosSorted" :key="photo">
        <div class="row">
          <img class="col-4" :src="getImg(photo.chemin)" />
          <div class="col-6">
            <h2>{{ photo.nom }}</h2>
            <p>{{ photo.photographe }}</p>
            <p>{{ photo.description }}</p>
          </div>
        </div>
        <hr />
      </div>
      <activiteVertiges />
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
  components: {
    headerPage,
    footerPage,
    activiteJaune,
    activiteVertiges,
    activiteLVIV,
    activiteLVIV2,
  },
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
