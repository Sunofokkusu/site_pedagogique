<template>
  <div>
    <headerPage />
    <div class="corps">
      <h2>Qu'est ce qu'une nature morte?</h2>
      <p class="def">
        C'est une représentation d'objets inanimés placés d'une certaine manière
        avec l'intention de faire passer un message.
      </p>
      <h2>Les natures mortes dans l'art</h2>
      <p>Clique sur les cases pour faire apparaître les œuvres.</p>
      <div class="row">
        <div class="card col-2">
          <div class="card__face card__face--front">
            Nature morte, de Fede Galizia
          </div>
          <div class="card__face card__face--back">
            <img class="col-2 img" src="../assets/exemples/fede.jpg" />
          </div>
        </div>
        <div class="card col-2">
          <div class="card__face card__face--front">
            Une botte d’Asperges, de Edouard Manet
          </div>
          <div class="card__face card__face--back">
            <img class="col-2 img" src="../assets/exemples/asperges.jpg" />
          </div>
        </div>
        <div class="card col-2">
          <div class="card__face card__face--front">
            Le Panier de Pommes, de Paul Cézanne
          </div>
          <div class="card__face card__face--back">
            <img class="col-2 img" src="../assets/exemples/pommes.jpg" />
          </div>
        </div>
        <div class="card col-2">
          <div class="card__face card__face--front">
            Nature Morte aux fruits dans des porcelaines, de Jacob Van Es
          </div>
          <div class="card__face card__face--back">
            <img class="col-2 img" src="../assets/exemples/fruits.jpg" />
          </div>
        </div>
        <div class="card col-2">
          <div class="card__face card__face--front">
            La Nature Morte au Crâne, de Paul Cézanne
          </div>
          <div class="card__face card__face--back">
            <img class="col-2 img" src="../assets/exemples/crane.jpg" />
          </div>
        </div>
      </div>
      <activiteNatureMorte/>
      <h2>Les natures mortes de l'exposition</h2>
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
      <span class="prev" @click="this.$router.push({ name: 'pageAbstrait' })"
        >◀ Abstrait</span
      >
      <span class="next" @click="this.$router.push({ name: 'pagePortrait' })"
        >Portait ▶</span
      >
    </div>
    <footerPage />
  </div>
</template>

<script>
import headerPage from "@/components/headerPages.vue";
import footerPage from "@/components/footerPage.vue";
import activiteNatureMorte from "@/components/activities/activiteNatureMorte.vue";
import myJSON from "@/assets/photos.json";
export default {
  name: "pagePortrait",
  components: { headerPage, footerPage, activiteNatureMorte },
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
      if (photo.theme === "natureMorte" && photo.activite === "non") {
        this.jsonPhotosSorted.push(photo);
      } else if (photo.theme === "natureMorte" && photo.activite === "oui") {
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
.def {
  margin-left: 20px;
  margin-right: 20px;
}
.img {
  margin-left: 20px;
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
#webcam {
  width: 90%;
  margin-left: 20px;
  margin-right: 20px;
}
</style>
