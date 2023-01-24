<template>
  <v-row justify="space-between" class="mt-4 mb-2">
    <v-col>
      <h3>{{ label }}</h3>
    </v-col>
    <v-col align="end">
      <p>{{ percent }}%</p>
    </v-col>
  </v-row>

  <div class="parent">
    <div id="test" class="child" :style="isActive?`width: ${percent}%`:''" :class="{'active':isActive}"
    ></div>
  </div>

</template>

<script>
export default {
  props: ["label", "percent"],
  data() {
    return {
      isActive: false,
    }
  },

  methods: {
    scrollFunc() {

      const scrollY = window.scrollY;
      const bodyHeight = document.body.scrollHeight;

      if (scrollY >= bodyHeight / 4) {
        this.isActive = true;
        window.removeEventListener("scroll", this.scrollFunc);
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.scrollFunc);
  }

}
</script>

<style scoped>
.parent {
  width: 100%;
  background-color: rgba(98, 0, 238, 0.12);
  height: 10px;
}

.child {
  width: 0;
  background-color: #6200ee;
  height: 100%;
}

.active {
  transition: width 3s ease-out;
}

</style>
