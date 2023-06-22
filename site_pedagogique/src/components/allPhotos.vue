<template>
  <div>
    <headerPage />
    <div class="corps">
      <h2>Toutes les photos</h2>
      <div class="photosInfos" v-for="photo in jsonPhotos.photographies" :key="photo">
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
    <footerPage/>
  </div>
</template>

<script>
import headerPage from "@/components/headerPages.vue";
import footerPage from '@/components/footerPage.vue';
import myJSON from "@/assets/photos.json";
export default {
  name: "allPhotos",
  components: { headerPage,footerPage },
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
h2{
  color: black;
}
</style>
