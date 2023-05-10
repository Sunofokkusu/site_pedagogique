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
        <div class="col-2 img">Le cheval gris, de Théodore Géricault</div>
        <div class="col-2 img">Girl in grey, de Louis Le Brocquy</div>
        <div class="col-2 img">Maternité, de Nguyen Thanh Binh</div>
      </div>
      <h2>A toi de jouer!</h2>
      <p>
        Le gris ne peux pas vraiment se mélanger avec d'autres couleurs...
        Découvre plutôt certaines de ses nuances.
      </p>
      <div class="row">
        <div class="col-4 nuanceGris"></div>
      </div>
      <div class="nomG"></div>
      <button class="boutton" @click="changeGris">Suivante</button>
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
        "#D3D3D3"
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
        "Gris clair"
      ],
      index: 0,
    };
  },
  mounted() {
    window.scroll(0, 0);
    this.jsonPhotos.photographies.forEach((photo) => {
      if (photo.couleur === "gris") {
        this.jsonPhotosSorted.push(photo);
      }
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
.nomG{
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
