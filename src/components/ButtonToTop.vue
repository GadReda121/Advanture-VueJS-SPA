<template>
    <button class="scroll-to-top" @click="ScrollToTop" v-show="show">
        <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="18"
            viewBox="0 0 384 512">
            <path
            d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
        </svg>
    </button>
</template>

<script>
export default {
    name: "BakToTop",
    data() {
        return {
            show: false
        }
    },
    mounted() {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 20) {
                this.show = true
            } else {
                this.show = false
            }
        });
    },
    methods: {
        ScrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }
    }
}
</script>
<style scoped>
.scroll-to-top {
    position: fixed;
    bottom: 30px;
    right: 20px;
    width: 50px;
    height: 50px;
    color: #fff;
    background-color: var(--main);
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
button:hover{
    transform: translateY(-5px);
}
</style>