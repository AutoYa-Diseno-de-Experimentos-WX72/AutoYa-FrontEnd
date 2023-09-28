<script>
export default {
  data() {
    return {
      drawer: false,
      items: [
        { label: "Home", to: "/home" },
        { label: "About", to: "/about" },
        { label: "Registro", to: "/car-registration-owner" },
      ],
    };
  },
};
</script>
<template>
  <RouterView />
</template>
