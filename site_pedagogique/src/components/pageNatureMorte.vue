<template>
    <div>
      <headerPage />
      <div class="corps">
        <h2>Qu'est ce qu'une nature morte?</h2>
        <p class="def">
          C'est une représentation d'objets inanimés placés d'une certaine manière avec l'intention de faire passer un message.
        </p>
        <h2>Les natures mortes connues dans l'art</h2>
        <div class="row">
          <img class="col-2" src="../assets/exemples/fede.jpg" />
          <img class="col-2 img" src="../assets/exemples/asperges.jpg" />
          <img class="col-2 img" src="../assets/exemples/pommes.jpg" />
          <img class="col-2 img" src="../assets/exemples/fruits.jpg" />
          <img class="col-2 img" src="../assets/exemples/crane.jpg" />
        </div>
        <div class="row">
          <div class="col-2">Nature morte, de Fede Galizia</div>
          <div class="col-2 img">
            Une botte d’Asperges, de Edouard Manet
          </div>
          <div class="col-2 img">
            Le Panier de Pommes, de Paul Cézanne
          </div>
          <div class="col-2 img">
            Nature Morte aux fruits dans des porcelaines, de Jacob Van Es
          </div>
          <div class="col-2 img">La Nature Morte au Crâne, de Paul Cézanne</div>
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
        <span class="next" @click="this.$router.push({ name: 'pagePortrait' })"
          >Portait ▶</span
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
  