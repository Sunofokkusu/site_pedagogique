<template>
  <div>
    <headerPage />
    <div class="corps">
      <h2>Qu'est ce que le bleu?</h2>
      <p class="def">
        Le bleu est une couleur primaire, c'est à dire une couleur qui ne peut pas être reproduite par un mélange d'autres couleurs.
        C'est l'une des couleurs les plus courantes dans la nature et la vie quotidienne.
      </p>
      <h2>Les oeuvres bleues connues dans l'art</h2>
      <div class="row">
        <img
          class="col-2"
          src="https://www.artmajeur.com/media/cache/resolve/standard/o/l/olimpia-gaia-martinelli/blog/15504022-blueday.jpg"
        />
        <img
          class="col-2 img"
          src="https://www.artmajeur.com/media/cache/resolve/standard/o/l/olimpia-gaia-martinelli/blog/15572881-dsc-0001.jpg"
        />
        <img
          class="col-2 img"
          src="https://www.artmajeur.com/media/cache/resolve/standard/o/l/olimpia-gaia-martinelli/blog/15535954-7ee2fe3cfdceea977ad88356506c359.jpg"
        />
        <img
          class="col-2 img"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project.jpg/1200px-Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project.jpg"
        />
        <img
          class="col-2 img"
          src="https://www.vangoghgallery.com/img/starry_night_full.jpg"
        />
      </div>
      <div class="row">
        <div class="col-2">Jour bleu, de Cfey</div>
        <div class="col-2 img">Depuis un endroit élevé, de Stuart Dalby</div>
        <div class="col-2 img">
          Perception bleue 2, de Weilong Chen
        </div>
        <div class="col-2 img">
          Self-Portrait, de Vincent van Gogh
        </div>
        <div class="col-2 img">Starry Night, de Vincent van Gogh</div>
      </div>
      <h2>A toi de jouer!</h2>
      <p>Mélange des couleurs avec le bleu pour voir le résultat.</p>
      <div v-if="!melange">
        <div class="row">
          <div class="col-2 ble"></div>
          <div class="col-2" :class="color"></div>
          <div class="col-1">
            <div class="choixR" @click="color='roug'"></div>
          <div class="choixJ" @click="color='jaun'"></div>
          <div class="choixW" @click="color='white'"></div>
          </div>
        </div>
        <button @click="melanger" class="boutton">Mélanger</button>
      </div>
      <div v-else>
        <div class="row">
          <div class="col-2" :class="colorMelange"></div>
        </div>
        <button @click="reset" class="boutton">Retour au choix des couleurs</button>
      </div>
      <div class="photosInfos" v-for="photo in jsonPhotosSorted" :key="photo">
        <div class="row">
          <img class="col-4" :src="getImg(photo.chemin)" />
          <div class="col-6">
            <h2>{{ photo.nom }}</h2>
            <p>{{ photo.photographe }}</p>
            <p>{{ photo.description }}</p>
          </div>
        </div>
        <hr />
      </div>
    </div>
    <div class="navigation">
      <span class="prev" @click="this.$router.push({ name: 'pageJaune' })">◀ Jaune</span>
      <span class="next" @click="this.$router.push({ name: 'pageNoir' })">Noir ▶</span>
    </div>
    <footerPage/>
  </div>
</template>

<script>
import headerPage from "@/components/headerPages.vue";
import footerPage from '@/components/footerPage.vue';
import myJSON from "@/assets/photos.json";
export default {
  name: "pageBleu",
  components: { headerPage,footerPage },
  data() {
    return {
      jsonPhotos: myJSON,
      jsonPhotosSorted: [],
      melange: false,
      color: "white",
      colorMelange: ""
    };
  },
  mounted() {
    window.scroll(0, 0);
    this.jsonPhotos.photographies.forEach((photo) => {
      if (photo.couleur === "bleu") {
        this.jsonPhotosSorted.push(photo);
      }
    });
  },
  methods: {
    getImg(img) {
      return require(`../assets/photos/${img}`);
    },
    melanger(){
      this.melange = true;
      if(this.color === "white"){
        this.colorMelange = "bleuC"
      }else if(this.color === "jaun"){
        this.colorMelange = "vert"
      }else if(this.color === "roug"){
        this.colorMelange = "violet"
      }
    },
    reset(){
      this.color = "white";
      this.colorMelange = "";
      this.melange = false;
    }
  },
};
</script>

<style>
body {
  margin: 0 !important;
}
.corps {
  margin-top: 60px;
}
.navigation {
  height: 50px;
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
}
.choixJ{
  cursor: pointer;
  margin-left: 20px;
  height: 5vh !important;
  border: 1px solid black;
  margin-bottom: 10px;
  background-color: yellow;
}
.jaun{
  margin-left: 20px;
}
.bleuC{
  height: 20vh !important;
  border: 1px solid black;
  margin-left: 20px;
  background-color: lightblue;
  margin-bottom: 30px;
}
.violet{
  height: 20vh !important;
  border: 1px solid black;
  margin-left: 20px;
  background-color: purple;
  margin-bottom: 30px;
}
.next {
  margin-left: 5%;
}
.next,.prev{
  cursor: pointer;
}
</style>
