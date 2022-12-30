<template>
    <div>
        <!-- <button @click="goto('ifi')">btn</button> -->
    <!-- <side-panel-vue></side-panel-vue> -->
    <my-profile-vue></my-profile-vue>
    <my-experience> </my-experience>
    <my-skills></my-skills>
    </div>
    

</template>

<script>

// import SidePanelVue from '@/components/SidePanel.vue';
import MyProfileVue from '@/components/MyProfile.vue';
import myExperience from '@/components/myExperience.vue';
import MySkills from './mySkills.vue';
export default {
  name: 'HomeView',
  components: {
    // SidePanelVue,
    MyProfileVue,
    myExperience,
    MySkills
    
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

