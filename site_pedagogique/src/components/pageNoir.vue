<template>
  <div>
    <headerPage />
    <div class="corps">
      <h2>Qu'est ce que le noir?</h2>
      <p class="def">
        Le noir est l'absence de lumière. Contrairement au blanc et aux autres
        teintes, le noir pur existe dans la nature en l'absence totale de
        lumière.
      </p>
      <h2>Les oeuvres noires dans l'art</h2>
      <p>Clique sur les cases pour faire apparaître les œuvres.</p>
      <div class="row">
        <div class="card col-2">
          <div class="card__face card__face--front">
            Voile de calice noir, de Henri Matisse
          </div>
          <div class="card__face card__face--back">
            <img class="col-2 img" src="../assets/exemples/voile.jpg" />
          </div>
        </div>
        <div class="card col-2">
          <div class="card__face card__face--front">
            Black Paintings, de Franko B
          </div>
          <div class="card__face card__face--back">
            <img class="col-2 img" src="../assets/exemples/black.jpg" />
          </div>
        </div>
        <div class="card col-2">
          <div class="card__face card__face--front">
            No. 6 (?), de Mark Rothko
          </div>
          <div class="card__face card__face--back">
            <img class="col-2 img" src="../assets/exemples/n6.jpg" />
          </div>
        </div>
        <div class="card col-2">
          <div class="card__face card__face--front">
            Peinture 30.03.84, de Pierre Soulages
          </div>
          <div class="card__face card__face--back">
            <img class="col-2 img" src="../assets/exemples/peinture.jpeg" />
          </div>
        </div>
        <div class="card col-2">
          <div class="card__face card__face--front">
            Rotterdam Horizontal #5, de Richard Serra
          </div>
          <div class="card__face card__face--back">
            <img class="col-2 img" src="../assets/exemples/rotterdam.png" />
          </div>
        </div>
      </div>
      <activiteNoir/>
      <h2>Les photos noires de l'exposition</h2>
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
      <activiteGrotte/>
      <activiteSurLaTerre/>
    </div>
    <div class="navigation">
      <span class="prev" @click="this.$router.push({ name: 'pageBleu' })"
        >◀ Bleu</span
      >
      <span class="next" @click="this.$router.push({ name: 'pageGris' })"
        >Gris ▶</span
      >
    </div>
    <footerPage />
  </div>
</template>

<script>
import headerPage from "@/components/headerPages.vue";
import footerPage from "@/components/footerPage.vue";
import activiteNoir from "@/components/activities/activiteNoir.vue";
import sleeplessCountry from '@/components/activities/sleeplessCountry.vue';
import activiteSurLaTerre from '@/components/activities/activiteSurLaTerre.vue';
import activiteGrotte from '@/components/activities/activiteGrotte.vue';
import myJSON from "@/assets/photos.json";
export default {
  name: "pageNoir",
  components: { headerPage, footerPage, activiteNoir, sleeplessCountry, activiteSurLaTerre, activiteGrotte },
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
      if (photo.couleur === "noir" && photo.activite === "non") {
        this.jsonPhotosSorted.push(photo);
      } else if (photo.couleur === "noir" && photo.activite === "oui") {
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
.next {
  margin-left: 5%;
}
.next,
.prev {
  cursor: pointer;
}
</style>
