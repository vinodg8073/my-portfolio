<template>
    <div class="cert">
        <i class="heading">
            <h1>{{ certificates.heading }}</h1>
        </i>

        <div class="certificates">
            <div class="certificate-card" v-for="certificate in certificates.allCertificates" :key="certificate">
                <img class="certificate-img" :src="`${certificate.imgUrl}`" alt="">
                <div class="details">
                    <h3>{{ certificate.heading2 }}</h3>
                    <p>{{ certificate.details }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            certificates: {}
        }
    },
    methods: {
        fetchEducationData() {
            fetch("certificates.json")
                .then((response) => response.json())
                .then((data) => {
                    this.certificates = data.certificates;
                });
        },
    },
    created() {
        this.fetchEducationData();
    },
}
</script>

<style scoped>
.cert {
    background-color: rgb(245, 248, 248);
    margin: 0px 0px;
    padding: 20px 20px 10px;

}

.certificate-card {
    display: grid;
    grid-auto-columns: 1fr;
    padding: 10px;
    background: #151515;
    color: white;
    margin: 10px 5px 10px 5px;
    border-radius: 10px;
}

.certificates {

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 2fr));
}

img {
    margin: auto;
}

h1 {
    margin: 0;
    padding: 0 0 10px 0;
}

.details {
    display: contents;
    align-items: center;
}

@media (min-width:0) and (max-width: 620px) {
    .certificates {
        display: grid;
        grid-template-columns: 1fr;
    }
}
</style>