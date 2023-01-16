<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <side-panel-vue></side-panel-vue>
  <!-- <div class="mainview"><demo-vue></demo-vue></div> -->
  <div class="mainview"><router-view /></div>
  

</template>
<script>
// @ is an alias to /src
import SidePanelVue from './components/SidePanel.vue';
// import demoVue from './components/demo.vue';
export default {
  
  components: {
    SidePanelVue,
    // demoVue
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}
.mainview{
  width: 76.3%;
  float: right;
}
@media (min-width:0) and (max-width: 979px) {
  .mainview{
  width: 100%;
}
}
</style>
