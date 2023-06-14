<template>
  <div>
    <headerPage />
    <div class="corps">
      <h2>Qu'est ce que le gris <font-awesome-icon icon="fa-solid fa-circle-question" /></h2>
      <p class="def">
        Le gris est une couleur intermédiaire entre le blanc et le noir.
      </p>
      <h2>Les oeuvres grises dans l'art <font-awesome-icon icon="fa-solid fa-paintbrush" /></h2>
      <p>Clique sur les cases pour faire apparaître les œuvres.</p>
      <div class="row">
        <div class="card col-2">
          <div class="card__face card__face--front">
            Guernica, de Pablo Picasso
          </div>
          <div class="card__face card__face--back">
            <img class="col-2 img" src="../assets/exemples/guernica.jpg" />
          </div>
        </div>
        <div class="card col-2">
          <div class="card__face card__face--front">
            L'arbre gris, de Piet Mondrian
          </div>
          <div class="card__face card__face--back">
            <img class="col-2 img" src="../assets/exemples/arbre.jpg" />
          </div>
        </div>
        <div class="card col-2">
          <div class="card__face card__face--front">
            Le cheval gris, de Théodore Géricault
          </div>
          <div class="card__face card__face--back">
            <img class="col-2 img" src="../assets/exemples/cheval.jpg" />
          </div>
        </div>
        <div class="card col-2">
          <div class="card__face card__face--front">
            Girl in grey, de Louis Le Brocquy
          </div>
          <div class="card__face card__face--back">
            <img class="col-2 img" src="../assets/exemples/girl.jpg" />
          </div>
        </div>
        <div class="card col-2">
          <div class="card__face card__face--front">
            Maternité, de Nguyen Thanh Binh
          </div>
          <div class="card__face card__face--back">
            <img class="col-2 img" src="../assets/exemples/maternite.jpg" />
          </div>
        </div>
      </div>
      <activiteGris/>
      <h2>Les photos grises de l'exposition</h2>
      <arbreBayle/>
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
      <span class="prev" @click="this.$router.push({ name: 'pageNoir' })"
        >◀ Noir</span
      >
      <span class="next" @click="this.$router.push({ name: 'pageBlanc' })"
        >Blanc ▶</span
      >
    </div>
    <footerPage />
  </div>
</template>

<script>
import headerPage from "@/components/headerPages.vue";
import footerPage from "@/components/footerPage.vue";
import activiteGris from "@/components/activities/activiteGris.vue";
import arbreBayle from '@/components/activities/arbreBayle.vue';
import myJSON from "@/assets/photos.json";
export default {
  name: "pageGris",
  components: { headerPage, footerPage, activiteGris, arbreBayle },
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
      if (photo.couleur === "gris" && photo.activite === "non") {
        this.jsonPhotosSorted.push(photo);
      } else if (photo.couleur === "gris" && photo.activite === "oui") {
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
