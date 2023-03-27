<template>
    <div class="homePage">
        <IntroHome />
        <UnderIntroHome />
        <SmallAdvanture />
        <Destination />
    </div>
</template>

<script>
import IntroHome from "../components/Home/IntroHome.vue";
import UnderIntroHome from "../components/Home/UnderIntroHome.vue";
import SmallAdvanture from "../components/Home/SmallAdvanture.vue";
import Destination from "../components/Home/Destination.vue";

export default {
    name: "HomeView",
    components: {
        IntroHome,
        UnderIntroHome,
        SmallAdvanture,
        Destination
    }
}
</script>