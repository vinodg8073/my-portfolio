<template>
    <div class="container">
        <i class="heading" stye><h1>Projects : </h1></i>
        <div class="projects-list">
            <div class="project">
                <img  class="pimg" src="@/assets/logo.png" alt="">
                <div class="content">
                <i>something here  :</i>
                <h1>FPV Drone</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, modi.</p>
            </div>
            </div>
            <div class="project">
                <img class="pimg"  src="@/assets/logo.png" alt="">
                <div class="content">
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
h1{
    padding-bottom: 20px;
}
.container{
    background-color:  rgb(245, 248, 248);
    padding:  0 25px 20px 25px;
}
.projects-list{
    
    /* position: relative;
    min-width: 200px; */
    background-color: black;
    padding: 10px 0;
    border-radius: 10px;
    
}
.content{
    /* min-height: 100px;
    background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0));
    backdrop-filter: blur(10px);
    border-radius: 10px;
    border: 2px solid rgba(255,255,255,0.18);
    box-shadow: 0 8px 32px 0 rgba(0,0,0,0.37); */
    color: rgb(177, 206, 248);
    padding-left: 20px;
}
.pimg{
 max-width: 100px;
 /* max-height: 100px; */

}
.project{
    /* position: relative; */
     display: flex;
    align-items: center; 
    /* display: grid; */
    /* grid-area: 2; */
    /* grid-template: 2fr; */
    /* grid-auto-columns: 2fr; */
    margin: 5px 30px 20px 50px;
    padding: 0 0 0 10px;
    /* border-left: 5px solid black; */

    background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0));
    backdrop-filter: blur(10px);
    border-radius: 10px;
    border: 2px solid rgba(255,255,255,0.18);
    box-shadow: 0 8px 32px 0 rgba(255,255,255,0.09);
}
</style>