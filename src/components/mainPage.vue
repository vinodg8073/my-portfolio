<template>
      <div ref="profile"><my-profile-vue></my-profile-vue></div>
      <div ref="education"><my-education></my-education></div>
      <div ref="experience"><my-experience></my-experience></div>
      <div ref="skills"><my-skills></my-skills></div>
      <div ref="achievements"><myAchievments></myAchievments></div>
      <div ref="certification"><my-certificates-vue></my-certificates-vue></div>
      <div ref="projects"><myProjects></myProjects></div>
      <div ref="activities"><myActivities></myActivities></div>
</template>

<script>

import MyProfileVue from '@/components/MyProfile.vue';
import myExperience from '@/components/myExperience.vue';
import MySkills from './mySkills.vue';
import MyCertificatesVue from './MyCertificates.vue';
import myEducation from './myEducation.vue';
import myAchievments from './myAchievments.vue';
import myProjects from './myProjects.vue';
import myActivities from './myActivities.vue';
import mitt from 'mitt'
window.mitt = window.mitt || new mitt()
export default {
  name: 'HomeView',
  components: {
    MyProfileVue,
    myExperience,
    MySkills,
    MyCertificatesVue,
    myEducation,
    myAchievments,
    myProjects,
    myActivities
  },
  
  methods: {
    goto(refName) {
      var element = this.$refs[refName];
      var top = element.offsetTop;
      window.scrollTo(0, top);
    }
  },
  created() {
    window.mitt.on('scroll',(value)=>{
      this.goto(value)
    })
  },

}
</script>

<style scoped>
</style>


