<template>
    <div class="footerLinks">
        <h4>{{title.toUpperCase()}}</h4>
        <!-- links -->
        <div class="links d-flex flex-column">
            <a href="">{{link1}}</a>
            <a href="">{{link2}}</a>
            <a href="">{{link3}}</a>
            <a href="">{{link4}}</a>
            <a href="">{{link5}}</a>
        </div>
    </div>
</template>

<script>
export default{
    name:"FooterLinks",
    props:['title','link1','link2','link3','link4','link5']
}
</script>

<style scoped>
h4{
    color:#fff;
}
a{
    color:#bdbdbd;
    text-decoration:none;
}
a:hover{
    color:var(--main);
    transform:translateX(10px)
}
</style>