<template>
  <div>
    <headerPage />
    <div class="corps">
      <h2>Qu'est ce que le gris?</h2>
      <p class="def">
        Le gris est une couleur intermédiaire entre le blanc et le noir.
      </p>
      <h2>Les oeuvres grises connues dans l'art</h2>
      <p>Clique sur les cases pour faire apparaître les œuvres.</p>
      <div class="row">
        <div class="card col-2">
          <div class="card__face card__face--front">
            Guernica, de Pablo Picasso
          </div>
          <div class="card__face card__face--back">
            <img class="col-2 img" src="../assets/exemples/guernica.jpg" />
          </div>
        </div>
        <div class="card col-2">
          <div class="card__face card__face--front">
            L'arbre gris, de Piet Mondrian
          </div>
          <div class="card__face card__face--back">
            <img class="col-2 img" src="../assets/exemples/arbre.jpg" />
          </div>
        </div>
        <div class="card col-2">
          <div class="card__face card__face--front">
            Le cheval gris, de Théodore Géricault
          </div>
          <div class="card__face card__face--back">
            <img class="col-2 img" src="../assets/exemples/cheval.jpg" />
          </div>
        </div>
        <div class="card col-2">
          <div class="card__face card__face--front">
            Girl in grey, de Louis Le Brocquy
          </div>
          <div class="card__face card__face--back">
            <img class="col-2 img" src="../assets/exemples/girl.jpg" />
          </div>
        </div>
        <div class="card col-2">
          <div class="card__face card__face--front">
            Maternité, de Nguyen Thanh Binh
          </div>
          <div class="card__face card__face--back">
            <img class="col-2 img" src="../assets/exemples/maternite.jpg" />
          </div>
        </div>
      </div>
      <h2>A toi de jouer!</h2>
      <p>
        Le gris ne peut pas vraiment se mélanger avec d'autres couleurs...
        Découvre plutôt certaines de ses nuances.
      </p>
      <div class="row">
        <div class="col-4 nuanceGris"></div>
      </div>
      <div class="nomG"></div>
      <button class="boutton" @click="changeGris">Suivante</button>
      <h2>Les photos grises de l'exposition</h2>
      <div class="photosInfos" v-for="photo in jsonPhotosSorted" :key="photo">
        <div class="row">
          <img class="col-4" :src="getImg(photo.chemin)" />
          <div class="col-6">
            <h2>{{ photo.nom }}</h2>
            <p>{{ photo.photographe }}</p>
            <p>{{ photo.descriptionCouleur }}</p>
          </div>
        </div>
        <hr />
      </div>
    </div>
    <div class="navigation">
      <span class="prev" @click="this.$router.push({ name: 'pageNoir' })"
        >◀ Noir</span
      >
      <span class="next" @click="this.$router.push({ name: 'pageJaune' })"
        >Jaune ▶</span
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
  name: "pageGris",
  components: { headerPage, footerPage },
  data() {
    return {
      jsonPhotos: myJSON,
      jsonPhotosSorted: [],
      jsonPhotosSortedActivite: [],
      nuances: [
        "#606060",
        "#5A5E6B",
        "#C0C0C0",
        "#BABABA",
        "#EDEDED",
        "#AFAFAF",
        "#303030",
        "#677179",
        "#848484",
        "#CECECE",
        "#9E9E9E",
        "#CCCCCC",
        "#798081",
        "#D3D3D3",
      ],
      noms: [
        "Gris",
        "Ardoise",
        "Argent",
        "Etain oxydé",
        "Etain pur",
        "Gris acier",
        "Gris anthracite",
        "Gris de payne",
        "Gris fer",
        "Gris perle",
        "Gris souris",
        "Pinchard",
        "Plomb",
        "Gris clair",
      ],
      index: 0,
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
    document.querySelector(".nuanceGris").style.backgroundColor =
      this.nuances[this.index];
    document.querySelector(".nomG").innerHTML = this.noms[this.index];
  },
  methods: {
    getImg(img) {
      return require(`../assets/photos/${img}`);
    },
    changeGris() {
      if (this.index === 13) {
        this.index = 0;
        document.querySelector(".nuanceGris").style.backgroundColor =
          this.nuances[this.index];
        document.querySelector(".nomG").innerHTML = this.noms[this.index];
      } else {
        this.index += 1;
        document.querySelector(".nuanceGris").style.backgroundColor =
          this.nuances[this.index];
        document.querySelector(".nomG").innerHTML = this.noms[this.index];
      }
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
.nuanceGris {
  height: 20vh !important;
  border: 1px solid black;
  margin-bottom: 10px;
}
.nomG {
  margin-bottom: 5px;
}
.next {
  margin-left: 5%;
}
.next,
.prev {
  cursor: pointer;
}
</style>
