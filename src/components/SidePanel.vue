<template>
  <nav class="sideBar">
    <div class="bar">
      <input type="checkbox" id="menubar" />
      <label for="menubar"><i class="fa-solid fa-bars"></i></label>
    </div>

    <div class="profile">
      <img class="profile-img" :src="`${top.imgUrl}`" alt="" />
      <h1 style="margin-bottom: 0px">{{ top.name }}</h1>
      <h3>{{ top.heading }}</h3>
      <div class="resume">
        <h2><i class="fa-solid fa-file-alt"></i> {{ top.heading2 }}</h2>
        <button class="btn" v-for="btn in top.btns" :key="btn">
          <a href="">{{ btn }}</a>
        </button>
      </div>
      <h2 class="menu-title">{{ bottom.title }}</h2>
    </div>

    <div class="view">
      <ul>
        <li v-for="data in menus" :key="data">
          <button @click="scrollToPage(`${data.key}`)">
            <i :class="`icon fa-solid ${data.class}`"></i> {{ data.key }}
          </button>
        </li>
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
    };
  },
  methods: {
    scrollToPage(str) {
      window.mitt.emit("scroll", str);
    },
    getAllData() {
      fetch("allData.json")
        .then((response) => response.json())
        .then((data) => {
          this.allData = data;
          this.menus = data.sidePanel.bottom?.menus;
          this.top = data.sidePanel.top;
          this.bottom = data.sidePanel.bottom;
          console.log(this.allData, this.menus);
        });
    },
  },
  created() {
    this.getAllData();
  },
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
button {
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
}
.btn a {
  text-decoration: none;
  color: aliceblue;
  font-size: 23px;
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
.icon {
  width: 30px;
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
    /* left: %; */
    padding: 0;
    border: none;
    color: blue;
  }

  .sideBar {
    display: none;
    float: none;
    width: 100%;
  }

  #menubar,
  .bar {
    display: block;
    float: right;
    margin-right: 30px;
    font-size: 30px;
    color: rgba(205, 28, 28, 0.636);
  }
}
</style>
