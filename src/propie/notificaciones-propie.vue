<template>
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
};
</script>

<style scoped>
.notifications-section {
  display: grid;
  grid-template-rows: 1fr;
  background-color: white;
  padding: 1px 30px 30px 30px;
  margin-top: 20px;
  font-family: "Montserrat Thin";
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
  color: orange;
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
  color: orange;
  padding: 5px 10px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  margin-right: 20px;
}
</style>