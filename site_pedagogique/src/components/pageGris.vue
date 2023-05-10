<template>
  <div>
    <headerPage />
    <div class="corps">
      <h2>Qu'est ce que le gris?</h2>
      <p class="def">
        Le gris est une couleur intermédiaire entre le blanc et le noir.
      </p>
      <h2>Les oeuvres grises connues dans l'art</h2>
      <div class="row">
        <img
          class="col-2"
          src="https://static.nationalgeographic.fr/files/styles/image_3200/public/Main_Guernica_BAT-10313.jpg"
        />
        <img
          class="col-2 img"
          src="http://ekladata.com/Nv41TVr_--zDZr98vW2ryfWRr3c@600x444.jpg"
        />
        <img
          class="col-2 img"
          src="http://ekladata.com/Xbb0rKSjxGGGuoCd5_MO30KMsj0@600x486.jpg"
        />
        <img
          class="col-2 img"
          src="http://ekladata.com/emO9BoDzcGYLTxm3H3xGwRyCC-s.jpg"
        />
        <img
          class="col-2 img"
          src="http://ekladata.com/bjwBXqPz6xBtEDpoyg9jre3ARJY.jpg"
        />
      </div>
      <div class="row">
        <div class="col-2">Guernica, de Pablo Picasso</div>
        <div class="col-2 img">L'arbre gris, de Piet Mondrian</div>
        <div class="col-2 img">
          Le cheval gris, de Théodore Géricault
        </div>
        <div class="col-2 img">
          Girl in grey, de Louis Le Brocquy
        </div>
        <div class="col-2 img">
          Maternité, de Nguyen Thanh Binh
        </div>
      </div>
      <h2>A toi de jouer!</h2>
      
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
      <span class="prev" @click="this.$router.push({ name: 'pageNoir' })">◀ Noir</span>
      <span class="next" @click="this.$router.push({ name: 'pageJaune' })">Jaune ▶</span>
    </div>
    <footerPage/>
  </div>
</template>

<script>
import headerPage from "@/components/headerPages.vue";
import footerPage from '@/components/footerPage.vue';
import myJSON from "@/assets/photos.json";
export default {
  name: "pageGris",
  components: { headerPage,footerPage },
  data() {
    return {
      jsonPhotos: myJSON,
      jsonPhotosSorted: [],
    };
  },
  mounted() {
    window.scroll(0, 0);
    this.jsonPhotos.photographies.forEach((photo) => {
      if (photo.couleur === "gris") {
        this.jsonPhotosSorted.push(photo);
      }
    });
  },
  methods: {
    getImg(img) {
      return require(`../assets/photos/${img}`);
    },
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
.next {
  margin-left: 5%;
}
.next,.prev{
  cursor: pointer;
}
</style>
