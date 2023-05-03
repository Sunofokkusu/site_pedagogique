<template>
  <div>
    <headerPage />
    <div class="corps">
      {{ jsonPhotos }}
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
      jsonPhotos: myJSON
    }
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
