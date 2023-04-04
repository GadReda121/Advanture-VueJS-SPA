<template>
    <div class="Register">
        <Preloader />
        <!-- Register Form -->
        <RegisterForm />
    </div>
</template>

<script>
import Preloader from '../components/Preloader.vue';
import RegisterForm from '../components/Register/RegisterForm.vue';
export default {
    name: "Register",
    components: {
    RegisterForm,
    Preloader
    },
    mounted() {
        document.title = "ADVAN | CREATE ACCOUNT"
    },
}
</script>