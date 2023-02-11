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
    background-color:  rgb(245, 248, 248);
    margin: 0px 0px;
    padding: 20px 20px 10px ;
 }
h1{
    margin: 0%;
    padding: 0 0 10px 0;
}
 .achievment{
    
    display: grid;
    grid-template-columns: 2fr 1fr;
    padding: 10px;
    background: #151515;
    color: white;
    margin: 10px 5px 10px 5px;
    border-radius: 10px;
    }

    img{
        margin: auto;
    }
    @media (min-width:0) and (max-width: 620px) {
    .achievment{
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 2fr;
    }
    h3{
        border-bottom: 2px solid whitesmoke;
    }
    }
</style>