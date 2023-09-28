<template>
  <pv-toast />
  <header>
    <pv-toolbar class="custom-bg custom-toolbar">
      <template #start>
        <img
            src="https://i.postimg.cc/vmZh3LGv/logotransparent-26-06.png"
            alt="Logo"
            style="height: 40px; margin-right: 20px;"
        />
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
                class="custom-button"
                :href="href"
                @click="navigate"
            >
              {{ item.label }}
            </pv-button>
          </router-link>
          <router-link to="/home">
            <!-- Agrega la imagen a la derecha -->
            <img
                src="https://i.postimg.cc/Fs9Z3g3V/usuario-1.png"
                alt="Usuario"
                style="height: 30px; margin-left: 20px; cursor: pointer;"
            />
          </router-link>
        </div>
      </template>
    </pv-toolbar>
  </header>
  <div class="notifications-section">
    <h2 class="section-title">Notificaciones</h2>
    <div class="notification-card">
      <p class="notification">Piero Torres Arias envió una solicitud de alquiler del vehiculo Toyota Prius</p>
      <a href="#" class="view-notification">Ver Solicitud</a>
    </div>
    <div class="notification-card">
      <p class="notification">Jorge Paredes Cano envió una solicitud de alquiler del vehiculo Toyota Prius</p>
      <a href="#" class="view-notification">Ver Solicitud</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotificacionesPropie",
  data() {
    return {
      drawer: false,
      items: [
        { label: "Inicio", to: "/home" },
        { label: "Registro", to: "/car-registration-owner" },
        { label: "Notificaciones", to: "/notifications" },
        { label: "Alquiler", to: "/rent-tenant" },
      ],
    };
  },
};
</script>

<style scoped>
.notifications-section {
  display: grid;
  grid-template-rows: 1fr;
  background-color: white;
  padding: 1px 30px 30px 30px;
  margin-top: 20px;
  font-family: 'Poppins', sans-serif;
}
.notification{
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 60%;
  font-weight: bold;
  padding-left: 30px;
}
.section-title {
  margin-top: 90px;
  font-size: 35px;
  font-weight: bold;
  color: #FF7A00;
}
.notification-card {
  padding: 20px;
  margin-top: 10px;
  border-radius: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fafafa;
  margin-bottom: 5px;
}
.notification-card p {
  margin: 0;
}
.view-notification {
  color: #FF7A00;
  padding: 5px 10px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  margin-right: 20px;
}
</style>