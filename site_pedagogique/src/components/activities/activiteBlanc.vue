<template>
  <div>
    <section class="grisbg">
      <h2>A toi de jouer <font-awesome-icon icon="fa-solid fa-gamepad" /></h2>
      <p class="def">Observe cette image animée, vois-tu comment le blanc est fabriqué?</p>
      <img
        class="synthese"
        src="../../assets/white.gif"
        alt="synthèse additive"
      />
    </section>
  </div>
</template>

<script>
export default {
  name: "activiteBlanc",
  methods: {},
};
</script>

<style>
.synthese {
  width: 30vw;
}
</style>
