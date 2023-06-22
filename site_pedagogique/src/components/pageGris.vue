<template>
  <div>
    <headerPage />
    <div class="corps">
      <section class="grisbg">
        <h2>
          Qu'est ce qui est gris
          <font-awesome-icon icon="fa-solid fa-circle-question" />
        </h2>
        <p class="def">
          Les loups sont gris.<br/> Les souris sont grises.<br/> Les pigeons sont gris.<br/> Les cailloux sont gris. 
        </p>
      </section>
      <h2>
        Les oeuvres grises dans l'art
        <font-awesome-icon icon="fa-solid fa-paintbrush" />
      </h2>
      <p class="def">
        Clique sur les cases pour avoir des informations sur l'œuvre.
      </p>
      <div class="row">
        <div class="card col-2">
          <div class="card__face card__face--front">
            <img class="col-2 img" src="../assets/exemples/guernica.jpg" />
          </div>
          <div class="card__face card__face--back">
            Guernica, de Pablo Picasso
          </div>
        </div>
        <div class="card col-2">
          <div class="card__face card__face--front">
            <img class="col-2 img" src="../assets/exemples/arbre.jpg" />
          </div>
          <div class="card__face card__face--back">
            L'arbre gris, de Piet Mondrian
          </div>
        </div>
        <div class="card col-2">
          <div class="card__face card__face--front">
            <img class="col-2 img" src="../assets/exemples/cheval.jpg" />
          </div>
          <div class="card__face card__face--back">
            Le cheval gris, de Théodore Géricault
          </div>
        </div>
        <div class="card col-2">
          <div class="card__face card__face--front">
            <img class="col-2 img" src="../assets/exemples/girl.jpg" />
          </div>
          <div class="card__face card__face--back">
            Girl in grey, de Louis Le Brocquy
          </div>
        </div>
        <div class="card col-2">
          <div class="card__face card__face--front">
            <img class="col-2 img" src="../assets/exemples/maternite.jpg" />
          </div>
          <div class="card__face card__face--back">
            Maternité, de Nguyen Thanh Binh
          </div>
        </div>
      </div>
      <activiteGris />
      <h2>Les photos grises de l'exposition</h2>

      <div class="photosInfos" v-for="photo in jsonPhotosSorted" :key="photo">
        <div class="row">
          <img class="col-md-4 col-12" :src="getImg(photo.chemin)" />
          <div class="col-md-6 col-12">
            <h2>{{ photo.nom }}</h2>
            <p>{{ photo.photographe }}</p>
            <div class="row">
              <img class="pictog col-4" :src="getPicto(photo.picto)" />
              <div class="col-8">
                <p class="falc" v-for="ligne in photo.description" :key="ligne">
                  {{ ligne }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>      
      <arbreBayle />
    </div>
    <div class="navigation">
      <span class="prev" @click="this.$router.push({ name: 'pageNoir' })"
        >◀ Noir</span
      >
      <span class="next" @click="this.$router.push({ name: 'pageBlanc' })"
        >Blanc ▶</span
      >
    </div>
    <footerPage />
  </div>
</template>

<script>
import headerPage from "@/components/headerPages.vue";
import footerPage from "@/components/footerPage.vue";
import activiteGris from "@/components/activities/activiteGris.vue";
import arbreBayle from "@/components/activities/arbreBayle.vue";
import myJSON from "@/assets/photos.json";
export default {
  name: "pageGris",
  components: { headerPage, footerPage, activiteGris, arbreBayle },
  data() {
    return {
      jsonPhotos: myJSON,
      jsonPhotosSorted: [],
      jsonPhotosSortedActivite: [],
    };
  },
  mounted() {
    window.scroll(0, 0);
    this.jsonPhotos.photographies.forEach((photo) => {
      if (photo.couleur === "gris" && photo.activite === "non") {
        this.jsonPhotosSorted.push(photo);
      } else if (photo.couleur === "gris" && photo.activite === "oui") {
        this.jsonPhotosSortedActivite.push(photo);
      }
    });
    var card = document.querySelectorAll(".card");
    card.forEach((card) => {
      card.addEventListener("click", function () {
        card.classList.toggle("is-flipped");
      });
    });
  },
  methods: {
    getImg(img) {
      return require(`../assets/photos/${img}`);
    },
    getPicto(img) {
      return require(`../assets/pictos/${img}`);
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
.next,
.prev {
  cursor: pointer;
}
</style>
