<template>
  <div class="home">
    
    <SidePanelVue></SidePanelVue>
    <!-- <hello-world></hello-world> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import SidePanelVue from '@/components/SidePanel.vue';
export default {
  name: 'HomeView',
  components: {
    SidePanelVue,
    // HelloWorld
  }
}
</script>
