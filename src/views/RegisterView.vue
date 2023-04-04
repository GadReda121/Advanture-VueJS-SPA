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

<style scoped>
.Register{
    background-image: url(../../public/Home/bg.png);
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    position: relative;
    top:0;
    /* height:100vh; */
    width:100%;
    padding: 1px 0px 50px 0px;
}
</style>