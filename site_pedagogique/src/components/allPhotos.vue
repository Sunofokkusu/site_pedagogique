<template>
  <div>
    <headerPage />
    <div class="corps">
      <h2>Toutes les photos</h2>
      <div
        class="photosInfos"
        v-for="photo in jsonPhotos.photographies"
        :key="photo"
      >
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
    <footerPage />
  </div>
</template>

<script>
import headerPage from "@/components/headerPages.vue";
import footerPage from "@/components/footerPage.vue";
import myJSON from "@/assets/photos.json";
export default {
  name: "allPhotos",
  components: { headerPage, footerPage },
  data() {
    return {
      jsonPhotos: myJSON,
    };
  },
  mounted() {
    window.scroll(0, 0);
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
h2 {
  color: black;
}
.pictog {
  width: 70px !important;
  height: 70px !important;
}
.falc{
  font-size: 30px;
  text-align: left;
  margin-left: 20px;
}
</style>
