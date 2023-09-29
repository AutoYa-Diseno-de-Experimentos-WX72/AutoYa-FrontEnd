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
          <router-link to="/profile-tenant">
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

  <div class="vertical-container">
    <div class="floating-card">
      <h1 class="orange-text">Alquila autos</h1>

      <div class="input-button-container">
        <div class="input-group">
          <p class="black-text-body">Ubicacion</p>
          <input type="text" id="ubicacion" placeholder="Surco - Lima, Perú">
        </div>

        <div class="input-group">
          <p class="black-text-body">Precio</p>
          <input type="text" id="precio" placeholder="S/800 x mes">
        </div>

        <div class="input-group">
          <p class="black-text-body">Tiempo de alquiler</p>
          <input type="text" id="tiempo" placeholder="1 mes">
        </div>

        <div class="input-group">
          <p class="black-text-body">Marca</p>
          <input type="text" id="marca" placeholder="TOYOTA">
        </div>

        <div class="input-group">
          <p class="black-text-body">Modelo</p>
          <input type="text" id="modelo" placeholder="PRIUS">
        </div>

        <div class="input-group">
          <p class="black-text-body">Clase</p>
          <input type="text" id="clase" placeholder="ECON'OMICA">
        </div>

        <div class="input-group">
          <p class="black-text-body">Transmision</p>
          <input type="text" id="transmision" placeholder="AUTOMATICA">
        </div>
      </div>
      <div class="input-container">
        <button class="search-button" @click="buscarAuto">Buscar</button>

      </div>

    </div>
    <div class="floating-card2">
      <div class="card-content">
        <img src="https://cdn.pixabay.com/photo/2017/03/27/14/56/auto-2179220_1280.jpg" alt="Imagen del vehículo" class="vehicle-image">
        <div class="button-container">
          <button class="Contract-button">Ver Contrato de Alquiler</button>

          <!-- Botón para ver disponibilidad -->
          <button class="available-button">Disponibles</button>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default{
  name: "InicioArrenda",
  data() {
    return {
      drawer: false,
      items: [
        { label: "Inicio", to: "/home" },
        { label: "Buscar Autos", to: "/car-search-tenant" },
        { label: "Mantenimiento", to: "/manteinance-tenant" },
        { label: "Alquiler", to: "/rent-tenant" },
        { label: "Solicitudes", to: "/requests-tenant" },
      ],
      cardCount: 4,
    };
  },
  methods: {
    rotateCarousel(step) {
      const cardContainer = document.querySelector(".carousel-cards");
      const hiddenCards = document.querySelectorAll(".hidden-card");
      const visibleCards = cardContainer.querySelectorAll(".card:not(.hidden-card)");

      const totalVisibleCards = visibleCards.length;
      const totalHiddenCards = hiddenCards.length;

      const newCardCount = this.cardCount + step;

      if (newCardCount >= 1 && newCardCount <= totalVisibleCards + totalHiddenCards) {
        this.cardCount = newCardCount;

        hiddenCards.forEach((card) => {
          card.style.display = "none";
        });

        for (let i = 0; i < this.cardCount; i++) {
          if (visibleCards[i]) {
            visibleCards[i].style.display = "flex";
          }
        }
      }
    },
  },
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
  padding: 20px 50px 20px 50px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  text-align: center;
  border-radius: 15px;

}
.orange-text {
  color: #FF7A00;
  font-size: 50px;
  font-weight: bold;
  margin: 0;
  font-family: 'Poppins', sans-serif;
  white-space: nowrap;
}
.black-text {
  color: black;
  font-size: 50px;
  font-weight: bold;
  margin: 0;
  font-family: 'Poppins', sans-serif;
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
  padding: 10px 40px 10px 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px rgba(0, 0, 0, 0.1);
}
.search-button {
  background-color: black;
  color: white;
  padding: 10px 70px 20px 70px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  font-size: 18px;
  white-space: nowrap;
}
.black-text-body{
  color: black;
  font-size: 20px;
  font-weight: bold;
  margin: 0;
  font-family: 'Poppins', sans-serif;
  white-space: nowrap;
  text-align: center;
  padding: 10px;
}
.orange-text-body{
  color: #FF7A00;
  font-size: 18px;
  margin: 0;
  font-family: 'Poppins', sans-serif;
  white-space: nowrap;
  text-align: center;
  padding: 10px;
}

.card-carousel-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  padding-right: 50px;
  padding-left: 50px;
}
.card-carousel {
  display: flex;
  align-items: center;
  margin-top: 20px;
}
.hidden-card{
  display: none;
}
.left-arrow {
  margin-right: 10px;
}
.right-arrow {
  margin-left: 10px;
}
.carousel-cards {
  display: flex;
  overflow-x: hidden;
}
.card {
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #fff;
  flex: 1;
  max-width: 300px;
  margin:10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}
.card img {
  max-height: 70%;
  object-fit: contain;
  margin-bottom: 10px;
  width: 100%;
  border-radius: 20px;
}
.card-title {
  font-size: 16px;
  margin-top: 10px;
  color: black;

}
.card-link {
  text-decoration: none;
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
}



</style>