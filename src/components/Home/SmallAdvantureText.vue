<template>
    <div class="SmallAdvantureText">
        <small>{{ beforeHead }}</small>
        <h2>{{ Head }}</h2>
        <p>{{ paragraph }}</p>
    </div>
</template>

<script>
export default {
    name:"SmallAdvantureText",
    data(){
        return{
            beforeHead: "NEW JOURNEY",
            Head: "ADVENTURE VACATIONS IN SMALL GROUPS",
            paragraph:"Because you want to live it, taste it, learn from it, and bring what you offer to it. Small group adventure travel brings you closer to our world, its people, their culture, and their way of life. We don't just offer the world. We offer you to the world. See where we're headed."
        }
    }
}
</script>

<style scoped>
small{
    color:var(--main);
    font-weight: 700;
    letter-spacing:7px;
}
h2{
    font-weight: 700;
    color:var(--head-color);
}
p{
    font-weight: lighter;
    opacity:.7;
}
</style>