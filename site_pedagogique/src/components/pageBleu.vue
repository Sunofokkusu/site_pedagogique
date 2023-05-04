<template>
  <div>
    <headerPage />
    <div class="corps">
      <h2>PHOTOS BLEUES</h2>
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
      <span class="prev" @click="this.$router.push({ name: 'pageJaune' })">◀ Jaune</span>
      <span class="next" @click="this.$router.push({ name: 'pageNoir' })">Noir ▶</span>
    </div>
    <footerPage/>
  </div>
</template>

<script>
import headerPage from "@/components/headerPages.vue";
import footerPage from '@/components/footerPage.vue';
import myJSON from "@/assets/photos.json";
export default {
  name: "pageBleu",
  components: { headerPage,footerPage },
  data() {
    return {
      jsonPhotos: myJSON,
      jsonPhotosSorted: [],
    };
  },
  mounted() {
    window.scroll(0, 0);
    this.jsonPhotos.photographies.forEach((photo) => {
      if (photo.couleur === "bleu") {
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
.next,.prev{
  cursor: pointer;
}
</style>
