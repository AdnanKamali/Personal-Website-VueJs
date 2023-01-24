<template>
  <v-card class="ma-auto mt-3 w-100" >
    <v-card-title>
      ― SKILLS
    </v-card-title>
    <v-card-text>
      <ProgressBar label="Python" :percent="70" />
      <ProgressBar label="Flask" :percent="65" />
      <ProgressBar label="Dart" :percent="65" />
      <ProgressBar label="Flutter" :percent="75" />
      <ProgressBar label="JavaScript" :percent="40" />
      <ProgressBar label="Vue Js" :percent="50" />
    </v-card-text>
  </v-card>
</template>

<script>
import ProgressBar from "../components/base/ProgressBar.vue";

export default {
  components: {
    ProgressBar,
  },
}
</script>