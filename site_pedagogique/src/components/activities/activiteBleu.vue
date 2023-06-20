<template>
  <div>
    <section class="grisbg">
      <h2>A toi de jouer <font-awesome-icon icon="fa-solid fa-gamepad" /></h2>
      <p class="def">Mélange des couleurs avec le bleu pour voir le résultat.</p>
      <div v-if="!melange">
        <div class="row">
          <div class="col-2 ble"></div>
          <div class="col-2" :class="color"></div>
          <div class="col-1">
            <div class="choixR" @click="color = 'roug'"></div>
            <div class="choixJ" @click="color = 'jaun'"></div>
            <div class="choixW" @click="color = 'white'"></div>
          </div>
        </div>
        <button @click="melanger" class="boutton">Mélanger</button>
      </div>
      <div v-else>
        <div class="row">
          <div class="col-2" :class="colorMelange"></div>
        </div>
        <button @click="reset" class="boutton">
          Retour au choix des couleurs
        </button>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "activiteBleu",
  data() {
    return {
      melange: false,
      color: "white",
      colorMelange: "",
    };
  },
  methods: {
    melanger() {
      this.melange = true;
      if (this.color === "white") {
        this.colorMelange = "bleuC";
      } else if (this.color === "jaun") {
        this.colorMelange = "vert";
      } else if (this.color === "roug") {
        this.colorMelange = "violet";
      }
    },
    reset() {
      this.color = "white";
      this.colorMelange = "";
      this.melange = false;
    },
  },
};
</script>

<style>
.choixJ {
  cursor: pointer;
  margin-left: 20px;
  height: 5vh !important;
  border: 1px solid black;
  margin-bottom: 10px;
  background-color: yellow;
}
.bleuC {
  height: 20vh !important;
  border: 1px solid black;
  background-color: lightblue;
  margin-bottom: 30px;
}
.violet {
  height: 20vh !important;
  border: 1px solid black;
  background-color: purple;
  margin-bottom: 30px;
}
.white{
  background-color: white;
}
</style>
