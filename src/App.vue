<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <side-panel-vue></side-panel-vue>
  <div class="mainview"><router-view /></div>
  

</template>
<script>
// @ is an alias to /src
import SidePanelVue from './components/SidePanel.vue';
export default {
  
  components: {
    SidePanelVue
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

</style>
