<template>
    <div v-if="showPopUp" class="popup">
        <div class="pu">
            <h1>Thank You ...!!!</h1>
            <p>For your visit and downloading my Resume.</p>
            
            <button @click="showPopUp = false"> Close</button>
            <p>will close in {{ time }} seconds</p>
        </div>
    </div>
</template>


<script>
import mitt from "mitt";
window.mitt = window.mitt || new mitt();
export default {
    props: ['popUpdata'],
    data() {
        return {
            popUpData: {},
            showPopUp: false,
            time: 10
        }
    },

    created() {
        window.mitt.on('popup',(value)=>{
            console.log("PopUp Created",value)
            this.showPopUp=true;
            this.time=10;
        for (let i = this.time; i >= 1; i--) {
            setTimeout(() => {
                if(this.time==1){
                    this.showPopUp=false;
                }
                this.time--;
            }, i * 1000)
        }
    })  
       
    },
    
}
</script>

<style scoped>

.popup {
    /*  */
    /* -colobackgroundr: red; */
    /* margin: auto; */

    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.4);
}

.pu {
    display: grid;
    padding: 20px 50px;
    /* justify-items: center; */
    text-align: center;
    border: 2px solid black;
    border-radius: 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(34, 40, 218, 0.6);
    background-color: rgba(0, 0, 0, 0.7);
    color: aliceblue;
}

h1 {
    margin: 10px 0;
    text-shadow: 4px 1px rgb(75, 74, 74)
}

button {
    padding: 5px 20px;
    border-style: none;
    font-size: large;
    background-color: rgb(76, 46, 173);
    border-radius: 8px;
    width: 30%;
    margin: auto;
    color: burlywood;
}
button:hover{
    width: 32%;

    cursor: zoom-in;
}
</style>