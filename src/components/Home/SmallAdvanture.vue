<template>
    <div class="SmallAdvanture mt-5 m-auto mb-5">
        <!-- text -->
        <SmallAdvantureText />
        <!-- card -->
        <div class="cards">
            <SmallAdvantureCard  />
            <SmallAdvantureCard class="backCard" />
        </div>
    </div>
</template>

<script>
import SmallAdvantureText from "./SmallAdvantureText.vue";
import SmallAdvantureCard from "./SmallAdvantureCard.vue";

export default {
    name: "SmallAdvanture",
    components:{
        SmallAdvantureText,
        SmallAdvantureCard
    }
}
</script>

<style scoped>
.SmallAdvanture{
    width:80%;
    display: grid;
    /* grid-template-columns: repeat(2,35%); */
    grid-template-columns: 45% 30%;
    justify-content: space-between;
    align-items:center;
}
.cards{
    position:relative;
}
.backCard{
    position:absolute;
    right:-20px;
    left:20px;
    top:20px;
    opacity:.8;
    z-index:-1;
}
@media screen and (max-width:767px){
    .SmallAdvanture{
        grid-template-columns: repeat(1,85%);
        grid-gap:10px;
        width: 100%;
        justify-content: center;
        text-align: center;
    }
}
@media screen and (min-width:768px) and (max-width:992px){
    .SmallAdvanture{
        grid-template-columns: 45% 45%;
        grid-gap:20px;
    }
}
</style>