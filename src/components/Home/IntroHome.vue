<template>
    <div class="IntroHome">
        <div class="IntroText">
            <h1>{{title}}</h1>
            <p>{{paragraph}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name:"IntroHome",
    data(){
        return{
            title:"Connect To The World",
            paragraph:"We've put together our top places of 2023 to show you how many amazing places are waiting to be explored by you."
        }
    }
}
</script>

<style scoped>
    .IntroHome{
        background-image: url(../../../public/Home/bg.png);
        background-position: center;
        background-attachment: fixed;
        background-size: cover;
        object-fit: cover;
        width:100%;
        height:100vh;
    }
    .IntroText{
        display:flex;
        flex-direction:column;
        justify-content:center;
        text-align:center;
        width:50%;
        margin:auto;
        align-items:center;
        height:100vh;
        color:#fff;
    }
    h1{
        font-size:50px;
    }
    @media screen and (max-width:800px){
        .IntroText{
            width:90%
        }
    }
</style>