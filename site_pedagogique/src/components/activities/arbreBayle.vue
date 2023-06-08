<template>
  <div>
    <div class="row">
      <div class="col-4">
        <VueMagnifier :src="getImg('bayle4.jpg')" />
      </div>
      <div class="col-6">
        <h2>Bayle</h2>
        <p>François BOUTAUD</p>
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
