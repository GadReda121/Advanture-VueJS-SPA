<template>
    <div class="underIntroHome">
        <UnderIntroHomeText title="DESTINATION" Action1="DESTINATION 1" Action2="DESTINATION 2" />
        <UnderIntroHomeText title="VACATION TYPE"  Action1="VACATION TYPE 1" Action2="VACATION TYPE 2" />
        <UnderIntroHomeText title="ACTIVITY"  Action1="ACTIVITY 1" Action2="ACTIVITY 2"/>
    </div>
</template>

<script>
import UnderIntroHomeText from "./UnderIntroHomeText.vue";
export default {
    name: "UnderIntroHome",
    components: {
        UnderIntroHomeText
    }
}
</script>

<style scoped>
.underIntroHome{
    width:80%;
    margin:auto;
    background-color: #fff;
    margin-top: -50px;
    box-shadow: 0 0 100px rgba(0, 0, 0, .2);
    /* border-radius: 5px; */
    height: 100px;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

@media screen and (max-width:767px){
    .underIntroHome{
        width:96%;
    }
}
</style>