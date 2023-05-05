<template>
  <div>
    <headerPage />
    <div class="corps">
      <h2>Qu'est ce qu'un paysage?</h2>
      <p class="def">
        Le paysage est constitué par l'ensemble des éléments observables à
        partir d'un lieu précis. Dans l'art, c'est une représentation de la
        nature.
      </p>
      <h2>Les paysages connus dans l'art</h2>
      <div class="row">
        <img
          class="col-2"
          src="https://blog.artsper.com/wp-content/uploads/2020/07/la_nuit_etoilee.jpg"
        />
        <img
          class="col-2 img"
          src="https://www.kazoart.com/blog/wp-content/uploads/2017/06/etretat-monet.jpg"
        />
        <img
          class="col-2 img"
          src="https://blog.artsper.com/wp-content/uploads/2021/01/Caspar-David-Friedrich-Monk-by-the-Sea-1808-10-768x488.jpg"
        />
        <img
          class="col-2 img"
          src="https://blog.artsper.com/wp-content/uploads/2020/07/canaletto_vue_salute_depuis_grand_canal_mb_a.jpg"
        />
        <img
          class="col-2 img"
          src="https://blog.artsper.com/wp-content/uploads/2020/07/6b9a06102c943f440bd5af2f857347d2.jpg"
        />
      </div>
      <div class="row">
        <div class="col-2">La nuit étoilée, de Vincent van Gogh</div>
        <div class="col-2 img">Soleil couchant à Etretat, de Monet</div>
        <div class="col-2 img">
          Le moine au bord de la mer, de Caspar David Friedrich
        </div>
        <div class="col-2 img">
          Le Grand canal à l’église de la Salute, Giovanni Antonio Canal
        </div>
        <div class="col-2 img">L’Estaque, de André Derain</div>
      </div>
      <h2>A toi de jouer!</h2>
      <p>Créer ton propre paysage en choisissant son contenu.</p>
      <h2>Les paysages de l'exposition</h2>
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
import myJSON from "@/assets/photos.json";
export default {
  name: "pagePaysage",
  components: { headerPage, footerPage },
  data() {
    return {
      jsonPhotos: myJSON,
      jsonPhotosSorted: [],
    };
  },
  mounted() {
    window.scroll(0, 0);
    this.jsonPhotos.photographies.forEach((photo) => {
      if (photo.theme === "paysage") {
        this.jsonPhotosSorted.push(photo);
      }
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
