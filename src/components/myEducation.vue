<template>
    <div class="education">
        <i><h1>{{ education.heading }}</h1></i>
        <div class="college" v-for="college in education.colleges" :key="college">
            <strong><h2>{{ college.collegeName }}</h2></strong>
            <div class="course">
                <h3 class="left">{{ college.course }}</h3> <h4 class="mid">{{ college.result }}</h4> <h4 class="right"><i>{{ college.year }}</i></h4>
            </div>
        </div>
        
    </div>
</template>

<script>
    export default {
        data(){
            return{
                education:{}
            }
        },
        methods: {
        fetchEducationData() {
            fetch("education.json")
                .then((response) => response.json())
                .then((data) => {
                    this.education = data.education;
                });
        },
    },
    created() {
        this.fetchEducationData();
    },
    }
</script>

<style scoped>
.education{

    background: rgb(245, 248, 248);
    margin: 0px 0px;
    padding: 20px 20px 10px;
}
.college{
    padding-left: 20px;
    
}

h3,h4{
    margin: 0px;
}
h4{
    color: dimgray;
}
.course{
    padding-left: 20px;
    margin: 0px;
    display: grid;
    grid-column: 3;
    grid-template-areas: "left right mid";
}
h1{
    margin-top: 0;
}
@media (min-width:0) and (max-width: 800px) {
    .course{
        display: grid;
    grid-column: 1;
    grid-template-areas: "left "
                         "right "
                         "mid";
}
    
    
h3,h4{
    padding-bottom: 5px;
}
}
</style>