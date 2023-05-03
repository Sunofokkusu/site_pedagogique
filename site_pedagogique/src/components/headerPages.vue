<template>
    <div class="topPage">
      <img class="logo" src="../assets/logoWHT.png" @click="this.$router.push({ name: 'PageAccueil' })"/>
      <div class="link" @click="this.$router.push({ name: 'PageAccueil' })">Retour à l'accueil</div>
    </div>
  </template>
  
  <script>
  export default {
    name: "headerPages",
  };
  </script>
  
  <style>
  body {
    margin: 0 !important;
  }
  .topPage{
    display: flex;
    position: fixed;
    align-items: center;
    justify-content: center;
    top:0;
    width: 100vw;
    background-color: black;
    color: white;
    height: 50px;
  }
  .logo{
    width: 30px;
    cursor: pointer;
  }
  .link{
    cursor: pointer;
  }
  </style>
  