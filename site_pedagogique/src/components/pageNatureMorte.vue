<template>
    <div>
      <headerPage />
      <div class="corps">
        <h2>Qu'est ce qu'une nature morte?</h2>
        <p class="def">

        </p>
        <h2>Les natures mortes connues dans l'art</h2>
        <div class="row">
          <img class="col-2" src="../assets/exemples/joconde.jpg" />
          <img class="col-2 img" src="../assets/exemples/oreille.jpg" />
          <img class="col-2 img" src="../assets/exemples/perle.jpg" />
          <img class="col-2 img" src="../assets/exemples/portait.jpg" />
          <img class="col-2 img" src="../assets/exemples/yeux.jpg" />
        </div>
        <div class="row">
          <div class="col-2">La Joconde, de Léonard de Vinci</div>
          <div class="col-2 img">
            Autoportrait à l’oreille, de Vincent Van Gogh
          </div>
          <div class="col-2 img">
            La jeune fille à la perle, de Johannes Vermeer
          </div>
          <div class="col-2 img">
            Portrait d’Adele Bloch Bauer I, de Gustav Klimt
          </div>
          <div class="col-2 img">L’afghane aux yeux verts, de Steve McCurry</div>
        </div>
        <h2>A toi de jouer!</h2>
        <h2>Les natures mortes de l'exposition</h2>
        <div class="photosInfos" v-for="photo in jsonPhotosSorted" :key="photo">
          <div class="row">
            <img class="col-4" :src="getImg(photo.chemin)" />
            <div class="col-6">
              <h2>{{ photo.nom }}</h2>
              <p>{{ photo.photographe }}</p>
              <p>{{ photo.descriptionTheme }}</p>
            </div>
          </div>
          <hr />
        </div>
      </div>
      <div class="navigation">
        <span class="prev" @click="this.$router.push({ name: 'pageAbstrait' })"
          >◀ Abstrait</span
        >
        <span class="next" @click="this.$router.push({ name: 'pagePaysage' })"
          >Paysages ▶</span
        >
      </div>
      <footerPage />
    </div>
  </template>
  
  <script>
  import headerPage from "@/components/headerPages.vue";
  import footerPage from "@/components/footerPage.vue";
  import myJSON from "@/assets/photos.json";
  export default {
    name: "pagePortrait",
    components: { headerPage, footerPage },
    data() {
      return {
        jsonPhotos: myJSON,
        jsonPhotosSorted: [],
        jsonPhotosSortedActivite: []
      };
    },
    mounted() {
      window.scroll(0, 0);
      this.jsonPhotos.photographies.forEach((photo) => {
        if (photo.theme === "natureMorte" && photo.activite === "non") {
          this.jsonPhotosSorted.push(photo);
        }else if (photo.theme === "natureMorte" && photo.activite === "oui") {
          this.jsonPhotosSortedActivite.push(photo);
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
  .def {
    margin-left: 20px;
    margin-right: 20px;
  }
  .img {
    margin-left: 20px;
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
  .next,
  .prev {
    cursor: pointer;
  }
  #webcam {
    width: 90%;
    margin-left: 20px;
    margin-right: 20px;
  }
  </style>
  