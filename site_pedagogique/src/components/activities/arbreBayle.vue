<template>
  <div>
    <div class="row">
      <div class="col-md-4 col-12">
        <VueMagnifier :src="getImg('bayle4.jpg')" />
      </div>
      <div class="col-md-6 col-12">
        <h2>Bayle</h2>
        <p>François BOUTAUD</p>
        <div class="row">
              <img class="pictog col-4" src="../../assets/pictos/trame.png" />
              <div class="col-8">
                <p class="falc">La photo est composée de petits points<br/>Les points sont noirs, blancs ou gris<br/>Ensembles ils créent une image</p>
              </div>
            </div>
      </div>
    </div>
    <hr />
  </div>
</template>

<script>
import VueMagnifier from '@websitebeaver/vue-magnifier'
import '@websitebeaver/vue-magnifier/styles.css'
export default {
components: { VueMagnifier },
  name: "arbreBayle",
  methods:{
    getImg(img) {
      return require(`../../assets/photos/${img}`);
    }
  }
};
</script>

<style></style>
