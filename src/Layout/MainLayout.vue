<template>
    <Navbar />
    <main>
        <RouterView />
    </main>
</template>
<script setup>
import Navbar from '@/components/Navbar.vue';
import { RouterView } from 'vue-router';
</script>
<style>
.navbar-laptop {
    display: none;
}
</style>