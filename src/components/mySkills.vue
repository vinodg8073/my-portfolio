<template>
    <div class="skills">
        <h1><strong><i>{{ skills.heading }}</i></strong></h1>
        <ul>
            <span v-for="skill in skills.languages" :key="skill" >
            <li >
                <h3 class="bar">{{ skill.language }}</h3><div :class="`p${skill.percentage} right`" :style="`background-color: ${skill.color}`"></div>
                <span class="percentage">{{skill.percentage}}%</span>
            </li>
            <br>
        </span>
        </ul>
    </div>
</template>

<script>
    export default {
       name:'my-skills' ,
       props:['skillsData'],
       data(){
            return{
                skills:{}
            }
        },
        methods: {
        setSkillsData() {
            this.skills=this.skillsData;
        },
    },
    updated() {
        this.setSkillsData();
    },
    }
</script>

<style scoped>
h1{
    margin-top: 0;
}
.p85{
    width: 55%;
}
.p80{
    width: 50%;
}
.p70{
    width: 40%;
}
.p65{
    width: 35%;
}
.p75
{
    width: 45%;
}
.right{
    float: left;
    height: 10px;
    border-radius: 10px;
    margin: 5px 0px 0px 0px;
}
.skill-bar{
background-color: aquamarine;
}

.bar{
    border-radius: 15px;
    margin: 3px 0;
    width:20%;
    margin: 0px;
    float: left;
}

.percentage{
    bottom: 2px;
    padding-left:10px;
}
ul{
    margin: 0;
}
li{
    list-style: none;
}
.skills{
    background: rgb(245, 248, 248);
    padding: 20px;
}

@media (min-width:0) and (max-width: 800px) {
    ul{
        padding-left: 15px;
    }
.bar{
    margin: 3px 0;
    width:20%;
    margin-right: 30px;
    float: left;
    font-size: 13px;
    font-weight: 10px;
} 
.html,.java{
    width: 52%;
}
}
</style>