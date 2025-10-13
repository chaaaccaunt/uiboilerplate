<script lang="ts" setup>
import { computed } from "vue";
import Main from "./layouts/Main.vue";
import Auth from "./layouts/Auth.vue";
import { useRoute } from "vue-router";

const route = useRoute();

const components = {
  main: Main,
  auth: Auth,
};

const layouts = computed(() => components[route.meta.layout]);
</script>

<template>
  <component :is=""></component>
</template>

<style lang="scss">
html,
body {
  height: 100%;
}
</style>
