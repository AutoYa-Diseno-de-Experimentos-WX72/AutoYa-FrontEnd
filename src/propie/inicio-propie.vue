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
    <RouterView />
  </div>
</template>

<script>
import ToolbarPropie from "@/propie/toolbar-propie.vue";
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
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  text-align: center;
  border-radius: 15px;
}
.orange-text {
  color: orange;
  font-size: 50px;
  font-weight: bold;
  margin: 0;
}
.black-text {
  color: black;
  font-size: 50px;
  font-weight: bold;
  margin: 0;
}
.input-button-container {
  display: flex;
  align-items: center;
}
.input-container {
  display: flex;
  grid-template-rows: 1fr;
  grid-gap: 10px;
  margin-top: 20px;
}
input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px rgba(0, 0, 0, 0.1);
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
}
</style>