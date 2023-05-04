<template>
  <div>
    <headerPage />
    <div class="corps">
      <h2>PHOTOS ABSTRAITES</h2>
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
  </div>
</template>

<script>
import headerPage from "@/components/headerPages.vue";
import myJSON from "@/assets/photos.json";
export default {
  name: "pageAbstrait",
  components: { headerPage },
  data() {
    return {
      jsonPhotos: myJSON,
      jsonPhotosSorted: [],
    };
  },
  mounted() {
    window.scroll(0, 0);
    this.jsonPhotos.photographies.forEach((photo) => {
      if (photo.theme === "abstrait") {
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
</style>
