<template>
    <div class="parent">
        <div class="prof" id="#profile">
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
                <div class="content-left">
                    <h1>Bio</h1>
                    <h2>Hello,</h2>
                    <h3>I am a full stack developer living in Karnataka and I have experience in building functional and responsive websites using frameworks like Vue js and Stencil js.</h3>
                    <h3>You can get in touch with me here</h3>
                    <a class="bio" href="mailto:vinodgowda1998@gmail.com"><i class="fa-solid fa-square-envelope"></i> vinodgowda1998@gmail.com</a>
                    <a class="bio" href="tel:8073869494"><i class="icon fa-solid fa-phone"></i> +91-8073869494</a>
                    <br><br><br><br>
                </div>
                <div class="content-right">
                    <h1><i class="fa-solid fa-circle-info"></i> Information</h1>
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
.d2
{
    height: 500px;
}
.d3{
    height: 200px;
    border: 2px solid black;
}
.parent{
    width: 76.5%;
    float: right;
    background: rgb(226, 245, 248);
}
.profile-header{
    background: rgba(0, 0, 0, 0.1);
    /* display: block; */
}
.profile-img{
    margin: 20px;
    margin-top: 10px;
    width: 300px;
    height: 350px;
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
/* .profile-content{
    border: 2px solid black;
    height: 350px;
} */
.content-left{
    float: left;
    width: 49%;
    /* margin: 15px;
    margin-right: 15px; */
    margin-left: -27%;
    border-right: 3px solid black;
}
.bio{
    border: black 2px solid;
    padding: 10px;
    background: rgba(170, 185, 236, 0.6);
    margin-right: 10px;
    border-radius: 10px;
}
.bio:hover{
    border: rgb(11, 4, 111) 2px solid;
    padding: 12px;
    margin-top: 5px;
    margin-left: 5px;
    background: rgba(4, 17, 59, 0.6);
}
.profile-content{
    width: 100%;
}
.content-right{
    float: right;
    justify-content: left;
    width: 47%;
    margin: 0px;
}
</style>