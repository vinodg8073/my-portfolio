<template>
  <div class="home">
    <SidePanelVue></SidePanelVue>
    <main-content-vue></main-content-vue>
  </div>
</template>

<script>
// @ is an alias to /src
import SidePanelVue from '@/components/SidePanel.vue';
import MainContentVue from '@/components/MainContent.vue';
export default {
  name: 'HomeView',
  components: {
    SidePanelVue,
    MainContentVue
  }
}
</script>
