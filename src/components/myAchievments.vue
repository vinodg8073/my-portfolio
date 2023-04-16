<template>
    <div class="achievements">
        <i class="heading">
            <h1>{{ achievements.heading }}</h1>
        </i>
        <div class="achievements-list" >
            <div class="achievement" v-for="achievement in achievements.allAchievements" :key="achievement" :data-aos="`fade-${achievement.slide}`">
                <img class="img1" :src="`${achievement.imgUrl}`" alt="">
                <div class="details">
                    <h3>{{ achievement.heading2 }}</h3>
                    <p>{{ achievement.details }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AOS from 'aos'

export default {
    props:['achievementData'],
    data() {
        return {
            achievements: {}
        }
    },
    methods: {
        setAchievementsData() {
            this.achievements=this.achievementData
        },
    },
    updated() {
        this.setAchievementsData();
    },
    mounted(){
        AOS.init(
            {
                offset: 40, 
                delay: 0, 
                duration: 1000, 
                easing: 'ease', 
            }
        );
    }
}
</script>

<style scoped>
.achievements {
    background-color: rgb(245, 248, 248);
    margin: 0px 0px;
    padding: 20px 20px 10px;
}

h1 {
    margin: 0%;
    padding: 0 0 10px 0;
}

.achievement {

    display: grid;
    grid-template-columns: 2fr 1fr;
    padding: 10px;
    background: #151515;
    color: white;
    margin: 10px 5px 10px 5px;
    border-radius: 10px;
    align-items: center;
}

img {
    margin: auto;
}

@media (min-width:0) and (max-width: 620px) {
    .achievement {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 2fr;
    }

    h3 {
        border-bottom: 2px solid whitesmoke;
    }
}
</style>