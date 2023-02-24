<template>
    <div v-if="showPopUp" class="popup">
        <div class="pu">
            <h1>Thank You ...!!!</h1>
            <p>For your visit and downloading my Resume.</p>
            <h1>{{ time }}</h1>
            <button @click="showPopUp = false"> Close</button>
        </div>
    </div>
</template>


<script>
export default {
    props: ['popUpdata'],
    data() {
        return {
            popUpData: {},
            showPopUp: true,
            time: 5
        }
    },

    created() {

        for (let i = this.time; i >= 1; i--) {
            setTimeout(() => {
                if(this.time==1){
                    this.showPopUp=false;
                }
                this.time--;
            }, i * 1000)
        }
    }
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
    padding: 30px 50px;
    justify-items: center;
    border: 2px solid black;
    border-radius: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(34, 40, 218, 0.6);
    background-color: rgb(133, 133, 246);
    color: aliceblue;
}

h1 {
    margin: 10px 0;
}

button {
    padding: 5px 20px;
    border-style: none;
    font-size: large;
    background-color: darkgray;
    border-radius: 8px;
}</style>