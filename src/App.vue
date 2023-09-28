<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name:"App",
  components: {
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
