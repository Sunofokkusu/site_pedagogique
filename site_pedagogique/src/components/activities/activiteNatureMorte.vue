<template>
  <div>
    <h2>A toi de jouer!</h2>
    <div style="width: 400px;height: 300px;">
      <slide-puzzle :ratio="3" mode="near" />
    </div>
  </div>
</template>

<script>
import 'vue-slide-puzzle/dist/VueSlidePuzzle.css';
export default {
  name: "activiteNatureMorte",
  methods: {
    getImg(img) {
      return require(`../../assets/photos/${img}`);
    },
  }
};
</script>

<style></style>
