<template>
  <div>
    <section class="grisbg">
      <h2>A toi de jouer <font-awesome-icon icon="fa-solid fa-gamepad" /></h2>
      <p class="def">Mélange des couleurs avec le noir pour voir le résultat.</p>
      <div v-if="!melange">
        <div class="row">
          <div class="col-2 noi"></div>
          <div class="col-2" :class="color"></div>
          <div class="col-1">
            <div class="choixR" @click="color = 'roug'"></div>
            <div class="choixB" @click="color = 'ble'"></div>
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
  name: "activiteNoir",
  data() {
    return {
      color: "white",
      colorMelange: "",
      melange: false,
    };
  },
  methods: {
    melanger() {
      this.melange = true;
      if (this.color === "roug") {
        this.colorMelange = "rougF";
      } else if (this.color === "ble") {
        this.colorMelange = "bleuF";
      } else if (this.color === "white") {
        this.colorMelange = "grey";
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
.noi {
  height: 20vh !important;
  border: 1px solid black;
  margin-bottom: 30px;
  background-color: black;
}
.rougF {
  height: 20vh !important;
  border: 1px solid black;
  background-color: darkred;
  margin-bottom: 30px;
}
.bleuF {
  height: 20vh !important;
  border: 1px solid black;
  background-color: darkblue;
  margin-bottom: 30px;
}
.grey {
  height: 20vh !important;
  border: 1px solid black;
  background-color: grey;
  margin-bottom: 30px;
}
</style>
