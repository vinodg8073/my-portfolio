<template>
    <div class="skills">
        <h1><strong><i>Skills :</i></strong></h1>
        <ul>
            <li>
                <h3 class="bar">HTML</h3><div class="html right"></div>
                <span class="percentage">85%</span>
            </li><br>
            <li>
                <h3 class="bar">CSS</h3><div class="p70 right" style="background-color: dodgerblue;"></div>
                <span class="percentage">70%</span>
            </li><br>
            <li>
                <h3 class="bar">JAVASCRIPT</h3><div class="js right p75" style="background-color: yellow;"></div>
                <span class="percentage">75%</span>
            </li><br>
            <li>
                <h3 class="bar">VUE JS</h3><div class="vue right p75" style="background-color: green;"></div>
                <span class="percentage">75%</span>
            </li><br>
            <li>
                <h3 class="bar sjs">STENCIL JS</h3><div class="right p65" style="background-color: rgba(0, 0, 0, 0.7);"></div>
                <span class="percentage">65%</span>
            </li><br>
            <li>
                <h3 class="bar">JAVA</h3><div class="java right"></div>
                <span class="percentage">85%</span>
            </li><br>
            <li>
                <h3 class="bar spring">SPRING</h3><div class="p70 right" style="background-color: lightgreen;"></div>
                <span class="percentage">70%</span>
            </li><br>
            <li>
                <h3 class="bar bcss">BOOTSTRAP</h3><div class="p70 right" style="background-color: purple;"></div>
                <span class="percentage">70%</span>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
       name:'my-skills' 
    }
</script>

<style scoped>
h1{
    margin-top: 0;
}
.p70{
    width: 40%;
}
.p65{
    width: 35%;
}
.p75
{
    width: 45%;
}
.right{
    float: left;
    height: 10px;
    border-radius: 10px;
    margin: 7px 0px 0px 0px;
}
.skill-bar{
background-color: aquamarine;
}

.bar{
    border-radius: 15px;
    margin: 3px 0;
    width:20%;
    margin: 0px;
    float: left;
}
.html,.java{
    width: 55%;
    background-color: red;
}
.percentage{
    bottom: 2px;
    padding-left:10px;
}
ul{
    margin: 0;
}
li{
    list-style: none;
}
.skills{
    background: rgb(245, 248, 248);
    padding: 20px;
}
.css{
    background-color: dodgerblue;
    width: 40%;
}
@media (min-width:0) and (max-width: 800px) {
    ul{
        padding-left: 15px;
    }
.bar{
    margin: 3px 0;
    width:20%;
    margin-right: 30px;
    float: left;
    font-size: 13px;
    font-weight: 10px;
} 
.html,.java{
    width: 52%;
}
}
</style>