<template>
    <div class="homePage">
        <IntroHome />
        <UnderIntroHome />
    </div>
</template>

<script>
import IntroHome from "../components/Home/IntroHome.vue";
import UnderIntroHome from "../components/Home/UnderIntroHome.vue";

export default {
    name: "HomeView",
    components: {
        IntroHome,
        UnderIntroHome
    }
}
</script>