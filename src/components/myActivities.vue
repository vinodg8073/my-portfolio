<template>
    <div class="container">
        <i class="heading"><h1>{{ activities.heading }}</h1></i>
        <div class="content">
            <ul >
                <li v-for="activity in activities.activitiesList" :key="activity" v-html="activity.activity"></li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                activities:{}
            }
        },
        methods: {
        fetchSkillsData() {
            fetch("projects.json")
                .then((response) => response.json())
                .then((data) => {
                    this.activities = data.activities;
                });
        },
    },
    created() {
        this.fetchSkillsData();
    },
    }
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
}

h1{
    padding-bottom: 20px;
}
.container{
    background-color:  rgb(245, 248, 248);
    padding:    10px 25px;
}

.content{
    margin-left: 20px;
    padding: 0 0 10px 0;
}

ul{
    list-style-type: square;
}
</style>