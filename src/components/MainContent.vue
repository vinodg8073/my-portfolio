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
                    <li><i class="icon fa-solid fa-phone"></i> Contact</li>
                    <span> | </span>
                    <li><a href="https://www.linkedin.com/in/vinod-g-981259194/"><i class="fa-brands fa-linkedin"></i> LinkedIn</a></li>
                    <span> | </span>
                    <li><a href="https://github.com/vinodg8073"><i class="fa-brands fa-github"></i> GitHub</a></li>
                    
                </ul>
                </div>
            </div>
            <div class="profile-content">
                <div class="content-left"></div>
                <div class="content-right"></div>
            </div>
        </div>
        


    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.parent{
    width: 76.5%;
    float: right;
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
    /* background: rgba(0, 0, 0, 0.5); */
    border-radius: 10px;
    color: aliceblue;
}
.icon{
    width: 20px;
}
span{
    font-size: 30px;
}
.profile-content{
    border: 2px solid black;
    height: 350px;
}


</style>