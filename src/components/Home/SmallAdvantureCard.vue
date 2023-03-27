<template>
    <div class="SmallAdvantureCard">
        <img :src="imageUrl" :alt="imageAlt" />
        <!-- Info -->
        <div class="info p-3 d-flex flex-column gap-2">
            <!-- title -->
            <div class="title d-flex justify-content-between">
                <h2>{{ title }}</h2>
                <!-- stars -->
                <div class="stars mt-1">
                    <font-awesome-icon icon="fa-solid fa-star" class="icon" />
                    <font-awesome-icon icon="fa-solid fa-star" class="icon" />
                    <font-awesome-icon icon="fa-solid fa-star" class="icon" />
                    <font-awesome-icon icon="fa-solid fa-star" class="icon" />
                    <font-awesome-icon icon="fa-solid fa-star" class="iconNot" />
                </div>
            </div>
            <!-- text -->
            <div class="text d-flex align-items-center flex-wrap  justify-content-between">
                <!-- 1 -->
                <div class="child gap-1 d-flex">
                    <font-awesome-icon icon="fa-solid fa-tent" style="color:var(--head-color);opacity:.4;"/>
                    <p>{{ text1 }}</p>
                </div>
                <!-- 2 -->
                <div class="child gap-1 d-flex">
                    <font-awesome-icon icon="fa-solid fa-mountain" style="color:var(--head-color);opacity:.4;"/>
                    <p>{{ text2 }}</p>
                </div>
            </div>
            <!-- Btn => Book -->
            <button type="button">{{ Book }}</button>
        </div>
    </div>
</template>

<script>
export default {
    name:"SmallAdvantureCard",
    data(){
        return{
            title:"Australia",
            text1:"Accompanied Travel",
            text2:"Hiking",
            imageUrl:"../../../public/Home/SmallAdvan.png",
            imageAlt:"Small Adventure",
            Book:"BOOK NOW"
        }
    }
}
</script>

<style scoped>
.SmallAdvantureCard{
    display:grid;
    border-radius:10px;
    box-shadow:0 0 40px rgba(0,0,0,.1);
}
.SmallAdvantureCard img{
    width:100%;
    border-radius:10px 10px 0px 0px;
}
.SmallAdvantureCard .info{
    background-color:#fff;
}
.SmallAdvantureCard h2{
    color:var(--head-color);
}
.SmallAdvantureCard .icon{
    color:gold;
}
.SmallAdvantureCard .iconNot{
    color:#bdbdbd;
}
.SmallAdvantureCard button{
    border:none;
    outline:none;
    background-color:var(--main);
    color:#fff;
    padding:12px 30px 10px 30px;
    margin:auto;
}
</style>