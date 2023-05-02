<template>
    <div>
      <h1 class="red center">ici</h1>
      <div class="menuActions">
        <div class="homeP" @click="homePage">Retour à la page d'accueil</div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "pageAccueil",
    methods: {
      /**
       * Méthode qui renvoie à la page d'accueil
       * @return inutilisable
       */
      homePage() {
        this.$router.push({ name: "PageAccueil" });
      },
    },
  };
  </script>
  
  <style>
  .center{
      text-align: center;
  }
  </style>
  