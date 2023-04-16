<template>
    <div class="parent" ref="ie">
        <div class="profile-header">
            <div class="header-left">
                <img class="profile-img" src="@/assets/profile.jpg" alt="" />
            </div>
            <div class="header-right">
                <p>
                    <strong><i>{{ profileDatas.pname }}</i></strong>
                </p>
                <h1>{{ profileDatas.heading }}</h1>
                <ul>
                    <li v-for="btn of profileDatas.btnLinks" :key="btn">
                        <a href="`${btn.href}`" target="`${btn.target}`"><i :class="`${btn.icon} icon`"></i>
                            &nbsp;
                            <p class="p">{{ btn.text }}</p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="profile-content">
            <div class="content-left">
                <h2>
                    <i class="fa-solid fa-user" style="text-decoration: none"> </i>
                    <span>&nbsp;</span>
                    <span class="ul">{{ bio.heading }}</span>
                </h2>
                <div style="margin-left: 30px">
                    <p class="bio-text">{{ bio.greet }}</p>
                    <p class="bio-text">{{ bio.description }}
                    </p>
                    <h2>{{ bio.text2 }}</h2>
                    <p>{{ bio.description2 }}
                    </p>
                </div>
            </div>
            <div class="content-right">
                <h2>
                    <i class="fa-solid fa-circle-info" style="text-decoration: none"> </i>
                    <span>&nbsp;</span>
                    <span class="ul">{{ infos.heading }}</span>
                </h2>
                <div style="margin-left: 30px">
                    <table>
                        <tr v-for=" record in infos.table" :key="record">
                            <th>{{ record.key }}</th>
                            <td>:</td>
                            <td>{{ record.value }}</td>
                        </tr>
                    </table>
                    <h3 class="ul">{{ infos.text1 }}</h3>
                    <a v-for="btn in infos.btns" :key="btn" class="bio" :href="`${btn.href}`"><i
                            :class="`${btn.icon}`"></i> &nbsp;{{ btn.text }}</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:['profile'],
    data() {
        return {
            profileDatas: {},
            bio: {},
            infos: {}
        };
    },
    
    methods: {
        setDatas() {
            this.profileDatas=this.profile;
        this.bio=this.profile.bio;
        this.infos=this.profile.info
         },
    },
    
    updated(){
        this.setDatas();
    }
};
</script>

<style scoped>
li:nth-child(-n+3) {
    border-right: 2px solid black;
}

.bio-text {
    font-size: large;
}

.ul {
    text-decoration: underline;
}

.i {
    height: 400px;
    border: 5px solid red;
}

th {
    text-align: left;
    padding: 5px;
}

table {
    font-size: 20px;
}

.parent {
    /* width: 76.5%; */
    /* float: right; */
    background: rgb(245, 248, 248);
}

.profile-header {
    background: rgba(0, 0, 0, 0.1);
    display: grid;
    grid-template-columns: 25% 75%;
}

.profile-img {
    margin: 20px;
    margin-top: 10px;
    width: 300px;
    height: 320px;
}

.header-left {
    /* float: left; */
    margin: auto;
}

.header-right {
    text-align: center;
    padding-top: 20px;
}

.header-right p {
    font-size: 100px;
    margin-bottom: 0px;
}

ul {
    display: flex;
    justify-content: center;
    /* border: 2px solid black; */

}

li {
    list-style: none;
    float: left;
    font-size: 20px;
    padding: 10px;
    color: black;
    width: 200px;
}

a {
    text-decoration: none;
    color: black;
    padding: 8px 25px;
}

li a:hover {
    background: rgba(0, 0, 0, 0.8);
    border-radius: 10px;
    color: aliceblue;
    padding: 8px 25px;
    margin-top: -3px;
    border: 2px solid rgb(89, 89, 232);
    box-shadow: 10px 5px 10px 2px rgba(70, 123, 228, 0.7);
}

a:hover {
    border-radius: 10px;
    color: aliceblue;
}

.icon {
    width: 20px;
}

span {
    font-size: 30px;
}

.bio {
    text-align: center;
    display: inline-block;
    border: black 2px solid;
    padding: 10px;
    background: rgba(170, 185, 236, 0.6);
    border-radius: 10px;
    min-width: 40%;
    margin: 5px;
}

.bio:hover {
    border: rgb(11, 4, 111) 2px solid;
    padding: 12px;
    background: rgba(4, 17, 59, 0.6);
    margin: auto;
}

.profile-content {
    width: 100%;
    padding: 15px;
    min-height: 340px;
    display: grid;
    grid-template-columns: 1fr 1fr;
}

.content-left {
    border-right: 5px solid black;
    margin-right: 10px;
    padding-right: 10px;
}

.content-right {
    padding-right: 15px;
}

p.p {
    font-size: 20px;
    display: inline;
}

@media (min-width: 0) and (max-width: 800px) {
    .profile-content {
        display: grid;
        grid-template-columns: 1fr;
    }

    .profile-header {
        display: grid;
        grid-template-columns: 1fr;
    }

    .content-left {
        border: 0;
    }

    .header-left {
        float: none;
        display: flex;
        justify-content: center;
        align-content: center;
        margin: auto;
    }

    .profile-img {
        justify-self: center;
        width: 300px;
        height: 320px;
        margin: auto;
    }

    .profile-header {
        background: rgba(0, 0, 0, 0.1);
        display: grid;
        grid-template-columns: 1fr;
    }

    ul {
        padding-left: 0px;
    }

    li {
        padding: 7px;
        width: auto;
    }

    p {
        margin: 0px;
    }

    a {
        font-size: 15px;
    }

    li a {
    background: rgba(0, 0, 0, 0.8);
    border-radius: 10px;
    color: aliceblue;
    padding: 10px;
    margin-top: -3px;
    border: 2px solid rgb(89, 89, 232);
    box-shadow: 10px 5px 10px 2px rgba(70, 123, 228, 0.7);
    font-size: 25px;
}
    

    p.p {
        font-size: 20px;
        display: inline;
    }
}

@media (min-width: 0) and (max-width: 420px) {
    .header-right p {
        font-size: 50px;
        margin-bottom: 0px;
    }

    a {
        font-size: 10px;
    }

    li {
        display: grid;
        grid-template-columns: 2fr;
    }

    li a {
        padding: 0 10px;
        font-size: 25px;
    }

    p.p {
        font-size: 12px;
        display: block;
    }
    .icon{
       padding-left: 13px;
    }
}

@media (min-width: 801px) and (max-width: 1300px) {
    .profile-header {
        background: rgba(0, 0, 0, 0.1);
        display: grid;
        grid-template-columns: 1fr;
    }

    .profile-header p {
        margin: 0;
    }

    li a {
        padding: 25px;
    }

    li {
        list-style: none;
        float: left;
        font-size: 20px;
        color: black;
        width: auto;
    }

    li a:hover {
        border-radius: 3px;
        padding: 3px 7px;
        border: 2px solid rgb(89, 89, 232);
        box-shadow: 10px 5px 10px 2px rgba(70, 123, 228, 0.7);
    }
}
</style>
