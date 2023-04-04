<template>
    <div class="login">
        <Preloader />
        <!-- Form -->
        <LoginForm />
    </div>
</template>

<script>
import LoginForm from "../components/Login/LoginForm.vue";
import Preloader from '../components/Preloader.vue';

export default {
    data() {
        return {
            show: false
        }
    },
    components: {
        LoginForm,
        Preloader,
    },
    mounted() {
        document.title="ADVAN | LOGIN"
    },
}
</script>

<style scoped>
.login{
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