<template>
  <div>
    <h2>A toi de jouer <font-awesome-icon icon="fa-solid fa-gamepad" /></h2>
    <p>
      Place toi devant la caméra pour voir ton portrait (si rien ne s'affiche,
      autorise l'accès à la caméra au navigateur).
    </p>
    <video id="webcam" autoplay></video>
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
        // Attendre que la vidéo soit prête
        document.querySelector("#webcam").onloadedmetadata = () => {
          // Lire les codes QR à partir du flux vidéo
          setInterval(() => {
            const video = document.getElementById("webcam");
            const canvas = document.createElement("canvas");
            if (video) {
              canvas.width = video.videoWidth;
              canvas.height = video.videoHeight;
              canvas.getContext("2d").drawImage(video, 0, 0);
            } else {
              stream.getVideoTracks()[0].stop();
            }
          });
        };
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
