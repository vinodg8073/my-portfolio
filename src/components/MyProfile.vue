<template>
    <div class="parent" ref="ie">
        <!-- <button @click="goto('ii')">ii</button>
        <button @click="goto('iii')">iii</button> -->
            <div class="profile-header">
                <div class="header-left"><img class="profile-img" src="@/assets/profile.jpg" alt=""/></div>
                <div class="header-right">
                <p><strong><i>VINOD G</i></strong></p>
                <h1>Full Stack Software Developer</h1>
                <ul>
                    <li><a href="mailto:vinodgowda1998@gmail.com"><i class="fa-solid fa-square-envelope"></i> G-Mail</a></li>
                    <span> | </span>
                    <li><a href="tel:8073869494"><i class="icon fa-solid fa-phone"></i> Contact</a></li>
                    <span> | </span>
                    <li><a href="https://www.linkedin.com/in/vinod-g-981259194/"><i class="fa-brands fa-linkedin"></i> LinkedIn</a></li>
                    <span> | </span>
                    <li><a href="https://github.com/vinodg8073"><i class="fa-brands fa-github"></i> GitHub</a></li>
                    
                </ul>
            </div>
            </div>
            <div class="profile-content">
                <div class="content-left" >
                <h2><i class="fa-solid fa-user" style="text-decoration: none;"> </i> <span class="ul">Bio :</span></h2>
                <div style="margin-left: 30px">
                <p class="bio-text">Hello,</p>
                <p class="bio-text">I'm a Software Developer with experience in building both front end and back end web applocations using popular frameworks. Experience with source control systems Git. Continuously involved in learning process.</p>
                <!-- <h3>I am a full stack developer living in Karnataka and I have experience in building functional and responsive websites using frameworks like Vue js and Stencil js.</h3> -->
                <h2>Hobbies :</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ea!</p>
            </div>
            </div>
                <div class="content-right">
                
                    <h2 ><i class="fa-solid fa-circle-info" style="text-decoration: none;"> </i> <span class="ul">Information :</span> </h2> 
                <div style="margin-left: 30px;">
                <table>
                    <tr>
                        <th>Gender</th>
                        <td> : </td>
                        <td>Male</td>
                    </tr>
                    <tr>
                        <th>DOB</th>
                        <td> : </td>
                        <td>17/08/1998</td>
                    </tr>
                    <tr>
                        <th>Address</th>
                        <td> : </td>
                        <td><address>Bheemasandra, SSMC Post, Tumkur, Karnataka 572107</address></td>
                    </tr>
                </table>
                <h3 class="ul">You can get in touch with me here :</h3>
                <a class="bio" href="tel:8073869494"><i class="fa-solid fa-phone"></i> +91-8073869494</a> 
                <a class="bio" href="mailto:vinodgowda1998@gmail.com"><i class="fa-solid fa-square-envelope"></i> vinodgowda1998@gmail.com</a>
            </div>    
            </div>
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

<style scoped>
.bio-text{
    font-size: large;
}
.ul{
    text-decoration: underline;
}
.i{
    height: 400px;
    border: 5px solid red;
}
th{
   text-align: left; 
   padding: 5px;

}

table{
    font-size: 20px;
}

.parent{
    /* width: 76.5%; */
    /* float: right; */
    background: rgb(245, 248, 248);
}
.profile-header{
    background: rgba(0, 0, 0, 0.1);
    /* display: block; */
}
.profile-img{
    margin: 20px;
    margin-top: 10px;
    width: 300px;
    height: 320px;
}
.header-left{
    float: left;
}
.header-right{
    text-align: center;
    padding-top: 20px;
}
.header-right p{
    font-size: 100px;
    margin-bottom: 0px;
}
ul{
    display: flex;
    justify-content: center;
    /* border: 2px solid black; */
}
li{
    list-style: none;
    float: left;
    font-size: 20px;
    padding: 10px;
    color: black;
    width: 200px;

}
a{
    text-decoration: none;
    color: black;
}

li:hover{
    
    background: rgba(0, 0, 0, 0.6);
    border-radius: 10px;
    color: aliceblue;
}
a:hover{
    border-radius: 10px;
    color: aliceblue;
}
.icon{
    width: 20px;
}
span{
    font-size: 30px;
}

.content-left{
    float: left;
    /* size: 400px 300px; */
    justify-content: left;

    border-right: 3px solid black;
}
.bio{
    text-align: center;
    display: inline-block;
    border: black 2px solid;
    padding: 10px;
    background: rgba(170, 185, 236, 0.6);
    border-radius: 10px;
    min-width: 40%;
    margin: 5px;
    /* margin: auto; */
    
}
.bio:hover{
    border: rgb(11, 4, 111) 2px solid;
    padding: 12px;
    background: rgba(4, 17, 59, 0.6);
    margin: auto;
}
.profile-content{
    width: 100%;
    display: flex;
    padding: 10px;
    padding-top: 0px;
    min-height: 340px;
}
.content-left{
    float: left; 
    width: 48%;
    border-right: 5px solid black;
    margin-right: 10px;
}
.content-right{
    width: 48%;
}

</style>