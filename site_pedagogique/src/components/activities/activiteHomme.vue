<template>
  <div>
    <div class="row">
      <a class="hovergif col-md-4 col-12"></a>
      <div class="col-md-6 col-12">
        <div class="row">
          <img class="pictog col-4" src="../../assets/pictos/triangle.png" />
          <div class="col-8">
            <p class="falc">
              Il y a un homme au milieu de l’image<br />Les traces de pas dans
              la neige<br />Forment un triangle<br />Vois-tu le triangle ?<br />Passe
              ta souris sur l’image pour le découvrir
            </p>
          </div>
        </div>
      </div>
    </div>
    <hr />
  </div>
</template>

<script>
export default {
  name: "activiteHomme",
  methods: {
    getImg(img) {
      return require(`../../assets/photos/${img}`);
    },
  },
};
</script>

<style>
.hovergif {
  height: 50vh !important;
  background-image: url("/src/assets/photos/homme.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.hovergif:hover {
  background-image: url("/src/assets/pyramide.gif");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
</style>
