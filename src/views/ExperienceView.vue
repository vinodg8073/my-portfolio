<template>
    <div >
        <my-experience-vue></my-experience-vue>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import myExperienceVue from '@/components/myExperience.vue';
  export default {
    name: 'ExperienceView',
    components: {
      myExperienceVue
      
    }
  }
  </script>
  