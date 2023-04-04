<template>
    <Preloader />
    <ResetPasswordForm />
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
