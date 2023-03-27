<template>
    <div class="DestinationSectionStars">
        <!-- 1 -->
        <div class="child">
            <p>History</p>
            <!-- stars -->
            <div class="star">
            <font-awesome-icon icon="fa-solid fa-star" class="icon" />
            <font-awesome-icon icon="fa-solid fa-star" class="icon" />
            <font-awesome-icon icon="fa-solid fa-star" class="icon" />
            <font-awesome-icon icon="fa-solid fa-star" class="icon" />
            <font-awesome-icon icon="fa-solid fa-star" class="icon" />
            </div>
        </div>
        <!-- 2 -->
        <div class="child">
            <p>Nature</p>
            <!-- stars -->
            <div class="star">
            <font-awesome-icon icon="fa-solid fa-star" class="icon" />
            <font-awesome-icon icon="fa-solid fa-star" class="icon" />
            <font-awesome-icon icon="fa-solid fa-star" class="icon" />
            <font-awesome-icon icon="fa-solid fa-star" class="icon" />
            <font-awesome-icon icon="fa-solid fa-star" class="iconNot" />
            </div>
        </div>
        <!-- 3 -->
        <div class="child">
            <p>Culture</p>
            <!-- stars -->
            <div class="star">
            <font-awesome-icon icon="fa-solid fa-star" class="icon" />
            <font-awesome-icon icon="fa-solid fa-star" class="icon" />
            <font-awesome-icon icon="fa-solid fa-star" class="icon" />
            <font-awesome-icon icon="fa-solid fa-star" class="icon" />
            <font-awesome-icon icon="fa-solid fa-star" class="icon" />
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name:"DestinationSectionStars"
    }
</script>

<style scoped>
.DestinationSectionStars .child{
    display:flex;
    gap:20px;
}
p{
    font-weight:lighter;
    color:var(--head-color);
}
.icon{
    color:gold;
}
.iconNot{
    color:#bdbdbd;
}
</style>