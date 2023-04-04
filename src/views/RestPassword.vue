<template>
    <div class="ResetPassword">
        <Preloader />
        <ResetPasswordForm />
    </div>
</template>

<script>
import ResetPasswordForm from '../components/RestPassword/RestPasswordForm.vue'
import Preloader from '../components/Preloader.vue'

export default {
    components: { ResetPasswordForm, Preloader },
    name: "ForgetPassord",
    mounted() {
        document.title = "ADVAN | RESET PASSWORD"
    },
}
</script>

<style scoped>
.ResetPassword{
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