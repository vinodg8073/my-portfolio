<template>
  <div class="home">
    <mainPageVue></mainPageVue>
  </div>
</template>

<script>
// @ is an alias to /src
import mainPageVue from '@/components/mainPage.vue';
export default {
  name: 'HomeView',
  components: {
    mainPageVue
    
  }
}
</script>
