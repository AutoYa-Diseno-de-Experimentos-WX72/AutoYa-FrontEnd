<template>
  <div id="app">
    <pv-toolbar class="custom-toolbar">
      <template #start>
        <img src="/public/favicon.ico" alt="Logo">
      </template>
      <template #end>
        <div class="flex-column">
          <router-link
              v-for="item in items"
              :to="item.to"
              custom
              v-slot="{ navigate, href }"
              :key="item.label"
          >
            <pv-button
                class="p-button-text text-black-alpha-90"
                :href="href"
                @click="navigate"
                :class="{ 'active-button': $route.path === item.to }"
            >{{ item.label }}</pv-button>
          </router-link>
          <router-link
              to="/perfil"
              custom
              v-slot="{ navigate, href }"
          >
            <pv-button
                class="p-button-text text-black-alpha-90 profile-button"
                :href="href"
                @click="navigate"
            >
              <i class="pi pi-user"></i>
            </pv-button>
          </router-link>
        </div>
      </template>
    </pv-toolbar>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name:"App",
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
.custom-toolbar {
  background-color: white;
  padding: 10px;
  border: none;
  position: absolute;;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.7);
}
.custom-toolbar .p-button {
  background-color: white;
  color: black;
  border: 1px solid black;
  margin: 0 5px;
}
.p-button-text{
  border-radius: 20px;
}
.profile-button {
  padding: 10px 11px;
  border-radius: 20px;
}
.custom-toolbar .active-button {
  background-color: orange;
  color: white;
  border: orange;
}

</style>