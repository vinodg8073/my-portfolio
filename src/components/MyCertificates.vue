<template>
    <div class="cert">
        <i class="heading"><h1>Certificates : </h1></i>
    
    <div class="certificates">
    
    <div class="certificate-card">
        <img  class="certificate-img" src="@/assets/logo.png" alt="">
        <div class="details">
            <h3>Java Full Stack Development Course Certificate Nov(2021) - May(2022)</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis quam rem doloremque dolorem nesciunt ipsum repudiandae mollitia, deserunt incidunt provident id. Nulla eaque quae veritatis!</p>
        </div>
    </div>
    <div class="certificate-card">
        <img  class="certificate-img" src="@/assets/logo.png" alt="">
        <div class="details">
            <h3>Java Full Stack Development Course Certificate Nov(2021) - May(2022)</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis quam rem doloremque dolorem nesciunt ipsum repudiandae mollitia, deserunt incidunt provident id. Nulla eaque quae veritatis!</p>
        </div>
    </div>
    <div class="certificate-card">
        <img  class="certificate-img" src="@/assets/logo.png" alt="">
        <div class="details">
            <h3>Java Full Stack Development Course Certificate Nov(2021) - May(2022)</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis quam rem doloremque dolorem nesciunt ipsum repudiandae mollitia, deserunt incidunt provident id. Nulla eaque quae veritatis!</p>
        </div>
    </div>
    <div class="certificate-card">
        <img  class="certificate-img" src="@/assets/logo.png" alt="">
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

.cert{
    background-color:  rgb(245, 248, 248);
    margin: 0px 0px;
    padding: 20px 20px 10px;
    
}
.certificate-card{
    display: grid;
    grid-auto-columns: 1fr;
    padding: 10px;
    background: #151515;
    color: white;
    margin: 10px 5px 10px 5px;
    border-radius: 10px;
 }

 .certificates{
    
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 2fr));
 }

 img{
    margin: auto;
 }

 h1{
    margin: 0;
    padding: 0 0 10px 0;
 }
 .details{
    display: contents;
    align-items: center;
 }

 @media (min-width:0) and (max-width: 620px) {
    .certificates{
        display: grid;
        grid-template-columns: 1fr;
    }
}
</style>