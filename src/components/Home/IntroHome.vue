<template>
    <div class="IntroHome">
        <div class="IntroText">
            <h1>{{ title }}</h1>
            <p>{{ paragraph }}</p>
            <!-- BTNS -->
            <div class="d-flex gap-3 flex-wrap">
                <button><a href="#">{{ Book }}</a></button>
                <button><a href="/register">{{ createAccount }}</a></button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"IntroHome",
    data(){
        return{
            title:"Connect To The World",
            paragraph: "We've put together our top places of 2023 to show you how many amazing places are waiting to be explored by you.",
            Book: "Book Now",
            createAccount: "Create Acoount"
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
        animation : textShadow 1s .1s both infinite alternate-reverse; 
    }
    button{
        padding: 10px 30px;
        border:none;
        outline:none;
        background-color: var(--main);
        background: rgba(242, 73, 43, 0.50);
        box-shadow: 0 0px 200px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(6px);
        -webkit-backdrop-filter: blur(6px);
        border: 2px solid rgba(242, 73, 43, 0.29);
    }
    button:last-child{
        background-color: var(--main);
    }
    button:hover{
        background-color: var(--main);
    }
    button a{
        color:#fff;
        text-decoration: none;
    }
    @keyframes textShadow{
        from{text-shadow:0 0 0px #fff}
        to{text-shadow:0 0 10px #fff}
    }
    @media screen and (max-width:800px){
        .IntroText{
            width:90%
        }
    }
</style>