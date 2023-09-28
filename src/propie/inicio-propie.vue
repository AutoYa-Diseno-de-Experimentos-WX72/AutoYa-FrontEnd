<template>
  <div>

    <div class="body-container">
      <img src="../../public/cuerpo.jpg" alt="Imagen de fondo" class="background-image">

      <div class="floating-card">
        <h1 class="orange-text">Convierte tu auto</h1>
        <h1 class="black-text">en dinero extra</h1>

        <div class="input-button-container">
          <div class="input-container">
            <input type="text" id="ubicacion" placeholder="Surco - Lima, Perú">
            <button class="share-button">Comparte tu auto</button>
          </div>
        </div>
      </div>
    </div>
    <div class="notifications-section">
      <h2 class="section-title">Notificaciones</h2>
      <div class="notification-card">
        <p class="notification">Piero Torres Arias envió una solicitud de alquiler del vehiculo Toyota Prius</p>
        <a href="#" class="view-notification">Ver Notificación</a>
      </div>
      <div class="notification-card">
        <p class="notification">Jorge Paredes Cano envió una solicitud de alquiler del vehiculo Toyota Prius</p>
        <a href="#" class="view-notification">Ver Notificación</a>
      </div>
    </div>
    <RouterView />
  </div>
</template>

<script>
export default{
  name: "Inicio",
};
</script>


<style scoped>
  .body-container {
    margin: 20px;
    position: relative;
    height: 500px;
  }
  .background-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    opacity: 0.9;
  }
  .floating-card {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -55%);
    background-color: white;
    padding: 20px 20px 20px 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    text-align: center;
    border-radius: 15px;
    padding-right: 50px;
    padding-left: 50px;

  }
  .orange-text {
    color: orange;
    font-size: 50px;
    font-weight: bold;
    margin: 0;
    font-family: "Montserrat Thin";
    white-space: nowrap;
  }
  .black-text {
    color: black;
    font-size: 50px;
    font-weight: bold;
    margin: 0;
    font-family: "Montserrat Thin";
    white-space: nowrap;
  }
  .input-button-container {
    display: flex;
    align-items: center;
  }
  .input-container {
    display: flex;
    grid-gap: 40px;
    margin-top: 40px;
  }
  input {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 2px rgba(0, 0, 0, 0.1);
    padding-right: 40px;
  }
  .share-button {
    background-color: orange;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
    font-size: 18px;
    white-space: nowrap;
    padding-right: 50px;
    padding-left: 50px;
  }

  .notifications-section {
    display: grid;
    grid-template-rows: 1fr;
    background-color: white;
    padding: 1px 60px 60px 60px;
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
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  .notification-card {
    background-color: white;
    padding: 10px;
    margin-top: 10px;
    border-radius: 10px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .notification-card p {
    margin: 0;
  }
  .view-notification {
    background-color: orange;
    color: white;
    padding: 5px 10px;
    border-radius: 5px;
    text-decoration: none;
  }
</style>