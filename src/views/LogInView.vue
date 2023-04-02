<template>
    <div class="login mb-5">
        <!-- Form -->
        <LoginForm />
    </div>
</template>

<script>
import LoginForm from "../components/Login/LoginForm.vue";
export default {
    data() {
        return {
            show: false
        }
    },
    components: {
        LoginForm,
    }
}
</script>

<style scoped>
.login{
    margin-top:100px;
}
</style>