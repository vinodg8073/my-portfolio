<template>
    <div>
      <!-- <button @click="goto('div1')">Div 1</button>
    <button @click="goto('div2')">Div 2</button>
    <button @click="goto('div3')">Div 3</button>
    <br/> -->
        <!-- <button @click="goto('ifi')">btn</button> -->
    <!-- <side-panel-vue></side-panel-vue> -->
    <my-profile-vue></my-profile-vue>
    <my-education></my-education>
    <my-experience> </my-experience>
    <my-skills></my-skills>
    <myAchievments></myAchievments>
    <my-certificates-vue></my-certificates-vue>
    <myProjects></myProjects>
    <myActivities></myActivities>
    </div>
    
    

    <!-- <div class="div" ref="div1">This is Div 1</div>
    <div class="div" ref="div2">This is Div 2</div>
    <div class="div" ref="div3">This is Div 3</div> -->

</template>

<script>

// import SidePanelVue from '@/components/SidePanel.vue';
import MyProfileVue from '@/components/MyProfile.vue';
import myExperience from '@/components/myExperience.vue';
import MySkills from './mySkills.vue';
import MyCertificatesVue from './MyCertificates.vue';
import myEducation from './myEducation.vue';
import myAchievments from './myAchievments.vue';
import myProjects from './myProjects.vue';
import myActivities from './myActivities.vue';
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
  }

}
</script>

<style scoped>
.div {
   height: 1000px;
  padding: 20px;
  border: 2px solid yellow; 
  background-color:  rgb(245, 248, 248);;
}
.projects-list{
  /* background-color:  rgb(245, 248, 248); */
}
</style>


