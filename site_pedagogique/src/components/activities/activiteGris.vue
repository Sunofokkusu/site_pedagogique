<template>
  <div>
    <section class="grisbg">
      <h2>A toi de jouer <font-awesome-icon icon="fa-solid fa-gamepad" /></h2>
      <p class="def">
        Le gris ne peut pas vraiment se mélanger avec d'autres couleurs...
        Découvre plutôt certaines de ses nuances.
      </p>
      <div class="row">
        <div class="col-4 nuanceGris"></div>
      </div>
      <div class="nomG"></div>
      <button class="boutton" @click="changeGris">Suivante</button>
    </section>
  </div>
</template>

<script>
export default {
  name: "activiteGris",
  data() {
    return {
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
    document.querySelector(".nuanceGris").style.backgroundColor =
      this.nuances[this.index];
    document.querySelector(".nomG").innerHTML = this.noms[this.index];
  },
  methods: {
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
.nuanceGris {
  height: 20vh !important;
  border: 1px solid black;
  margin-bottom: 10px;
}
.nomG {
  margin-bottom: 5px;
}
</style>
