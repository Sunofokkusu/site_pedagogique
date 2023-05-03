<template>
  <div>
    <headerPage />
    <div class="corps">
      {{ jsonPhotosSorted }}
    </div>
  </div>
</template>

<script>
import headerPage from "@/components/headerPages.vue";
import myJSON from "@/assets/photos.json";
export default {
  name: "pagePortrait",
  components: { headerPage },
  data() {
    return {
      jsonPhotos: myJSON,
      jsonPhotosSorted: []
    }
  },
  mounted(){
    this.jsonPhotos.photographies.forEach((photo) => {
      if(photo.theme === "portrait"){
        this.jsonPhotosSorted.push(photo);
      }
    })
  }
};
</script>

<style>
body {
  margin: 0 !important;
}
.corps{
  margin-top: 60px;
}
</style>
