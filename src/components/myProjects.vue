<template>
    <div>
        <div class="projects-list">
            <div class="project">
                <img   src="@/assets/logo.png" alt="">
                <div>
                <i>something here  :</i>
                <h1>FPV Drone</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, modi.</p>
            </div>
            </div>
            <div class="project">
                <img   src="@/assets/logo.png" alt="">
                <div>
                <i>something here  :</i>
                <h1>FPV Drone</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, modi.</p>
            </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
*{
    margin: 0px;
    padding: 0%;
}
.projects-list{
    
    position: relative;
    min-width: 200px;
    
}

img{
 width: 10%;
}
.project{
    position: relative;
    display: flex;
    align-items: center;
    margin: 5px 10px 10px 50px;
}
</style>