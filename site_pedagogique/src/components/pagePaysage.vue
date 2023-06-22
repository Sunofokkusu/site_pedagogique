<template>
  <div>
    <headerPage />
    <div class="corps">
      <section class="grisbg">
        <h2>
          Qu'est ce qu'un paysage
          <font-awesome-icon icon="fa-solid fa-circle-question" />
        </h2>
        <p class="def">Image qui représente la nature.</p>
      </section>
      <h2>
        Les paysages dans l'art
        <font-awesome-icon icon="fa-solid fa-paintbrush" />
      </h2>
      <p class="def">
        Clique sur les cases pour avoir des informations sur l'œuvre.
      </p>
      <div class="row">
        <div class="card col-2">
          <div class="card__face card__face--front">
            <img class="col-2 img" src="../assets/exemples/nuit.jpg" />
          </div>
          <div class="card__face card__face--back">
            La nuit étoilée, de Vincent van Gogh
          </div>
        </div>
        <div class="card col-2">
          <div class="card__face card__face--front">
            <img class="col-2 img" src="../assets/exemples/soleil.jpg" />
          </div>
          <div class="card__face card__face--back">
            Soleil couchant à Etretat, de Monet
          </div>
        </div>
        <div class="card col-2">
          <div class="card__face card__face--front">
            <img class="col-2 img" src="../assets/exemples/moine.png" />
          </div>
          <div class="card__face card__face--back">
            Le moine au bord de la mer, de Caspar David Friedrich
          </div>
        </div>
        <div class="card col-2">
          <div class="card__face card__face--front">
            <img class="col-2 img" src="../assets/exemples/canal.jpg" />
          </div>
          <div class="card__face card__face--back">
            Le Grand canal à l’église de la Salute, Giovanni Antonio Canal
          </div>
        </div>
        <div class="card col-2">
          <div class="card__face card__face--front">
            <img class="col-2 img" src="../assets/exemples/estaque.jpg" />
          </div>
          <div class="card__face card__face--back">
            L’Estaque, de André Derain
          </div>
        </div>
      </div>
      <activitePaysage />
      <h2>Les paysages de l'exposition</h2>
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
      <arbreBayle />
      <activiteVertiges />
    </div>
    <div class="navigation">
      <span class="prev" @click="this.$router.push({ name: 'pagePortrait' })"
        >◀ Portrait</span
      >
      <span class="next" @click="this.$router.push({ name: 'pageAbstrait' })"
        >Abstrait ▶</span
      >
    </div>
    <footerPage />
  </div>
</template>

<script>
import headerPage from "@/components/headerPages.vue";
import footerPage from "@/components/footerPage.vue";
import arbreBayle from "@/components/activities/arbreBayle.vue";
import activiteVertiges from "@/components/activities/activiteVertiges.vue";
import myJSON from "@/assets/photos.json";
import activitePaysage from "@/components/activities/activitePaysage.vue";
export default {
  name: "pagePaysage",
  components: {
    headerPage,
    footerPage,
    activitePaysage,
    arbreBayle,
    activiteVertiges,
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
      if (photo.theme === "paysage" && photo.activite === "non") {
        this.jsonPhotosSorted.push(photo);
      } else if (photo.theme === "paysage" && photo.activite === "oui") {
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
  font-size: 30px;
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
.btn {
  display: flex;
  cursor: pointer;
  align-items: center;
}
.next {
  margin-left: 5%;
}
.next,
.prev {
  cursor: pointer;
}
</style>
