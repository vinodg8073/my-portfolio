<template>
    <div class="container">
        <i class="heading" stye><h1>{{projects.heading}}</h1></i>
        <div class="projects-list">
            <div class="project" v-for="project in projects.allProjects" :key="project">
                <img  class="pimg" :src="`${project.imgUrl}`">
                <div class="content">
                <h1 class="phead">{{ project.heading2 }}</h1>
                <p>{{project.details}}</p>
            </div>
            </div>
           

        </div>
    </div>
</template>

<script>
    export default {
        props:['projectsData'],
        data(){
            return{
                projects:{}
            }
        },
        methods: {
        setData() {
            this.projects=this.projectsData;
        },
    },
    updated() {
        this.setData();
    },
    }
</script>

<style scoped>
*{
    margin: 0px;
    padding: 0%;
}
h1{
    padding-bottom: 20px;
}
.container{
    background-color:  rgb(245, 248, 248);
    padding:  20px 25px 20px 25px;
}
.projects-list{
    background-color: black;
    padding: 10px 0;
    border-radius: 10px;
    
}
.content{
    color: rgb(177, 206, 248);
    padding-left: 20px;
}
.pimg{
 max-width: 100px;
}
.project{
     display: flex;
    align-items: center; 
    margin: 5px 30px 20px 50px;
    padding: 0 0 0 10px;
    background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0));
    backdrop-filter: blur(10px);
    border-radius: 10px;
    border: 2px solid rgba(255,255,255,0.18);
    box-shadow: 0 8px 32px 0 rgba(255,255,255,0.09);
}

@media (min-width:0) and (max-width: 620px) {
    .project{
        margin: 15px;
    }
    .phead{
        font-size: 20px;
    }
}
</style>