<template>
    <Navbar/>
    <main>
        <RouterView />
    </main>
    <ResponseBanner/>
    <Footer/>
</template>
<script setup>
//components
import { Navbar, ResponseBanner, Footer } from '@/components';

import { RouterView } from 'vue-router';
</script>
<style>
.navbar-laptop {
    display: none;
}
</style>