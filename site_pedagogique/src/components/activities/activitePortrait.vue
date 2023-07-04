<template>
  <div>
    <section class="grisbg">
      <h2>A toi de jouer <font-awesome-icon icon="fa-solid fa-gamepad" /></h2>
      <p class="def">
        Place toi devant la caméra pour voir ton portrait (si rien ne s'affiche,
        autorise l'accès à la caméra au navigateur).
      </p>
      <video id="webcam" autoplay></video>
    </section>
  </div>
</template>

<script>
export default {
  name: "activitePortrait",
  mounted() {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        // Afficher le flux vidéo dans la balise vidéo
        document.querySelector("#webcam").srcObject = stream;
      })
      .catch((err) => {
        console.error(err);
      });
  },
};
</script>

<style>
#webcam {
  width: 90%;
  margin-left: 20px;
  margin-right: 20px;
}
</style>
