<template>
  <div>
    <div class="row">
      <img class="col-md-4 col-12" src="../../assets/photos/LVIV.jpg" />
      <div class="col-md-6 col-12">
        <h2>LVIV</h2>
        <p>Viacheslav POLIAKOV</p>
        <div class="row">
          <img class="pictog col-4" src="../../assets/pictos/peinture.png" />
          <div class="col-8">
            <p class="falc">
              Il existe plusieurs couleurs<br />Chaque couleur a son opposé<br />La
              couleur opposée au jaune est le bleu
            </p>
            <div class="align">
              <div class="jauneLVIV">
                <q-tooltip anchor="center middle" self="center middle">
                  <div class="bleuLVIV"></div>
                </q-tooltip>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr />
  </div>
</template>

<script>
export default {
  name: "activiteLVIV",
  methods: {},
};
</script>

<style>
.align {
  display: flex;
}
.jauneLVIV {
  background-color: #dfcf32;
  width: 10vw;
  height: 10vh;
  border: 1px solid black;
}
.bleuLVIV {
  background-color: #3242df;
  width: 9vw;
  height: 9vh;
  border: 1px solid black;
}
</style>
