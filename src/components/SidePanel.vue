

<template>
    <nav class="sideBar">
        <div class="bar">

            <input type="checkbox" id="menubar">
        <label for="menubar"><i class="fa-solid fa-bars"></i></label>
  </div>
 
          <div class="profile" >
        <img class="profile-img" src="@/assets/profile.jpg" alt="">
        <h1 style="margin-bottom: 0px;">Vinod G</h1>
        <h3 >Full Stack Software Developer</h3>
        <div class="resume">
            <h2><i class="fa-solid fa-file-alt"></i> Resume</h2>
            <button class="btn"><a href="">View</a></button>
            <button class="btn"><a href="">Download</a></button>
        </div>
        <h2 class="menu-title">View</h2>
    </div>
    
        <div class="view">
           
          <ul>
           <li><button @click="scrollToPage('profile')"><i class="icon fa-solid fa-user-circle"></i> Profile</button></li>
           <li><button @click="scrollToPage('experience')"><i class="icon fa-solid fa-briefcase"></i> Experience</button></li> 
           <li><button @click="scrollToPage('education')"><i class="icon fa-solid fa-graduation-cap"></i> Education</button></li> 
           <li><button @click="scrollToPage('skills')"> <i class="icon fa-solid fa-code"></i> Skills</button></li> 
           <li><button @click="scrollToPage('achievements')"><i class="icon fa-solid fa-award"></i> Achievement</button></li> 
           <li><button @click="scrollToPage('certification')"><i class="icon fa-solid fa-certificate"></i> Certification</button></li> 
           <li><button @click="scrollToPage('projects')"><i class="icon fa-solid fa-diagram-project"></i> Projects</button></li> 
            <li><button @click="scrollToPage('activities')"><i class="icon fa-solid fa-cubes"></i> Activities</button></li>
        </ul> 
        </div>
    
</nav>
</template>

<script>

//    import mainPageVue from './mainPage.vue';
    export default {
//         methods: {
//     goto(refName) {
//       var element = this.$refs[refName];
//       var top = element.offsetTop;
//         console.log('working');
//       window.scrollTo(0, top);
//     }
//   }
methods: {
         openModal() {
         }
      }

    }
</script>


<style lang="css" scoped>

@import url('https://fonts.googleapis.com/css?family=Poppins:400,500,600,700&display=swap');



#menubar:checked ~ button{
    color: aqua;
}
.menu-title{
 margin-bottom: 0px;
 text-align: center;
}
h3,h2{
    margin-block-start:10px;
    margin-block-end: 10px;
}
.sideBar{
    position: fixed;
    width: 23%;
    color: aliceblue;
    background: rgba(0, 0, 0, 0.8);
    border: 2px solid black;
    float: left;
    text-align: center;
    height: 100%;
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
    font-size: 20px;
}
button{
    background: none;
    border: none;
    text-decoration: none;
    color: aliceblue;
    font-size: 20px;
    
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
}
li{
    list-style: none;
    font-size: 20px;
    padding: 10px;
}
li:hover{
    transform: translateX(4px);
    transition-duration: .4s;
}
ul{
    padding: 0;
    margin-top: -5px;
}

@media (min-width:0) and (max-width: 979px) {
    .profile{
        display: none;
    }
.view{
    
    position: relative;
    width: 100%;
    border: 2px solid black;
    float: left;
    text-align: center;
    /* left: %; */
    padding: 0;
    border: none;
    color: blue;
}

.sideBar{
    float: none;
    width: 100%;
}

#menubar,.bar {
    display:block;
    float: right;
    margin-right: 30px;
    font-size: 30px;
    color: rgba(205, 28, 28, 0.636);
    /* background: rgba(0, 0, 0, 0.8); */
}


  
}
</style>