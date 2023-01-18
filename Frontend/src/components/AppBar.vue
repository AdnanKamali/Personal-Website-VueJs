<template>
  <v-app-bar elevation="0" color="black" class="d-flex justify-end">
    <v-avatar class="ml-3">
      <v-img src="https://randomuser.me/api/portraits/women/85.jpg"> </v-img>
    </v-avatar>
    <v-app-bar-title class="d-flex justify-start"> I'm Adnan </v-app-bar-title>
    <v-app-bar-nav-icon icon="menu" @click.stop="drawer = !drawer" />
  </v-app-bar>
  <v-navigation-drawer location="right" color="black" v-model="drawer">
    <v-list>
      <v-list-item
        prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
        title="Adnan Kamali"
        subtitle="adnankamali1246@gmail.com"
      ></v-list-item>
      <v-divider />
      <v-list-item
        v-for="item in items"
        :key="item.icon"
        :title="item.title"
        :append-icon="item.icon"
        :value="item.value"
      />
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      items: [
        { title: "من کی هستم", value: "Dsh", icon: "person" },
        { title: "مهارت ها", value: "St", icon: "category" },
        { title: "ارتباط با من", value: "As", icon: "contacts" },
      ],
    };
  },
};
</script>