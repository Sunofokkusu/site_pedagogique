<template>
  <div>
    <h2>A toi de jouer!</h2>
    <p>Mélange des couleurs avec le jaune pour voir le résultat.</p>
    <div v-if="!melange">
      <div class="row">
        <div class="col-2 jaun"></div>
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
  </div>
</template>

<script>
export default {
  name: "activiteJaune",
  data(){
    return{
        melange: false,
      color: "white",
      colorMelange: "",
    }
  },
  methods:{
    melanger() {
      this.melange = true;
      if (this.color === "white") {
        this.colorMelange = "jauneC";
      } else if (this.color === "ble") {
        this.colorMelange = "vert";
      } else if (this.color === "roug") {
        this.colorMelange = "orange";
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
.jaun {
  height: 20vh !important;
  border: 1px solid black;
  margin-bottom: 30px;
  background-color: yellow;
  margin-left: 20px;
}
.white {
  height: 20vh !important;
  border: 1px solid black;
  margin-left: 20px;
}
.roug {
  height: 20vh !important;
  border: 1px solid black;
  margin-left: 20px;
  background-color: red;
}
.ble {
  height: 20vh !important;
  border: 1px solid black;
  margin-left: 20px;
  background-color: blue;
  margin-bottom: 30px;
}
.jauneC {
  height: 20vh !important;
  border: 1px solid black;
  background-color: lightyellow;
  margin-bottom: 30px;
}
.vert {
  height: 20vh !important;
  border: 1px solid black;
  background-color: green;
  margin-bottom: 30px;
}
.orange {
  height: 20vh !important;
  border: 1px solid black;
  background-color: orange;
  margin-bottom: 30px;
}
.boutton,
.choixB,
.choixR,
.choixW {
  cursor: pointer;
  margin-bottom: 10px;
}
.choixB {
  height: 5vh !important;
  border: 1px solid black;
  margin-left: 20px;
  background-color: blue;
}
.choixR {
  height: 5vh !important;
  border: 1px solid black;
  margin-left: 20px;
  background-color: red;
}
.choixW {
  height: 5vh !important;
  border: 1px solid black;
  margin-left: 20px;
  background-color: white;
}
</style>
