<template>
    <div class="FooterCopy">
        <h6>{{ title }}<span>{{ Author }}</span> | 2023 &copy;</h6>
    </div>
</template>

<script>
export default {
    name: "FooterCopy",
    data() {
        return {
            Author:"Gad Reda",
            title:"All Rights Reserved By "
        }
    },
}
</script>

<style scoped>
.FooterCopy{
    background-color: var(--footer-copy);
    color:#fff;
    padding:20px 0px;
    text-align: center;
}
h6{
    margin:0px;
}
h6 > span{
    color:var(--main)
}
</style>