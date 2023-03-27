<template>
    <div class="DestinationSection">
        <!-- Img -->
        <div class="image">
            <img :src="imageUrl" :alt="imageAlt">
        </div>
        <!-- Text -->
        <div class="text">
            <h2>{{title}}</h2>
            <!-- stars -->
            <div class="stars">
                <DestinationSectionStars />
            </div>
            <!-- paragraph -->
            <div class="para">
                <p>{{paragraph}}</p>
            </div>
            <!-- btn -->
            <button type="button">{{book}}</button>
        </div>
    </div>
</template>

<script>
import DestinationSectionStars from "./DestinationSectionStars.vue";
export default {
    name :"DestinationSection",
    components:{
        DestinationSectionStars
    },
    props:["imageUrl","imageAlt","title","paragraph","book"]
}
</script>

<style scoped>
    .DestinationSection{
        display: grid;
        grid-template-columns: 45% 50%;
        justify-content: space-between;
        align-items:center;
        width:80%;
        margin:auto;
        background:linear-gradient(to left,#08429824,#fff);
        grid-gap:30px;
        padding:30px;
    }
    h2{
        font-size:50px;
        font-weight:800;
        color:var(--head-color)
    }
    img{
        width:100%;
        mix-blend-mode: multiply;
    }
    button{
        border:none;
        outline:none;
        background-color:var(--main);
        color:#fff;
        padding:12px 30px 10px 30px;
        margin:auto;
    }
    @media screen and (max-width: 767px){
    .DestinationSection{
        display: grid;
        grid-template-columns: repeat(1,1fr);
        justify-content: space-between;
        align-items:center;
        width:90%;
        margin:auto;
        background:linear-gradient(to top,#08429824,#fff);
        grid-gap:30px;
        padding:50px;
        text-align: center;
    }
    }
</style>