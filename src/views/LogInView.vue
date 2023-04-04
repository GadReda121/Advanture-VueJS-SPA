<template>
    <div class="login mb-5">
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
    margin-top:100px;
}
</style>