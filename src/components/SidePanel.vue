

<template>
    
    <div class="profile" >
        <img class="profile-img" src="@/assets/profile.jpg" alt="">
        <h1 style="margin-bottom: 0px;">Vinod G</h1>
        <h3 >Full Stack Software Developer</h3>
        <div class="resume">
            <h2><i class="fa-solid fa-file-alt"></i> Resume</h2>
            <button class="btn"><a href="">View</a></button>
            <button class="btn"><a href="">Download</a></button>
        </div>

        <div class="view">
           <h2>View</h2>
          
           <p><a href="/"><i class="icon fa-solid fa-user-circle"></i> Profile</a></p>
           <p><a href="/experience"><i class="icon fa-solid fa-briefcase"></i> Experience</a></p> 
           <p><a href="/profile"><i class="icon fa-solid fa-code"></i> Skills</a></p> 
           <p><a href="/profile"><i class="icon fa-solid fa-graduation-cap"></i> Education</a></p> 
           <p><a href="/profile"><i class="icon fa-solid fa-award"></i> Achievement</a></p> 
           <p><a href="/profile"><i class="icon fa-solid fa-certificate"></i> Certification</a></p> 
           <p><a href="/profile"><i class="icon fa-solid fa-diagram-project"></i> Projects</a></p> 
            <p><a href=""><i class="icon fa-solid fa-cubes"></i> Activities</a></p>
            
        </div>
    </div>
</template>

<script>

   
    export default {
        methods: {
    goto(refName) {
      var element = this.$refs[refName];
      var top = element.offsetTop;
        console.log('working');
      window.scrollTo(0, top);
    }
  }

    }
</script>


<style lang="css" scoped>
h3,h2{
    margin-block-start:10px;
    margin-block-end: 10px;
}
.profile{
    position: fixed;
    width: 23%;
    color: aliceblue;
    background: rgba(0, 0, 0, 0.8);
    border: 2px solid black;
    float: left;
    text-align: center;
}
.profile-img{
    width: 100px;
    padding-top: 4px;
}
.btn{
    margin: 5px;
    width: 130px;
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
.icon {
    width: 30px;
    font-size: 20px;
}
p{
    font-size: 20px;
}
</style>