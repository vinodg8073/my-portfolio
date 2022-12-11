<template>
    <div>
        <!-- <button @click="goto('ifi')">btn</button> -->
    <!-- <side-panel-vue></side-panel-vue> -->
    <my-profile-vue ></my-profile-vue>
    <!-- <my-experience ref="ifi"> </my-experience> -->
    </div>
    

</template>

<script>

// import SidePanelVue from '@/components/SidePanel.vue';
import MyProfileVue from '@/components/MyProfile.vue';
// import myExperience from '@/components/myExperience.vue'
export default {
  name: 'HomeView',
  components: {
    // SidePanelVue,
    MyProfileVue,
    // myExperience
    
  },
  
  methods: {
    goto(refName) {
      var element = this.$refs[refName];
      var top = element.offsetTop;
        console.log('working');
      window.scrollTo(0, top);
    }
    
  }
}
</script>

