<template>
  <div>
    <headerPage />
    <div class="corps">
      <h2>Qu'est ce qu'un portrait?</h2>
      <p class="def">
        Représentation, d'après un modèle réel, d'un être (surtout d'un être
        animé) par un artiste qui s'attache à en reproduire ou à en interpréter
        les traits et expressions caractéristiques. Ici, les portraits sont
        réalisés à l'aide d'un appareil photographique ou d'un téléphone mobile.
      </p>
      <h2>Les portraits connus dans l'art</h2>
      <div class="row">
        <img
          class="col-2"
          src="../assets/exemples/joconde.jpg"
        />
        <img
          class="col-2 img"
          src="../assets/exemples/oreille.jpg"
        />
        <img
          class="col-2 img"
          src="../assets/exemples/perle.jpg"
        />
        <img
          class="col-2 img"
          src="../assets/exemples/portait.jpg"
        />
        <img
          class="col-2 img"
          src="../assets/exemples/yeux.jpg"
        />
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
      <p>Place toi devant la caméra pour voir ton portrait (si rien ne s'affiche, autorise l'accès à la caméra au navigateur).</p>
      <video id="webcam" autoplay></video>
      <h2>Les portraits de l'exposition</h2>
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
    };
  },
  mounted() {
    window.scroll(0, 0);
    this.jsonPhotos.photographies.forEach((photo) => {
      if (photo.theme === "portrait") {
        this.jsonPhotosSorted.push(photo);
      }
    });
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        // Afficher le flux vidéo dans la balise vidéo
        document.querySelector("#webcam").srcObject = stream;
        // Attendre que la vidéo soit prête
        document.querySelector("#webcam").onloadedmetadata = () => {
          // Lire les codes QR à partir du flux vidéo
          setInterval(() => {
            const video = document.getElementById("webcam");
            const canvas = document.createElement("canvas");
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            canvas.getContext("2d").drawImage(video, 0, 0);})
        };
      })
      .catch((err) => {
        console.error(err);
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
#webcam{
  width: 90%;
  margin-left: 20px;
  margin-right: 20px;
}
</style>
