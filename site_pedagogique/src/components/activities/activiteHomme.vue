<template>
  <div>
    <div class="row">
        <a class="hovergif col-4"></a>
      <div class="col-6">
        <p>Vois-tu une forme sur cette photographie? Passe ta souris dessus pour la découvrir!</p>
      </div>
    </div>
    <hr />
  </div>
</template>

<script>
export default {
  name: "activiteHomme",
  methods:{
    getImg(img) {
      return require(`../../assets/photos/${img}`);
    }
  }
};
</script>

<style>
.hovergif { 
  height: 50vh !important;
  background-image: url('/src/assets/photos/homme.jpg');
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.hovergif:hover {
    background-image: url('/src/assets/pyramide.gif');
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
</style>
