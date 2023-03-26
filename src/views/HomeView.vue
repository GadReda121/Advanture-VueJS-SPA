<template>
    <div class="homePage">
        <IntroHome />
        <UnderIntroHome />
        <SmallAdvanture />
    </div>
</template>

<script>
import IntroHome from "../components/Home/IntroHome.vue";
import UnderIntroHome from "../components/Home/UnderIntroHome.vue";
import SmallAdvanture from "../components/Home/SmallAdvanture.vue";

export default {
    name: "HomeView",
    components: {
        IntroHome,
        UnderIntroHome,
        SmallAdvanture
    }
}
</script>