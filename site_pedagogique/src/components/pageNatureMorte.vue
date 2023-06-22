<template>
  <div>
    <headerPage />
    <div class="corps">
      <section class="grisbg">
        <h2>
          Qu'est ce qu'une nature morte
          <font-awesome-icon icon="fa-solid fa-circle-question" />
        </h2>
        <p class="def">
          Image qui représente des objets 
        </p>
      </section>
      <h2>
        Les natures mortes dans l'art
        <font-awesome-icon icon="fa-solid fa-paintbrush" />
      </h2>
      <p class="def">
        Clique sur les cases pour avoir des informations sur l'œuvre.
      </p>
      <div class="row">
        <div class="card col-2">
          <div class="card__face card__face--front">
            <img class="col-2 img" src="../assets/exemples/fede.jpg" />
          </div>
          <div class="card__face card__face--back">
            Nature morte, de Fede Galizia
          </div>
        </div>
        <div class="card col-2">
          <div class="card__face card__face--front">
            <img class="col-2 img" src="../assets/exemples/asperges.jpg" />
          </div>
          <div class="card__face card__face--back">
            Une botte d’Asperges, de Edouard Manet
          </div>
        </div>
        <div class="card col-2">
          <div class="card__face card__face--front">
            <img class="col-2 img" src="../assets/exemples/pommes.jpg" />
          </div>
          <div class="card__face card__face--back">
            Le Panier de Pommes, de Paul Cézanne
          </div>
        </div>
        <div class="card col-2">
          <div class="card__face card__face--front">
            <img class="col-2 img" src="../assets/exemples/fruits.jpg" />
          </div>
          <div class="card__face card__face--back">
            Nature Morte aux fruits dans des porcelaines, de Jacob Van Es
          </div>
        </div>
        <div class="card col-2">
          <div class="card__face card__face--front">
            <img class="col-2 img" src="../assets/exemples/crane.jpg" />
          </div>
          <div class="card__face card__face--back">
            La Nature Morte au Crâne, de Paul Cézanne
          </div>
        </div>
      </div>
      <activiteNatureMorte />
      <h2>Les natures mortes de l'exposition</h2>
      <div class="photosInfos" v-for="photo in jsonPhotosSorted" :key="photo">
        <div class="row">
          <img class="col-md-4 col-12" :src="getImg(photo.chemin)" />
          <div class="col-md-6 col-12">
            <h2>{{ photo.nom }}</h2>
            <p>{{ photo.photographe }}</p>
            <div class="row">
              <img class="pictog col-4" :src="getPicto(photo.picto)" />
              <div class="col-8">
                <p class="falc" v-for="ligne in photo.description" :key="ligne">
                  {{ ligne }}
                </p>
              </div>
            </div>
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
    getPicto(img) {
      return require(`../assets/pictos/${img}`);
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
