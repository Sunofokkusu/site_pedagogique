<template>
  <div>
    <div class="row">
      <v-zoomer style="width: 500px; height: 500px" class="col-md-4 col-12">
        <img
          :src="getImg(currentImgComputed)"
          style="object-fit: contain; width: 100%; height: 100%"
        />
      </v-zoomer>
      <div class="col-md-6 col-12">
        <div class="row">
          <h2 class="col-md-10 col-7">Sur la terre comme au ciel</h2>
          <div class="col-md-2 col-4" v-if="charged">
            <div class="switch">
              <label for="toggle">
                <input
                  id="toggle"
                  class="toggle-switch"
                  type="checkbox"
                  :checked="check"
                  @click="check = !check"
                />
                <div class="sun-moon"><div class="dots"></div></div>
                <div class="background">
                  <div class="stars1"></div>
                  <div class="stars2"></div>
                </div>
              </label>
            </div>
          </div>
        </div>
        <p>Armelle TULUNDA</p>
        <div class="row">
              <img class="pictog col-4" src="../../assets/pictos/nuit_jour.png" />
              <div class="col-8">
                <p class="falc">La nuit les lampadaires éclairent les rues<br/>Le jour le soleil éclaire les rues</p>
              </div>
            </div>
      </div>
    </div>
    <hr />
  </div>
</template>

<script>
import VueZoomer from "vue-zoomer/src";
export default {
  name: "activiteSurLaTerre",
  components: {
    VZoomer: VueZoomer.Zoomer,
  },
  data() {
    return {
      charged: false,
      check: false,
    };
  },
  methods: {
    getImg(img) {
      return require(`../../assets/photos/${img}`);
    },
  },
  mounted() {
    this.charged = true;
  },
  computed: {
    currentImgComputed() {
      let currentImg = "";
      if (this.check === false) {
        currentImg = "sur_la_terre_comme_au_ciel.jpg";
      } else {
        currentImg = "sur_la_terre_comme_au_ciel_jour.png";
      }
      return currentImg;
    },
  },
};
</script>

<style>
.credit {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2rem;
  font-family: arial;
}

.switch {
  position: relative;
  overflow: hidden;
  width: 7.5rem;
  height: 4rem;
  margin-top: 32px;
}

.switch input {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  opacity: 0;
}

.switch label {
  cursor: pointer;
}

.background {
  z-index: 1;
  position: absolute;
  width: 7.5rem;
  height: 4rem;
  border-radius: 2.5rem;
  border: 0.25rem solid #202020;
  background: linear-gradient(to right, #484848 0%, #202020 100%);
  transition: all 0.3s;
}
.stars1,
.stars2 {
  position: absolute;
  height: 0.4rem;
  width: 0.4rem;
  background: #ffffff;
  border-radius: 50%;
  transition: 0.3s all ease;
}

.stars1 {
  top: 6px;
  right: 23px;
}

.stars2 {
  top: 40px;
  right: 48px;
}

.stars1:after,
.stars1:before,
.stars2:after,
.stars2:before {
  position: absolute;
  content: "";
  display: block;
  height: 0.25rem;
  width: 0.25rem;
  background: #ffffff;
  border-radius: 50%;
  transition: 0.2s all ease;
}

.stars1:after {
  top: 8px;
  right: 20px;
}

.stars1:before {
  top: 18px;
  right: -12px;
}

.stars2:after {
  top: -8px;
  right: -16px;
}

.stars2:before {
  top: 6px;
  right: -26px;
}

.sun-moon {
  z-index: 2;
  position: absolute;
  left: 0;
  display: inline-block;
  height: 3rem;
  width: 3rem;
  margin: 0.5rem;
  background: #fffdf2;
  border-radius: 50%;
  transition: all 0.5s ease;

  /* Default to Moon */
  border: 0.25rem solid #dee2c6;
}

.sun-moon .dots {
  position: absolute;
  top: 3px;
  left: 23px;
  height: 1rem;
  width: 1rem;
  background: #efeedb;
  border: 0.25rem solid #dee2c6;
  border-radius: 50%;
  transition: 0.4s all ease;
}

.sun-moon .dots:after,
.sun-moon .dots:before {
  position: absolute;
  content: "";
  display: block;
  height: 0.25rem;
  width: 0.25rem;
  background: #efeedb;
  border: 0.25rem solid #dee2c6;
  border-radius: 50%;
  transition: 0.4s all ease;
}

.sun-moon .dots:after {
  top: -4px;
  left: -26px;
}

.sun-moon .dots:before {
  top: 18px;
  left: -10px;
}

/* Transition to Sun */

.switch input:checked ~ .sun-moon {
  left: calc(100% - 4rem);
  background: #f5ec59;
  border-color: #e7c65c;
  transform: rotate(-25deg);
}

.switch input:checked ~ .sun-moon .dots,
.switch input:checked ~ .sun-moon .dots:after,
.switch input:checked ~ .sun-moon .dots:before {
  background: #ffffff;
  border-color: #ffffff;
}

.switch input:checked ~ .sun-moon .dots {
  height: 1.5rem;
  width: 1.5rem;
  top: 0px;
  left: -20px;
  transform: rotate(25deg);
}

.switch input:checked ~ .sun-moon .dots:after {
  height: 0.65rem;
  width: 0.65rem;
  top: 2px;
  left: -12px;
}

.switch input:checked ~ .sun-moon .dots:before {
  height: 0.4rem;
  width: 0.4rem;
  top: 6px;
  left: 14px;
}

.switch input:checked ~ .background .stars1,
.switch input:checked ~ .background .stars2 {
  opacity: 0;
  transform: translateY(2rem);
}

.switch input:checked ~ .background {
  border: 0.25rem solid #78c1d5;
  background: linear-gradient(to right, #78c1d5 0%, #bbe7f5 100%);
}
</style>
