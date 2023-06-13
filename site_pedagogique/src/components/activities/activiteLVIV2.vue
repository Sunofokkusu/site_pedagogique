<template>
  <div>
    <div class="row">
      <img class="col-4" src="../../assets/photos/LVIV5.png" />
      <div class="col-6">
        <h2>LVIV</h2>
        <p>Viacheslav POLIAKOV</p>
        <p>
          Passe ta souris sur les carrés colorés pour découvrir leur couleur
          complémentaires!
        </p>
        <div class="align2">
          <div class="blLVIV">
            <q-tooltip anchor="center middle" self="center middle">
              <div class="mrLVIL"></div>
            </q-tooltip>
          </div>
          <div class="marronLVIV">
            <q-tooltip anchor="center middle" self="center middle">
              <div class="bleuuLVIV"></div>
            </q-tooltip>
          </div>
          <div class="rougeLVIV">
            <q-tooltip anchor="center middle" self="center middle">
              <div class="vertLVIV"></div>
            </q-tooltip>
          </div>
          <div class="bLVIV">
            <q-tooltip anchor="center middle" self="center middle">
              <div class="roujLVIV"></div>
            </q-tooltip>
          </div>
          <div class="roseLVIV">
            <q-tooltip anchor="center middle" self="center middle">
              <div class="vertCLVIV"></div>
            </q-tooltip>
          </div>
        </div>
      </div>
    </div>
    <hr />
  </div>
</template>

<script>
export default {
  name: "activiteLVIV",
  methods: {},
};
</script>

<style>
.align2 {
  display: flex;
  margin-left: 5%;
}
.blLVIV {
  background-color: #3f84ae;
  width: 10vw;
  height: 10vh;
  border: 1px solid black;
}
.mrLVIL {
  background-color: #ae693f;
  width: 9vw;
  height: 9vh;
}
.marronLVIV {
  background-color: #deb17e;
  width: 10vw;
  height: 10vh;
  border: 1px solid black;
  margin-left: 15px;
}
.bleuuLVIV {
  background-color: #7eabde;
  width: 9vw;
  height: 9vh;
  border: 1px solid black;
}
.rougeLVIV {
  background-color: #d80e40;
  width: 10vw;
  height: 10vh;
  border: 1px solid black;
  margin-left: 15px;
}
.vertLVIV {
  background-color: #0ed8a6;
  width: 9vw;
  height: 9vh;
  border: 1px solid black;
}
.bLVIV {
  background-color: #00acd5;
  width: 10vw;
  height: 10vh;
  border: 1px solid black;
  margin-left: 15px;
}
.roujLVIV {
  background-color: #d52900;
  width: 9vw;
  height: 9vh;
  border: 1px solid black;
}
.roseLVIV {
  background-color: #ea9cc5;
  width: 10vw;
  height: 10vh;
  border: 1px solid black;
  margin-left: 15px;
}
.vertCLVIV {
  background-color: #9ceac1;
  width: 9vw;
  height: 9vh;
  border: 1px solid black;
}
</style>
