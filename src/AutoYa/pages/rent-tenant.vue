<script>
import Card from "primevue/card";

export default {
  components: {
    Card,
  },
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
    };
  },
};
</script>

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

  <div class="p-grid">
    <div class="p-col-12 p-md-6">
      <Card>
        <template #title></template>
        <template #content>
          <div style="display: grid; grid-template-rows: auto auto; grid-template-columns: 1fr 1fr;">
            <div style="grid-row: 1; grid-column: 1; text-align: left;">
              <h1 style="font-family: 'Poppins',sans-serif; color:#FF7A00">ALQUILER</h1>
            </div>
            <div style="grid-row: 2; grid-column: 1; text-align: left;">
              <p style="font-family: 'Poppins',sans-serif">Autos alquilados actualmente</p>
            </div>
          </div>
        </template>
      </Card>
    </div>
    <div class="p-col-12 p-md-6">
      <Card>
        <template #title></template>
        <template #content>
          <div style="display: flex; flex-wrap: wrap;">
            <div style="flex: 20%; margin: 5px;">
              <Card>
                <template #title></template>
                <template #content>
                  <img src="https://www.autobild.es/sites/autobild.es/public/dc/fotos/Toyota_Prius_2023_02_0.jpg" alt="Toyota Prius" style="max-width: 100%; height: auto;" />
                  <p style="font-family: 'Poppins',sans-serif">Marca/Modelo: Toyota/Prius</p>
                  <p style="font-family: 'Poppins',sans-serif">Propietario: Alonso Robles</p>
                  <p style="font-family: 'Poppins',sans-serif">Celular: +51 999 999 999</p>
                  <p style="font-family: 'Poppins',sans-serif">Fecha de inicio de contrato: 28/09/2023</p>
                  <p style="font-family: 'Poppins',sans-serif">Fecha de finalizacion de contrato: 28/10/2023</p>
                  <h2 style="font-family: 'Poppins',sans-serif; color:#FF7A00">Solicitud aceptada</h2>
                  <button class="custom-button3">Pagar</button>
                </template>
              </Card>
            </div>
            <div style="flex: 20%; margin: 5px;">
              <Card>
                <template #title></template>
                <template #content>
                  <img src="https://www.autobild.es/sites/autobild.es/public/dc/fotos/Toyota_Prius_2023_02_0.jpg" alt="Toyota Prius" style="max-width: 100%; height: auto;" />
                  <p style="font-family: 'Poppins',sans-serif">Marca/Modelo: Toyota/Prius</p>
                  <p style="font-family: 'Poppins',sans-serif">Propietario: Alonso Robles</p>
                  <p style="font-family: 'Poppins',sans-serif">Celular: +51 999 999 999</p>
                  <p style="font-family: 'Poppins',sans-serif">Fecha de inicio de contrato: 28/09/2023</p>
                  <p style="font-family: 'Poppins',sans-serif">Fecha de finalizacion de contrato: 28/10/2023</p>
                  <h2 style="font-family: 'Poppins',sans-serif; color:#FF7A00">Solicitud aceptada</h2>
                  <button class="custom-button3">Pagar</button>
                </template>
              </Card>
            </div>
            <div style="flex: 20%; margin: 5px;">
              <Card>
                <template #title></template>
                <template #content>
                  <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%;">
                    <button class="custom-button3">Alquilar un auto nuevo</button>
                  </div>
                </template>
              </Card>
            </div>
          </div>
        </template>
      </Card>
    </div>
  </div>

</template>

<style>
.custom-bg {
  background-color: white;
}

.custom-button {
  background-color: white;
  color: #14131B;
}

.custom-button:hover,
.custom-button:focus {
  background-color: #FF7A00 !important;
  color: white !important;
}

.custom-button3 {
  height: 30px;
  margin: 20px;
  background-color: black;
  color: white;
  font-family: 'Poppins', sans-serif;
  border: none;
  min-width: auto;
}

.custom-toolbar {
  border-bottom: 2px solid #ddd;
}
</style>