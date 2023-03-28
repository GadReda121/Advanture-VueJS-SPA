<template>
    <div class="BeforeFooter mt-5">
        <div class="Text d-flex flex-column">
            <h2>{{ title }}</h2>
            <button type="button" class="mt-2">{{Book}}</button>
        </div>
    </div>
</template>

<script>
export default {
    name:"BeforeFooter",
    data(){
        return{
            title:"Have not decided where to visit in 2019? Book now for the best trip of your life",
            Book:"Book Now"
        }
    }
}
</script>

<style scoped>
.BeforeFooter {
    background-image: url(../../../public/Home/BeforeFooter.jpeg);
    width:100%;
    height:300px;
    background-position: center;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    display:flex;
    align-items:center;
}
.BeforeFooter .Text{
    text-align:center;
    color:#fff;
    width:50%;
    margin:auto;
}
.BeforeFooter button{
    border:none;
    outline:none;
    background-color:var(--main);
    color:#fff;
    padding:12px 30px 10px 30px;
    margin:auto;
    cursor:pointer;
}
@media screen and (max-width:767px){
    .BeforeFooter .Text{
        width:70%;
    }
}
</style>