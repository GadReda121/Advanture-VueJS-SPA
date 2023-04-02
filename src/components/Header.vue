<template>
    <nav>
        <!-- logo -->
        <div class="logo d-flex align-items-center gap-1">
            <font-awesome-icon icon="fa-solid fa-mountain-sun" style="color:var(--main);font-size:25px;"/>
            <h4>{{ logo }}</h4>
        </div>
        <!-- icon -->
        <div class="hamburger" @click="hamburger">
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
        </div>
        <!-- menu -->
        <ul class="nav-links">
            <div class="items">
                <!-- FEATURES -->
                <RouterLink to="/">
                        FEATURES
                </RouterLink>
                <!-- DESTINATION -->
                <RouterLink to="">
                        DESTINATION
                </RouterLink>
                <!-- GALLERY -->
                <RouterLink to="/about">
                        GALLERY
                </RouterLink>
                <!-- BLOG -->
                <RouterLink to="">
                        BLOG
                </RouterLink>
                <!-- ABOUT -->
                <RouterLink to="">
                        ABOUT US
                </RouterLink>
            </div>
            <!-- tools -->
            <div class="tools">
                <button>
                    <a :href="loginUrl">{{ login }}</a>
                </button>
            </div>
        </ul>
    </nav>
    <RouterView />
</template>

<script>
import { RouterLink, RouterView } from 'vue-router';

export default {
    name: "Header",
    data() {
        return {
            logo: "Advan",
            login: "Log In",
            loginUrl: "/login"
        }
    },
    methods: {
        hamburger() {
            const hamburger = document.querySelector(".hamburger");
            const navLinks = document.querySelector(".nav-links");
            const links = document.querySelectorAll(".nav-links li");
            //Animate Links
            navLinks.classList.toggle("open");
            links.forEach((link) => {
                link.classList.toggle("fade");
            });
            //Hamburger Animation
            hamburger.classList.toggle("toggle");
        }
    }
}
</script>

<style scoped>
    /* header{
        width:100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        height: 100px;
    } */
    img{
        width:40%;
    }
    ul{
        list-style: none;
        display: flex;
        gap:20px;
        margin-top: 30px;
    }
    ul a{
        color:var(--text);
        font-weight: 700;
        text-decoration: none;
        color: #fff;
    }
    ul a:hover{
        color:var(--main)
    }
    h4{
        margin-top:20px;
        color:#fff;
    }
    h4::first-letter{
        color:var(--main);
    }
    .tools{
        display: flex;
        gap:20px;
    }
    button{
        padding: 10px 30px;
        border:none;
        outline:none;
        background-color:var(--main);
        color:#fff;
    }
    nav{
        height: 6rem;
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        /* position: fixed; */
        z-index: 10;
        position: absolute;
        top:0
        /* box-shadow:0 0 10px rgba(0,0,0,.1); */
    }
/*Styling Links*/
.nav-links{
    display: flex;
    list-style: none; 
    align-items: center;
    justify-content: space-between;
    gap:100px;
}
.items{
    display: flex;
    gap: 30px;
}
/*Styling Hamburger Icon*/
.hamburger div{
    width: 28px;
    height:3px;
    background: #fff;
    margin: 5px;
    transition: all 0.3s ease;
    border-radius: 15px;
}
.hamburger{
    display: none;
}
.tools button a{
    color:#fff !important;
}
/*Stying for small screens*/
@media screen and (max-width: 800px){
    nav{
        position: fixed;
        z-index: 3;
        justify-content: center;
    }
    .hamburger{
        display:block;
        position: fixed;
        position: absolute;
        cursor: pointer;
        right: 5%;
        top: 50%;
        transform: translate(-5%, -50%);
        z-index: 2;
        transition: all 0.7s ease;
    }
    .hamburger div{
        width: 28px;
        height:3px;
        background: #fff;
        margin: 5px;
        transition: all 0.3s ease;
        border-radius: 15px;
    }
    ul a{
        color: #000;
    }
    .nav-links{
        margin: 0;
        position: fixed;
        background: var(--background);
        height: 100vh;
        width: 100%;
        flex-direction: column;
        clip-path: circle(50px at 90% -20%);
        -webkit-clip-path: circle(50px at 90% -10%);
        transition: all 1s ease-out;
        pointer-events: none;
        justify-content: space-evenly;
        gap: 0;
    }
    .items{
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-content: space-evenly;
        height:60vh;
    }
    .nav-links.open{
        clip-path: circle(1000px at 90%);
        -webkit-clip-path: circle(1000px at 90%);
        pointer-events: all;
    }
    .nav-links li{
        opacity: 0;
    }
    .nav-links li:nth-child(1){
        transition: all 0.5s ease 0.2s;
    }
    .nav-links li:nth-child(2){
        transition: all 0.5s ease 0.4s;
    }
    .nav-links li:nth-child(3){
        transition: all 0.5s ease 0.6s;
    }
    .nav-links li:nth-child(4){
        transition: all 0.5s ease 0.7s;
    }
    .nav-links li:nth-child(5){
        transition: all 0.5s ease 0.8s;
    }
    .nav-links li:nth-child(6){
        transition: all 0.5s ease 0.9s;
        margin: 0;
    }
    .nav-links li:nth-child(7){
        transition: all 0.5s ease 1s;
        margin: 0;
    }
    li.fade{
        opacity: 1;
    }
}
/*Animating Hamburger Icon on Click*/
.toggle .line1{
    transform: rotate(-45deg) translate(-5px,6px);
}
.toggle .line2{
    transition: all 0.7s ease;
    width:0;
}
.toggle .line3{
    transform: rotate(45deg) translate(-5px,-6px);
}
</style>