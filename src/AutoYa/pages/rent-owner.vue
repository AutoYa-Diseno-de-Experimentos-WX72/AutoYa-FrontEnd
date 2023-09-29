<script>
import Card from 'primevue/card';
export default {
  components: {
    Card,
  },
  data() {
    return {
      drawer: false,
      items: [
        { label: "Inicio", to: "/init-propie" },
        { label: "Registro", to: "/car-registration-owner" },
        { label: "Notificaciones", to: "/notifications" },
        { label: "Alquiler", to: "/rent-owner" },
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
          <router-link to="/profile-owner">
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
            <div style="grid-row: 1; grid-column: 2; text-align: right;">
              <p style="font-family: 'Poppins',sans-serif">Agiliza tus pagos afiliando tu cuenta de banco con MODO</p>
            </div>
            <div style="grid-row: 2; grid-column: 1; text-align: left;">
              <p style="font-family: 'Poppins',sans-serif">Ver autos compartidos</p>
            </div>
            <div style="grid-row: 2; grid-column: 2; text-align: right;">
              <button class="custom-button3">Afiliar cuenta de banco</button>
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
                  <h1 style="font-family: 'Poppins',sans-serif; color:#FF7A00">Estado: Pendiente</h1>
                  <button class="custom-button3">Eliminar publicación</button>
                </template>
              </Card>
            </div>
            <div style="flex: 20%; margin: 5px;">
              <Card>
                <template #title></template>
                <template #content>
                  <img src="https://www.autobild.es/sites/autobild.es/public/dc/fotos/Toyota_Prius_2023_02_0.jpg" alt="Toyota Prius" style="max-width: 100%; height: auto;" />
                  <p style="font-family: 'Poppins',sans-serif">Marca/Modelo: Toyota/Prius</p>
                  <h1 style="font-family: 'Poppins',sans-serif; color:#FF7A00">Estado: Pendiente</h1>
                  <button class="custom-button3">Eliminar publicación</button>
                </template>
              </Card>
            </div>
            <div style="flex: 20%; margin: 5px;">
              <Card>
                <template #title></template>
                <template #content>
                  <img src="https://www.autobild.es/sites/autobild.es/public/dc/fotos/Toyota_Prius_2023_02_0.jpg" alt="Toyota Prius" style="max-width: 100%; height: auto;" />
                  <p style="font-family: 'Poppins',sans-serif">Marca/Modelo: Toyota/Prius</p>
                  <h1 style="font-family: 'Poppins',sans-serif; color:#FF7A00">Estado: Pendiente</h1>
                  <button class="custom-button3">Eliminar publicación</button>
                </template>
              </Card>
            </div>
            <div style="flex: 20%; margin: 5px;">
              <Card>
                <template #title></template>
                <template #content>
                  <img src="https://www.autobild.es/sites/autobild.es/public/dc/fotos/Toyota_Prius_2023_02_0.jpg" alt="Toyota Prius" style="max-width: 100%; height: auto;" />
                  <p style="font-family: 'Poppins',sans-serif">Marca/Modelo: Toyota/Prius</p>
                  <h1 style="font-family: 'Poppins',sans-serif; color:#FF7A00">Estado: Pendiente</h1>
                  <button class="custom-button3">Eliminar publicación</button>
                </template>
              </Card>
            </div>
            <div style="flex: 20%; margin: 5px;">
              <Card>
                <template #title></template>
                <template #content>
                  <img src="https://www.autobild.es/sites/autobild.es/public/dc/fotos/Toyota_Prius_2023_02_0.jpg" alt="Toyota Prius" style="max-width: 100%; height: auto;" />
                  <p style="font-family: 'Poppins',sans-serif">Marca/Modelo: Toyota/Prius</p>
                  <h1 style="font-family: 'Poppins',sans-serif; color:#FF7A00">Estado: Pendiente</h1>
                  <button class="custom-button3">Eliminar publicación</button>
                </template>
              </Card>
            </div>
            <div style="flex: 20%; margin: 5px;">
              <Card>
                <template #title></template>
                <template #content>
                  <img src="https://www.autobild.es/sites/autobild.es/public/dc/fotos/Toyota_Prius_2023_02_0.jpg" alt="Toyota Prius" style="max-width: 100%; height: auto;" />
                  <p style="font-family: 'Poppins',sans-serif">Marca/Modelo: Toyota/Prius</p>
                  <h1 style="font-family: 'Poppins',sans-serif; color:#FF7A00">Estado: Pendiente</h1>
                  <button class="custom-button3">Eliminar publicación</button>
                </template>
              </Card>
            </div>
            <div style="flex: 20%; margin: 5px;">
              <Card>
                <template #title></template>
                <template #content>
                  <img src="https://www.autobild.es/sites/autobild.es/public/dc/fotos/Toyota_Prius_2023_02_0.jpg" alt="Toyota Prius" style="max-width: 100%; height: auto;" />
                  <p style="font-family: 'Poppins',sans-serif">Marca/Modelo: Toyota/Prius</p>
                  <h1 style="font-family: 'Poppins',sans-serif; color:#FF7A00">Estado: Pendiente</h1>
                  <button class="custom-button3">Eliminar publicación</button>
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

.custom-toolbar {
  border-bottom: 2px solid #ddd;
}

.container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.half-width-card {
  flex: 1;
  width: calc(50% - 1rem);
  margin: 0.5rem;
  box-sizing: border-box;
  max-width: 50%;
}

.half-width-card p,
.half-width-card pv-input,
.half-width-card Button {
  font-size: 1rem;
}

.input-grid {
  display: flex;
  justify-content: space-between;
}

.input-column {
  flex: 1;
  padding: 0 1rem;
  box-sizing: border-box;
}

.custom-button2 {
  width: 30%;
  height: 30px;
  margin: 20px;
  background-color: #FF7A00;
  color: white;
  font-family: 'Poppins', sans-serif;
  border: none;
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

.custom-button2:hover {
  background-color: rgba(255, 122, 0, 0.9);
}

.custom-button3:hover {
  background-color: #CCCCCC;
  color: black
}

.button-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.button-space {
  height: 20px;
}

@media (max-width: 50vmin) {
  .half-width-card {
    max-width: 100%;
  }

  .input-grid {
    flex-direction: column;
  }
}
</style>