<template>
    <Preloader />
    <ForgetPasswordForm />
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
