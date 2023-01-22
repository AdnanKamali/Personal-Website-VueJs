<template>
  <v-card :class="breakePoint('w-100', 'w-100')" class="ma-auto">
    <v-card-title>
      ― MY BACKGROUND
    </v-card-title>
    <v-card-text class="text-h6" style="line-height: 2">
      I’ve gone through a number of phases in my career, and each of them has informed my current work ethos and
      philosophy. I have excelled in a number of project management roles in diverse industries, and believe that my
      number one asset is my ability to adapt to any challenge that is thrown my way.
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  inject: ["breakePoint"],
}

</script>