<script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/fontawesome.min.css" integrity="sha512-giQeaPns4lQTBMRpOOHsYnGw1tGVzbAIHUyHRgn7+6FmiEgGGjaG0T2LZJmAPMzRCl+Cug0ItQ2xDZpTmEc+CQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    export default {
        
    }
</script>

<template>
    <div class="profile">
        <img class="profile-img" src="@/assets/profile.jpg" alt="">
        <h1 style="margin-bottom: 0px;">Vinod G</h1>
        <h3 >Full Stack Software Developer</h3>
        <div class="resume">
            <h2><i class="fa-solid fa-file-alt"></i> Resume</h2>
            <button class="btn"><a href="">View</a></button>
            <button class="btn"><a href="">Download</a></button>
        </div>

        <div class="view">
            <h3>Go to--</h3>
           <h3><a href="/profile"><i class="fa-solid fa-user-circle"></i> Profile</a></h3> 
            <!-- <i class="fa-solid fa-arrow-left"></i>
            <i class="fa-brands fa-facebook"></i>  -->
        </div>
    </div>
</template>



<style lang="css" scoped>
h3,h2{
    margin-block-start:10px;
    margin-block-end: 10px;
}
.profile{
    width: 25%;
    color: aliceblue;
    background: rgba(0, 0, 0, 0.8);
    border: 2px solid black;
    float: left;
}
.profile-img{
    width: 100px;
    padding-top: 4px;
}
.btn{
    margin: 5px;
    width: 150px;
    height: 35px;
    font-size: 25px;
    border: none;
    border-radius: 5px;
    background: linear-gradient(to right,rgb(131, 35, 35),rgb(32, 69, 163));
}
a{
    text-decoration: none;
    color: aliceblue;
}
.resume{
    padding: 4px;
    border-radius: 20px;
    background: rgba(0, 0, 0, 0.3);
}
.view{
    text-align: left;
    padding-left: 10%;
}
</style>