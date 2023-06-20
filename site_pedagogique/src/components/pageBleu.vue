<template>
  <div>
    <headerPage />
    <div class="corps">
      <section class="grisbg">
        <h2>
          Qu'est ce qui est bleu
          <font-awesome-icon icon="fa-solid fa-circle-question" />
        </h2>
        <p class="def">
          Le ciel est bleu.<br/> La mer est bleue.<br/> Le maillot de l'équipe de France est bleu.<br/> Les schtroumpfs sont bleus.
        </p>
      </section>
      <h2>
        Les oeuvres bleues dans l'art
        <font-awesome-icon icon="fa-solid fa-paintbrush" />
      </h2>
      <p class="def">
        Clique sur les cases pour avoir des informations sur l'œuvre.
      </p>
      <div class="row">
        <div class="card col-2">
          <div class="card__face card__face--front">
            <img class="col-2 img" src="../assets/exemples/jour.jpg" />
          </div>
          <div class="card__face card__face--back">Jour bleu, de Cfey</div>
        </div>
        <div class="card col-2">
          <div class="card__face card__face--front">
            <img class="col-2 img" src="../assets/exemples/eleve.jpg" />
          </div>
          <div class="card__face card__face--back">
            Depuis un endroit élevé, de Stuart Dalby
          </div>
        </div>
        <div class="card col-2">
          <div class="card__face card__face--front">
            <img class="col-2 img" src="../assets/exemples/perception.jpg" />
          </div>
          <div class="card__face card__face--back">
            Perception bleue 2, de Weilong Chen
          </div>
        </div>
        <div class="card col-2">
          <div class="card__face card__face--front">
            <img class="col-2 img" src="../assets/exemples/self.jpg" />
          </div>
          <div class="card__face card__face--back">
            Self-Portrait, de Vincent van Gogh
          </div>
        </div>
        <div class="card col-2">
          <div class="card__face card__face--front">
            <img class="col-2 img" src="../assets/exemples/starry.jpg" />
          </div>
          <div class="card__face card__face--back">
            Starry Night, de Vincent van Gogh
          </div>
        </div>
      </div>
      <activiteBleu />
      <h2>Les photos bleues de l'exposition</h2>
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
import activiteBleu from "@/components/activities/activiteBleu.vue";
import myJSON from "@/assets/photos.json";
export default {
  name: "pageBleu",
  components: { headerPage, footerPage, activiteBleu },
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
      if (photo.couleur === "bleu" && photo.activite === "non") {
        this.jsonPhotosSorted.push(photo);
      } else if (photo.couleur === "bleu" && photo.activite === "oui") {
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
