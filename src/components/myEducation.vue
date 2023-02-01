<template>
    <div class="education">
        <i><h1>Education : </h1></i>
        <div class="college">
            <strong><h2>Sri Siddhartha Institute of Technology </h2></strong>
            <div class="course">
                <h3 class="left">Bachelor of Engineering : Electrical and Electronics Engineering</h3> <h4 class="mid">CGPA : 7.81</h4> <h4 class="right"><i>Aug 2017 - Aug 2021</i></h4>
            </div>
        </div>
        
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.education{

    background: rgb(245, 248, 248);
    margin: 0px 0px;
    padding: 20px;
}
.college{
    padding-left: 20px;
    
}

h3,h4{
    margin: 0px;
    
}
h4{
    color: dimgray;
}
.course{
    padding-left: 20px;
    margin: 0px;
    display: grid;
    grid-column: 3;
    grid-template-areas: "left mid right";
}

</style>