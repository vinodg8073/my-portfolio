<template>
  <nav class="sideBar">
      <button class="bar" @click="setView()"><i class="fa-solid fa-bars"></i></button>
    <div class="profile">
      <img class="profile-img" :src="`${top.imgUrl}`" alt="" />
      <h1 style="margin-bottom: 0px">{{ top.name }}</h1>
      <h3>{{ top.heading }}</h3>
      <div class="resume">
        <h2><i class="fa-solid fa-file-alt"></i> {{ top.heading2 }}</h2>
        <button class="btn" v-for="btn in top.btns" :key="btn" @click="downloadResume()">
          {{ btn }}
        </button>
      </div>
      <h2 class="menu-title">{{ bottom.title }}</h2>
    </div>

    <div class="view">
     
      <ul v-if="!mobileView">
        <li v-for="data in menus" :key="data">
          <button  class="btn2" @click="scrollToPage(`${data.key}`)">
            <i :class="`icon fa-solid ${data.class}`"></i> {{ data.key }}
          </button>
        </li>
        <li><div class="mobileView"><button class="btn md"  @click="downloadResume(), mobileView=true">Download Resume</button></div></li>
      
      </ul>
    </div>
  </nav>
</template>

<script>
import mitt from "mitt";
window.mitt = window.mitt || new mitt();
export default {
  data() {
    return {
      allData: {},
      menus: [],
      top: {},
      bottom: {},
      mobileView:false
    };
  },
  methods: {
    scrollToPage(str) {
      window.mitt.emit("scroll", str);
       
    },
    downloadResume(){
      
      window.mitt.emit('popup','vla')
      
    },
    downloadResume1(){
      if(this.mobileView){
      this.mobileView=false;
        console.log('moooo')
    }
    },
    getAllData() {
      fetch("mock/allData.json")
        .then((response) => response.json())
        .then((data) => {
          this.allData = data;
          this.menus = data.sidePanel.bottom?.menus;
          this.top = data.sidePanel.top;
          this.bottom = data.sidePanel.bottom;
        });
    },
    setView(){
      console.log('view set')
      if(this.mobileView){
        this.mobileView=false
      }
      else this.mobileView=true;
    },
    screenSize(){
      if(window.innerWidth<=980){
      this.mobileView=true}
      else if (window.innerWidth>980){
      this.mobileView=false;
    }
    }
  },
  created() {
    this.getAllData();
    addEventListener('resize',this.screenSize)
  }
};
</script>

<style lang="css" scoped>
@import url("https://fonts.googleapis.com/css?family=Poppins:400,500,600,700&display=swap");

#menubar:checked ~ button {
  color: aqua;
}
.menu-title {
  margin-bottom: 0px;
  text-align: center;
}
h3,
h2 {
  margin-block-start: 10px;
  margin-block-end: 10px;
}
.sideBar {
  position: fixed;
  width: 23%;
  color: aliceblue;
  background: rgba(0, 0, 0, 0.8);
  border: 2px solid black;
  float: left;
  text-align: center;
  height: 100%;
  overflow: scroll;
}
.sideBar::-webkit-scrollbar {
  display: none;
}
.profile-img {
  width: 100px;
  padding-top: 4px;
}
.btn2  {
  background: none;
  border: none;
  text-decoration: none;
  color: aliceblue;
  font-size: 20px;
  padding: 10px;
}
.btn {
  margin: 5px;
  width: 130px;
  height: 35px;
  border: none;
  border-radius: 5px;
  background: linear-gradient(to right, rgb(131, 35, 35), rgb(32, 69, 163));
  cursor: pointer;
  text-decoration: none;
  color: aliceblue;
  font-size: 25px;
}

.md{
  width: 40%;
}
.resume {
  padding: 4px;
  border-radius: 20px;
  background: rgba(0, 0, 0, 0.3);
}
.view {
  text-align: left;
  padding-left: 10%;
}

li {
  list-style: none;
  font-size: 20px;
}
li:hover {
  transform: translateX(4px);
  transition-duration: 0.4s;
}
ul {
  padding: 0;
  margin-top: -5px;
}

.mobileView{
  display: none;
}

.bar{
  display: none;
}
@media (min-width: 0) and (max-width: 979px) {
  .profile {
    display: none;
  }
  .view {
    position: relative;
    width: 100%;
    border: 2px solid black;
    float: left;
    text-align: center;
    padding: 0;
    border: none;
    color: blue;
  }

  .sideBar {
    display: block;
    float: none;
    width: 100%;
    background: none;
  }
  .mobileView{
    display: block;
  }
  #menubar,.bar
 {  
  display: block;
    margin-right: 3%;
    margin-top: 2%;
    z-index: 1;
    position: fixed;
    right: 0;
  }
  ul{
    padding-top: 20px;
    background: rgba(0, 0, 0, 0.8);
  }
  .md{
  width: 70%;
}
}
</style>
