<template>
  <div id="app">
    <navigation/>
    <home-page/>
<!--    <about-us/>-->
<!--    <blog-detail />-->
<!--    <contact />-->
    <hr/>
    <comp-footer/>
  </div>
</template>

<script>
import Navigation from "./components/Navigation";
import PageHeader from "./components/PageHeader";
import HomePage from "./pages/HomePage";
import CompFooter from "./components/CompFooter";
import AboutUs from "./pages/AboutUs";
import BlogDetail from "./pages/BlogDetail";
import Contact from "./pages/Contact";
export default {
  name: 'app',
  components: {HomePage, Contact, BlogDetail, AboutUs, CompFooter, PageHeader, Navigation},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>

</style>
