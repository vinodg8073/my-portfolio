<template>
    <div class="experience">
        <i><h1>Experience : </h1></i>
        <div class="exp-company" >
            <h2><strong>Amiti Software Technologies Private Limited  <i class="exp-year">(May 2022 - Present)</i></strong></h2>
            <p class="exp-content">
                <ul>
                    <li>
                        <h3>Software Developer</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis in dignissimos quas voluptates voluptatibus, labore aperiam adipisci placeat? Explicabo repellendus reprehenderit error asperiores commodi facilis odio labore porro numquam dicta voluptas harum sequi itaque alias, eveniet architecto rem soluta rerum autem non, quae magni at! Quo autem nemo et hic cupiditate repudiandae culpa minus tempore corrupti blanditiis optio harum explicabo deleniti, architecto repellendus, odit id suscipit non! Magnam iusto ducimus officia deleniti suscipit, cupiditate quisquam excepturi saepe recusandae consequuntur at sequi, numquam aspernatur maiores, impedit pariatur itaque tempore. Nemo quod minima placeat eligendi corporis earum saepe deserunt ut possimus. Quas?</p>
                    </li>
                    <li>
                        <h3>Trainee Software Developer</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet optio ad ex recusandae aliquid debitis doloremque aperiam illo pariatur mollitia? Cupiditate necessitatibus aperiam fuga saepe earum rerum perspiciatis quisquam officia facilis nesciunt! Iusto aspernatur asperiores, nihil dolorem obcaecati repellendus provident modi, blanditiis quaerat quis excepturi nulla, illo eos officiis animi.</p>
                    </li>
                </ul>
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
div{
    /* width: 76.5%; */
    /* float: right; */
    background: rgb(245, 248, 248);
    /* height: 700px; */
    /* border: 10px solid red; */
}

h6{
    /* font-size: large; */
    unicode-bidi: isolate;
    font-variant-numeric: tabular-nums;
    text-transform: none;
    text-indent: 0px !important;
    text-align: start !important;
    text-align-last: start !important;
}
.experience{
    padding: 20px;
}
.exp-company{
    padding-left: 20px;
}
/* .exp-content{
    border-left: 4px solid black;
    margin: 0 0 0 20px;
} */
li{
    margin-top: -10px;
}
li::marker{
    font-size: 30px;
}
ul{
    border-left: 4px solid black;
    padding-left: 17px;
    margin: 0 0 0 20px;
}
.exp-year{
    font-size: medium ;
    color: dimgray;
}
</style>