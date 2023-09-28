<script setup>
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
    };
  },
};
</script>

<template>
  <div class="user-profile">
    <img :src="user.photo" alt="Profile Picture" />
    <h2>Nombres:</h2>
    <p>{{ user.name }}</p>
    <h2>Apellidos:</h2>
    <p>{{user.lastName}}</p>
    <h2>Celular</h2>
    <p>{{user.phone}}</p>
    <h2>Correo:</h2>
    <p>{{user.email}}</p>
    <h2>Can. de veh. compartidos:</h2>
    <p>{{user.numberofcars}}</p>
  </div>
</template>

<style scoped>

</style>