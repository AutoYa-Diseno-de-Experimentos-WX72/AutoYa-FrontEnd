<script>
export default {
  data(){
    return {
      user: {
        name: 'Name of the user',
        lastName: 'LastName of the user',
        photo: 'Url of the photo',
        phone: 'Number of the user',
        email: 'Email of the user',
        numberofcars: 'Quantity of cars'
      },
      drawer: false,
      items: [
        { label: "Inicio", to: "/home" },
        { label: "Registro Vehicular", to: "/car-registration-owner" },
        { label: "Notificaciones", to: "/about" },
        { label: "Alquiler", to: "/rent-tenant" },
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
  <div class="profile-image">
    <img :src="user.photo" alt="Profile Picture" /><br>
    <pv-button>Cambiar Foto de Perfil</pv-button>
  </div>
  <div class="title">
    <h1>Perfil del Usuario</h1>
    <p>Propietario</p>
  </div>
  <div class="owner-profile">
    <div class="profile-info">
      <h2>Nombres: </h2>
      <p>{{ user.name }}</p><br>
      <h2>Apellidos: </h2>
      <p>{{user.lastName}}</p><br>
      <h2>Celular: </h2>
      <p>{{user.phone}}</p><br>
      <h2>Correo: </h2>
      <p>{{user.email}}</p><br>
      <h2>Can. de veh. compartidos: </h2>
      <p>{{user.numberofcars}}</p>
    </div>
  </div>
  <div class="buttons">
    <pv-button>Actualizar Datos</pv-button><br>
    <pv-button>Cerrar Sesión</pv-button>
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

.owner-profile {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.profile-info {
  flex: 1;
  padding: 20px;
}

h2, p {
  display: inline;
  margin: 0;
}

.buttons {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.buttons pv-button {
  margin: 10px 0;
}

.profile-image {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 20px;
}

.profile-image img {
  max-width: 100%;
  border: 2px solid #ccc;
  border-radius: 10px;
}
</style>