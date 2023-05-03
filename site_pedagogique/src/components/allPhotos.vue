<template>
  <div>
    <headerPage />
    <div class="corps">
      <div class="photosInfos" v-for="photo in jsonPhotos.photographies" :key="photo">
        <img :src="getImg(photo.chemin)" />
        <h2>{{ photo.nom }}</h2>
        <p>- {{ photo.photographe }}</p>
        <p>{{ photo.description }}</p>
        <hr />
      </div>
    </div>
  </div>
</template>

<script>
import headerPage from "@/components/headerPages.vue";
import myJSON from "@/assets/photos.json";
export default {
  name: "allPhotos",
  components: { headerPage },
  data() {
    return {
      jsonPhotos: myJSON
    };
  },
  mounted() {
    window.scroll(0, 0);
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
</style>
