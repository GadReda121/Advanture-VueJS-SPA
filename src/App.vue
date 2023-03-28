<template>
    <Header />
    <HomeView />
    <BakToTop />
    <Footer />
    <FooterCopy />
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import FooterCopy from "./components/FooterCopyWrite.vue";
import BakToTop from "./components/ButtonToTop.vue";

export default{
  components:{
    Header,
    Footer,
    FooterCopy,
    BakToTop
  }
}
</script>