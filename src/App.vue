<template>
  <div id="app">
    <ToolbarPropie :items="items" :current-path="$route.path"/>
    <router-view></router-view>
  </div>
</template>

<script>
import ToolbarPropie from "@/propie/toolbar-propie.vue";
export default {
  name:"App",
  components: {
    ToolbarPropie,
  },
  data() {
    return {
      drawer: false,
      items: [
        { label: "INICIO", to: "/inicio" },
        { label: "REGISTRO VEHICULAR", to: "/registro_vehicular" },
        { label: "NOTIFICACIONES", to: "/notificaciones" },
        { label: "ALQUILER", to: "/alquiler" },
      ],
    };
  },
};
</script>

<style scoped>

</style>