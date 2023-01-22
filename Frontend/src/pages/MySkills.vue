<template>
  <v-card class="ma-auto mt-3" :class="breakePoint('w-100', 'w-100')">
    <v-card-title>
      ― SKILLS
    </v-card-title>
    <v-card-text>
      <ProgressBar label="Label One" :percent="60" />
      <ProgressBar label="Label Two" :percent="26" />
    </v-card-text>
  </v-card>
</template>

<script>
import ProgressBar from "../components/base/ProgressBar.vue";

export default {
  components: {
    ProgressBar,
  },
  inject: ["breakePoint"],


}
</script>