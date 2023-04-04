<template>
    <div class="ForgetPassword">
        <Preloader />
        <ForgetPasswordForm />
    </div>
</template>

<script>
import ForgetPasswordForm from '../components/Forget/ForgetPasswordForm.vue'
import Preloader from '../components/Preloader.vue'
export default {
  components: { ForgetPasswordForm, Preloader },
    name: "ForgetPassord",
    mounted() {
        document.title = "ADVAN | FORGET PASSWORD"
    },
}
</script>

<style scoped>
.ForgetPassword{
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
