<template>
      <div ref="Profile"><my-profile-vue :profile="profile"></my-profile-vue></div>
      <div ref="Education" ><my-education :educationData="education"></my-education></div>
      <div ref="Experience">
        <my-experience :experienceData="experiences"></my-experience>
      </div>
      <div ref="Skills"><my-skills></my-skills></div>
      <div ref="Achievement"><myAchievments></myAchievments></div>
      <div ref="Certification"><my-certificates-vue></my-certificates-vue></div>
      <div ref="Projects"><myProjects></myProjects></div>
      <div ref="Activities"><myActivities></myActivities></div>
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
  data(){
    return{
      experiences:{},
      profile:{},
      education:{}
    }
  },
  methods: {
    goto(refName) {
      var element = this.$refs[refName];
      var top = element.offsetTop;
      window.scrollTo(0, top);
    },
    fetchAllData() {
      
            fetch("allData.json")
                .then((response) => response.json())
                .then((data) => {
                    this.experiences = data.experience;
                    this.profile=data.profile;
                    this.education=data.education;
                });
        },
  },
  created() {
    window.mitt.on('scroll',(value)=>{
      this.goto(value)
    })
    this.fetchAllData();
  },
 
}
</script>

<style scoped>
</style>


