<template>
    <div class="container">
        <div class="response-banner mt-5">
            <a-row justify="space-between" align="center" >
                <a-col :xs="{ span: 24 }" :lg="{ span: 11 }">
                    <h2>Не можете определится с выбором?</h2>
                    <p class="my-3">Оставьте заявку, и наши менеджеры проконсультируют вас!</p>
                    <button>Оставить заявку</button>
                </a-col>
                <a-col :xs="{ span: 24 }" :lg="{ span: 11 }">
                    <img src="../../assets/Images/responseBanner.png" class="img-fluid" alt="banner-image">
                </a-col>
            </a-row>
        </div>
    </div>
</template>
<script setup>

</script>
<style scoped>
.response-banner {
    background-color: red;
    padding: 30px 40px;
    border-radius: 10px;
    background: linear-gradient(90deg, #3593F3 50.44%, #0C74DF 80.16%);
    color: rgba(255, 255, 255, 1);

    h2 {
        font-weight: 500;
        font-size: 28px;
    }

    p {
        font-weight: 400;
        font-size: 14px;
    }

    button {
        background-color: rgba(113, 178, 247, 1);
        border: none;
        padding: 15px 20px;
    }
}
</style>