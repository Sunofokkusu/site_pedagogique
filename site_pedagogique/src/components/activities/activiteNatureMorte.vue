<template>
  <div>
    <h2>A toi de jouer <font-awesome-icon icon="fa-solid fa-gamepad" /></h2>
    <p>Complète ce puzzle pour découvrir l'image!</p>
    <div id="images">
      <div id="drag1" draggable @dragstart="drag($event)"></div>
      <div id="drag4" draggable @dragstart="drag($event)"></div>
      <div id="drag2" draggable @dragstart="drag($event)"></div>
      <div id="drag3" draggable @dragstart="drag($event)"></div>
    </div>

    <div id="text">
      <div id="div1" @drop="drop($event)" @dragover.prevent @dragenter.prevent></div>
      <div id="div2" @drop="drop($event)" @dragover.prevent @dragenter.prevent></div>
      <div id="div3" @drop="drop($event)" @dragover.prevent @dragenter.prevent></div>
      <div id="div4" @drop="drop($event)" @dragover.prevent @dragenter.prevent></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "activiteNatureMorte",
  mounted() {},
  methods: {
    drag(ev) {
      ev.dataTransfer.setData("text", ev.target.id);
    },

    drop(ev) {
      var data = ev.dataTransfer.getData("text");
      ev.target.appendChild(document.getElementById(data));
    },
  },
};
</script>

<style>
#text div {
  position: relative;
  height: 200px;
  width: 200px;
  border: 1px dashed gray;
  display: inline-block;
  margin: 0;
}

#text {
  width: 420px;
  height: 420px;
  background: black;
  border: 5px solid black;
  margin: auto;
}

#images {
  width: 100%;
}

#drag1,
#drag2,
#drag3,
#drag4 {
  height: 200px;
  width: 200px;
  cursor: move;
  display: inline-block;
}

#drag1 {
  background-image: url("/src/assets/1.png");
}

#drag2 {
  background-image: url("/src/assets/2.png");
}

#drag3 {
  background-image: url("/src/assets/3.png");
}

#drag4 {
  background-image: url("/src/assets/4.png");
}
</style>
