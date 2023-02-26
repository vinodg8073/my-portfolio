<template>
      <div ref="Profile"><my-profile-vue :profile="profile"></my-profile-vue></div>
      <div ref="Education" ><my-education :educationData="education"></my-education></div>
      <div ref="Experience"><my-experience :experienceData="experiences"></my-experience></div>
      <div ref="Skills"><my-skills :skillsData="skills"></my-skills></div>
      <div ref="Achievement"><myAchievments :achievementData="achievement"></myAchievments></div>
      <div ref="Certification"><my-certificates-vue :certificateData="certificates"></my-certificates-vue></div>
      <div ref="Projects"><myProjects :projectsData="projects"></myProjects></div>
      <div ref="Activities"><myActivities :activitiesData="activities"></myActivities></div>
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
      education:{},
      skills:{},
      achievement:{},
      certificates:{},
      projects:{},
      activities:{}
    }
  },
  methods: {
    goto(refName) {
      var element = this.$refs[refName];
      var top = element.offsetTop;
      window.scrollTo(0, top);
    },
    fetchAllData() {
      
            fetch("mock/allData.json")
                .then((response) => response.json())
                .then((data) => {
                    this.experiences = data.experience;
                    this.profile=data.profile;
                    this.education=data.education;
                    this.skills=data.skills,
                    this.achievement=data.achievements,
                    this.certificates=data.certificates,
                    this.projects=data.projects,
                    this.activities=data.activities
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


