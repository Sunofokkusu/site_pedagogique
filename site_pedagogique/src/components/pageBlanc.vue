<template>
  <div>
    <headerPage />
    <div class="corps">
      <section class="grisbg">
        <h2>
          Qu'est ce qui est blanc
          <font-awesome-icon icon="fa-solid fa-circle-question" />
        </h2>
        <p class="def">
          La neige est blanche.<br/> La barbe du père noël est blanche.<br/> Les moutons sont blancs.<br/> Le papier est blanc.
        </p>
      </section>
      <h2>
        Les oeuvres blanches dans l'art
        <font-awesome-icon icon="fa-solid fa-paintbrush" />
      </h2>
      <p class="def">
        Clique sur les cases pour avoir des informations sur l'œuvre.
      </p>
      <div class="row">
        <div class="card col-2">
          <div class="card__face card__face--front">
            <img class="col-2 img" src="../assets/exemples/blanc.jpeg" />
          </div>
          <div class="card__face card__face--back">
            Effets de neige à Giverny, de Monet
          </div>
        </div>
        <div class="card col-2">
          <div class="card__face card__face--front">
            <img class="col-2 img" src="../assets/exemples/carre.png" />
          </div>
          <div class="card__face card__face--back">
            Carré blanc sur fond blanc, de Kasimir Malevitch
          </div>
        </div>
        <div class="card col-2">
          <div class="card__face card__face--front">
            <img class="col-2 img" src="../assets/exemples/evential.png" />
          </div>
          <div class="card__face card__face--back">
            La Dame à l’éventail, d'Édouard Manet
          </div>
        </div>
        <div class="card col-2">
          <div class="card__face card__face--front">
            <img class="col-2 img" src="../assets/exemples/dame.jpg" />
          </div>
          <div class="card__face card__face--back">
            Branche de pivoine blanche et sécateur, d'Édouard Manet
          </div>
        </div>
        <div class="card col-2">
          <div class="card__face card__face--front">
            <img class="col-2 img" src="../assets/exemples/monochrome.jpg" />
          </div>
          <div class="card__face card__face--back">
            Monochrome blanc fait à la petite cuillère #1, de Bernard Aubertin
          </div>
        </div>
      </div>
      <activiteBlanc />
      <h2>Les photos blanches de l'exposition</h2>
      <activiteHomme />
      <div class="photosInfos" v-for="photo in jsonPhotosSorted" :key="photo">
        <div class="row">
          <img class="col-4" :src="getImg(photo.chemin)" />
          <div class="col-6">
            <h2>{{ photo.nom }}</h2>
            <p>{{ photo.photographe }}</p>
            <p v-for="ligne in photo.description" :key="ligne">{{ ligne }}</p>
          </div>
        </div>
        <hr />
      </div>
    </div>
    <div class="navigation">
      <span class="prev" @click="this.$router.push({ name: 'pageGris' })"
        >◀ Gris</span
      >
      <span class="next" @click="this.$router.push({ name: 'pageJaune' })"
        >Jaune ▶</span
      >
    </div>
    <footerPage />
  </div>
</template>

<script>
import headerPage from "@/components/headerPages.vue";
import footerPage from "@/components/footerPage.vue";
import activiteBlanc from "@/components/activities/activiteBlanc.vue";
import activiteHomme from "@/components/activities/activiteHomme.vue";
import myJSON from "@/assets/photos.json";
export default {
  name: "pageBlanc",
  components: { headerPage, footerPage, activiteBlanc, activiteHomme },
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
      if (photo.couleur === "blanc" && photo.activite === "non") {
        this.jsonPhotosSorted.push(photo);
      } else if (photo.couleur === "blanc" && photo.activite === "oui") {
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
