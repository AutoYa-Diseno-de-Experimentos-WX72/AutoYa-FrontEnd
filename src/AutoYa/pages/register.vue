<script setup>
import { useLayout } from '@/AutoYa/composables/layout'
import { ref, computed } from 'vue';
import AppConfig from '@/AutoYa/AppConfig.vue';

const { layoutConfig } = useLayout();
const email = ref('');
const password = ref('');
const checked = ref(false);

const logoUrl = computed(() => {
    return `layout/images/${layoutConfig.darkTheme.value ? 'logo-white' : 'logo-dark'}.svg`;
});

const nombres = ref('');
const apellidos = ref('');
const fechaNacimiento = ref('');
const telefono = ref('');
const correo = ref('');
</script>

<template>
    <div class="surface-ground flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden">
        <div class="flex flex-column align-items-center justify-content-center">
            <img data-v-f5a3c044="" src="https://i.postimg.cc/vmZh3LGv/logotransparent-26-06.png" alt="Sakai logo" class="mb-5 w-6rem flex-shrink-0">            
            <div style="border-radius: 56px; padding: 0.3rem; background: linear-gradient(180deg, #FF7A00 10%, rgba(33, 150, 243, 0) 30%)">
                <div class="w-full surface-card py-8 px-5 sm:px-8" style="border-radius: 53px">
                    <div class="text-center mb-5">
                        <div class="text-900 text-3xl font-medium mb-3" style="font-family: 'Poppins', sans-serif;">Bienvenido a AutoYa!</div>
                        <span class="text-600 font-medium" style="font-family: 'Poppins', sans-serif;">Inicia sesión para continuar</span>
                    </div>

                    <div>
                        <label for="nombres" class="block text-900 text-xl font-medium mb-2" style="font-family: 'Poppins', sans-serif;">Nombres</label>
                        <pv-input-text id="nombres" type="text" placeholder="Ingrese sus nombres" class="w-full md:w-30rem mb-5" style="padding: 1rem" v-model="nombres" />

                        <label for="apellidos" class="block text-900 text-xl font-medium mb-2" style="font-family: 'Poppins', sans-serif;">Apellidos</label>
                        <pv-input-text id="apellidos" type="text" placeholder="Ingrese sus apellidos" class="w-full md:w-30rem mb-5" style="padding: 1rem" v-model="apellidos" />

                       
                        <label for="correo" class="block text-900 text-xl font-medium mb-2" style="font-family: 'Poppins', sans-serif;">Correo electrónico</label>
                        <pv-input-text id="correo" type="text" placeholder="Ex. mail@abc.com" class="w-full md:w-30rem mb-5" style="padding: 1rem" v-model="correo" />

                        <label for="password1" class="block text-900 font-medium text-xl mb-2" style="font-family: 'Poppins', sans-serif;">Contraseña</label>
                        <input class="p-inputtext p-component p-password-input w-full" data-pc-name="inputtext" data-pc-section="input" type="password" aria-controls="pv_id_9_panel" aria-expanded="false" aria-haspopup="true" placeholder="Password" style="padding: 1rem;">
                        
                        <div class="flex align-items-center justify-content-between mb-5 gap-5">
                            <div class="flex align-items-center">
                                <Checkbox v-model="checked" id="rememberme1" binary class="mr-2"></Checkbox>
                            </div>
                        </div>
                     
                        <router-link to="/login">
                            <pv-button label="Registrarse" class="w-full p-3 text-xl"></pv-button>
                        </router-link>

            
                    </div>
                </div>
            </div>
        </div>
    </div>
    <AppConfig simple />
</template>

<style scoped>

.text-medium {
    font-family: 'Poppins', sans-serif;
}

.p-inputtext,
.inputtext {
    font-family: 'Poppins', sans-serif;
}

.pi-eye {
    transform: scale(1.6);
    margin-right: 1rem;
}

.pi-eye-slash {
    transform: scale(1.6);
    margin-right: 1rem;
}

.p-button {
    color: black;
    color: #ffffff;
    background: #FF7A00;
    border: 1px solid black;
    padding: 0.75rem 1.25rem;
    font-size: 1rem;
    transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
    border-radius: 6px;
}

.TipoLoginUsuario{
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
}

.TipoLoginUsuario .p-button {
    background-color: black;
    color: white;
}

</style>
