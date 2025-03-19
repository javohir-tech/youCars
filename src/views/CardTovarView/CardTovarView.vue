<template>
    <div class="container">
        cardTovar
    </div>
</template>

<script setup>
import axios from 'axios';

const fetchTovar = async () => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_APP_API}/cars`)
        console.log(response.data)
    } catch (error) {
        
    }
}
</script>

<style scoped></style>