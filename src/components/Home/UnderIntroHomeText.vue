<template>
    <div class="underIntroHomeText">
        <div class="dropdown open">
            <a class="dropdown-toggle" type="button" id="triggerId" data-bs-toggle="dropdown" aria-haspopup="true"
                aria-expanded="false">
                {{ title }}
            </a>
            <div class="dropdown-menu" aria-labelledby="triggerId">
                <button class="dropdown-item" href="#">{{Action1}}</button>
                <button class="dropdown-item" href="#">{{Action2}}</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "UnderIntroHomeText",
    props:["title","Action1","Action2"]
}
</script>

<style scoped>
a{
    text-decoration: none;
    color:#000;
}
a:hover, button:hover{
    color:var(--main);
}
</style>