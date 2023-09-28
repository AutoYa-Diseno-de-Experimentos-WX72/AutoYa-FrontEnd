<script>
import ProfileOwner from "@/AutoYa/pages/profile-owner.vue";
import ProfileTenant from "@/AutoYa/pages/profile-tenant.vue";
import RequestsTenant from "@/AutoYa/pages/requests-tenant.vue";

export default {
  components: {RequestsTenant, ProfileTenant, ProfileOwner},
  data() {
    return {
      drawer: false,
      items: [
        { label: "Home", to: "/home" },
        { label: "About", to: "/about" },
        { label: "Profile", to: "/profile-user"},
      ],
    };
  },
};
</script>
<template>

  <RouterView />
</template>
