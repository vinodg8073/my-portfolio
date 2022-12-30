<template>
    <div>
        <h2><strong><i>Skills :</i></strong></h2>
        <ul>
            <li>
                <span class="bar html">HTML</span>
                <span class="percentage">85%</span>
            </li>
            <li>
                <span class="bar css">CSS</span>
                <span class="percentage">70%</span>
            </li>
            <li>
                <span class="bar js">JAVASCRIPT</span>
                <span class="percentage">75%</span>
            </li>
            <li>
                <span class="bar vue">VUE JS</span>
                <span class="percentage">75%</span>
            </li>
            <li>
                <span class="bar sjs">STENCIL JS</span>
                <span class="percentage">65%</span>
            </li>
            <li>
                <span class="bar java">JAVA</span>
                <span class="percentage">85%</span>
            </li>
            <li>
                <span class="bar spring">SPRING</span>
                <span class="percentage">70%</span>
            </li>
            <li>
                <span class="bar bcss">BOOTSTRAP</span>
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
.skill-bar{
background-color: aquamarine;
}
.bar{
    height: 2px;
    border-radius: 15px;
    margin: 3px 0;

    /* position: relative;
    animation: skill-bar;
    animation-duration: 1s; */


}
.html,.java{
    width: 85%;
    background-color: red;
}
.percentage{
    position: absolute;
    bottom: 2px;
    /* right: 0; */
}
li{
    list-style: none;
}
</style>