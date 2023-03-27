<template>
    <div class="DestinationTitle mb-3">
        <h2>{{ DestinationTitle }}</h2>
    </div>
</template>


<script>
export default{
    name :"DestinationTitle",
    data() {
        return {
            DestinationTitle:"Our Favorite Destination"
        }
    },
}
</script>

<style scoped>
.DestinationTitle{
    display:flex;
    justify-content:center;
    margin-top: 100px;
}
h2{
    color:var(--head-color);
}
</style>