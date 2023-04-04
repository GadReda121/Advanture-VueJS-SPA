<template>
    <div class="error">
        <!-- Preloader -->
        <Preloader />
        <!-- Icon -->
        <lord-icon
            src="https://cdn.lordicon.com/inrunzby.json"
            trigger="loop"
            delay="1500"
            colors="primary:#ffc738,secondary:#c71f16"
            style="width:250px;height:250px;">
        </lord-icon>
        <!-- Title -->
        <h1>{{ errorTitle.toUpperCase() }}</h1>
        <!-- Button -->
        <button>
            <a :href="BackHomeUrl">{{ BackHome }}</a>
        </button>
    </div>
</template>

<script>
import Preloader from "./Preloader.vue"

export default {
    name: "Error404",
    components: {
        Preloader
    },
    data() {
        return {
            errorTitle: "Not Found | 404",
            BackHome: "Back To Home",
            BackHomeUrl: "/"
        }
    },
    mounted() {
        document.title = "ADVAN | NOT FOUND (404)"
    },
}
</script>

<style scoped>
.error{
    height: 80vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #eee; 
}
h1{
    color:var(--main);
    font-weight: bolder;
}
button{
    background-color: var(--main);
    border:none;
    outline:none;
    padding:12px 30px;
}
button a{
    color:#fff;
    text-decoration: none;
}
</style>