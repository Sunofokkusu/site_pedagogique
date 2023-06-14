<template>
  <div>
    <headerPage />
    <div class="corps">
      <h2>Qu'est ce qu'un portrait <font-awesome-icon icon="fa-solid fa-circle-question" /></h2>
      <p class="def">
        Représentation, d'après un modèle réel, d'un être (surtout d'un être
        animé) par un artiste qui s'attache à en reproduire ou à en interpréter
        les traits et expressions caractéristiques. Ici, les portraits sont
        réalisés à l'aide d'un appareil photographique ou d'un téléphone mobile.
      </p>
      <h2>Les portraits dans l'art <font-awesome-icon icon="fa-solid fa-paintbrush" /></h2>
      <p>Clique sur les cases pour faire apparaître les œuvres.</p>
      <div class="row">
        <div class="card col-2">
          <div class="card__face card__face--front">
            La Joconde, de Léonard de Vinci
          </div>
          <div class="card__face card__face--back">
            <img class="img" src="../assets/exemples/joconde.jpg" />
          </div>
        </div>
        <div class="card col-2">
          <div class="card__face card__face--front">
            Autoportrait à l’oreille, de Vincent Van Gogh
          </div>
          <div class="card__face card__face--back col-2">
            <img class="img" src="../assets/exemples/oreille.jpg" />
          </div>
        </div>
        <div class="card col-2">
          <div class="card__face card__face--front">
            La jeune fille à la perle, de Johannes Vermeer
          </div>
          <div class="card__face card__face--back col-2">
            <img class="img" src="../assets/exemples/perle.jpg" />
          </div>
        </div>
        <div class="card col-2">
          <div class="card__face card__face--front">
            Portrait d’Adele Bloch Bauer I, de Gustav Klimt
          </div>
          <div class="card__face card__face--back col-2">
            <img class="img" src="../assets/exemples/portait.jpg" />
          </div>
        </div>
        <div class="card col-2">
          <div class="card__face card__face--front">
            L’afghane aux yeux verts, de Steve McCurry
          </div>
          <div class="card__face card__face--back col-2">
            <img class="img" src="../assets/exemples/yeux.jpg" />
          </div>
        </div>
      </div>
      <activitePortrait/>
      <h2>Les portraits de l'exposition</h2>
      <sleeplessCountry/>
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
      <activiteHomme/>
      <activiteLVIV/>
    </div>
    <div class="navigation">
      <span class="prev" @click="this.$router.push({ name: 'pageNatureMorte' })"
        >◀ Nature morte</span
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
import sleeplessCountry from '@/components/activities/sleeplessCountry.vue';
import activitePortrait from '@/components/activities/activitePortrait.vue';
import activiteHomme from '@/components/activities/activiteHomme.vue';
import activiteLVIV from "@/components/activities/activiteLVIV.vue";
import myJSON from "@/assets/photos.json";
export default {
  name: "pagePortrait",
  components: { headerPage, footerPage, sleeplessCountry, activitePortrait, activiteHomme, activiteLVIV },
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
      if (photo.theme === "portrait" && photo.activite === "non") {
        this.jsonPhotosSorted.push(photo);
      } else if (photo.theme === "portrait" && photo.activite === "oui") {
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
  width: 100%;
  height: 100%;
  object-fit: cover;
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
.card {
  margin-left: 20px;
  margin-right: 20px;
  transition: transform 1s;
  transform-style: preserve-3d;
  cursor: pointer;
  position: relative;
  align-items: center;
}

.card.is-flipped {
  transform: rotateY(180deg);
}

.card__face {
  display: flex;
  position: absolute;
  height: 300px;
  width: 250px;
  color: black;
  padding: 10px;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 2vh;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.card__face--front {
  border: 1px solid black;
}

.card__face--back {
  transform: rotateY(180deg);
}
</style>
