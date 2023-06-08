<template>
  <div>
    <h2>A toi de jouer!</h2>
    <!-- <puzzle-board
      :src="getImg('asperges.jpg')" /> -->
  </div>
</template>

<script>
// import PuzzleBoard from 'vue-8-puzzle'
export default {
  name: "activiteNatureMorte",
  // components: {
  //   PuzzleBoard  
  // },
  methods: {
    getImg(img) {
      return require(`../../assets/exemples/${img}`);
    },
  }
};
</script>

<style></style>
