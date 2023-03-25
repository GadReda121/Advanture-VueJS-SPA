<template>
    <Header />
    <HomeView />
</template>

<script>
import Header from "./components/Header.vue";
import HomeView from "./views/HomeView.vue";

export default{
  components:{
    Header,
  }
}
</script>