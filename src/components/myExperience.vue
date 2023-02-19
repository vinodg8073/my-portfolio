<template>
    <div class="experience">
        <i><h1>{{ experience.heading }}</h1></i>
        <div class="exp-company" v-for="detail in experience.details" :key="detail" >
            <h2><strong>{{ detail.company }} &nbsp; &nbsp; <i class="exp-year">{{ detail.year }}</i></strong></h2>
            <p class="exp-content">
                <ul>
                    <li v-for="designations in detail.designations " :key="designations">
                        <h3>{{designations.designation}}</h3>
                        <p>{{designations.description}}</p>
                    </li>
                </ul>
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        props:['experienceData'],
        data() {
            return {
               experience: this.experienceData,
            }
        },
        methods:{
            setData(){
                this.experience=this.experienceData
            }
        },
        updated(){
           this.setData() 
        },
    
    }
</script>

<style scoped>
h1{
    margin-top: 0;
}
div{
    background: rgb(245, 248, 248);
}

.experience{
    padding: 20px;
}
.exp-company{
    padding-left: 20px;
}

li{
    margin-top: -10px;
}
li::marker{
    vertical-align: middle;
    font-size: 40px;
}

ul{
    border-left: 4px solid black;
    padding-left: 22px;
    margin: 0 0 0 10px;
}
.exp-year{
    font-size: medium ;
    color: dimgray;
    float: right;
    padding-right: 90px;
}

@media (min-width:0) and (max-width: 800px) {
    .exp-year{
    float: none;
    padding-right: 0px;
}
}
</style>