<template>
    <div class="achievments">
        <i class="heading"><h1>Achievements : </h1></i>
        <div class="achievments-list">
            <div class="achievment">
                <img  class="img1" src="@/assets/logo.png" alt="">
                <div class="details">
                <h3>Java Full Stack Development Course Certificate Nov(2021) - May(2022)</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis quam rem doloremque dolorem nesciunt ipsum repudiandae mollitia, deserunt incidunt provident id. Nulla eaque quae veritatis!</p>
                </div>
            </div>
            <div class="achievment">
                <img  class="img2" src="@/assets/logo.png" alt="">
                <div class="details">
                <h3>Java Full Stack Development Course Certificate Nov(2021) - May(2022)</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis quam rem doloremque dolorem nesciunt ipsum repudiandae mollitia, deserunt incidunt provident id. Nulla eaque quae veritatis!</p>
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
.achievments{

}
.achievments{
    /* display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 2fr)); */
    background-color:  rgb(245, 248, 248);
    margin: 0px 0px;
    padding: 10px 20px;
 }
h1{
    margin: 0%;
    padding: 0 0 10px 0;
}
 .achievment{
    
    display: grid;
    /* grid-template-columns: repeat(auto-fit, minmax(400px, 2fr)); */
    grid-template-columns: 2fr 1fr;
    grid-area: 2 1;
    /* grid-template: 2fr;
    grid-auto-columns: 2fr; */
    /* grid-area: 2fr; */
    padding: 10px;
    background: #151515;
    color: white;
    margin: 10px 5px 10px 5px;
    border-radius: 10px;
    }

    img{
        margin: auto;
    }
</style>