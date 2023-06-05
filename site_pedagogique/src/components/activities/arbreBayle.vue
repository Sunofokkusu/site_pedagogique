<template>
  <div>
    <h2>Bayle</h2>
    <p>François BOUTAUD</p>
    <VueMagnifier :src="getImg('bayle4.jpg')" width="50vw" />
    <hr/>
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
