<template>
    <div class="homePage">
        <Preloader />
        <Header />
        <IntroHome />
        <UnderIntroHome />
        <SmallAdvanture />
        <Destination />
        <BeforeFooter />
    </div>
</template>

<script>
import IntroHome from "../components/Home/IntroHome.vue";
import UnderIntroHome from "../components/Home/UnderIntroHome.vue";
import SmallAdvanture from "../components/Home/SmallAdvanture.vue";
import Destination from "../components/Home/Destination.vue";
import BeforeFooter from "../components/Home/BeforeFooter.vue";
import Header from '../components/Header.vue';
import Preloader from "../components/Preloader.vue";

export default {
    name: "HomeView",
    components: {
        Header,
        IntroHome,
        UnderIntroHome,
        SmallAdvanture,
        Destination,
        BeforeFooter,
        Preloader
    },
    mounted() {
        document.title = "ADVAN | HOME"
    },

}
</script>