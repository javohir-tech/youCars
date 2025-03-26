<template>
    <a-row v-if="marks.length">
        <a-col v-for="mark in marks" :key="mark.id" :xs="{ span: 8 }" :md="{ span: 6 }" :lg="{ span: 4 }"
            class="mark-box">
            <img :src="mark.image" class="img-fluid" alt="">
        </a-col>
    </a-row>
    <div v-else class="loader shadow">
        <a-spin />
    </div>
</template>
<script setup>
//vue
import { onMounted, ref, watch } from 'vue';

//Hooks
import { useFetch } from '@/Hooks/UseFatch';

const marks = ref([])

const { data, get } = useFetch(`${import.meta.env.VITE_APP_API}/marks`)

watch(data, (newData) => {
    marks.value = newData
})

</script>
<style scoped>
.mark-box {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
    border: 1px solid rgba(241, 241, 241, 1);
    transition: all 0.3s ease;
}

.mark-box:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15) !important;
}

@media(max-width:576px) {
    .mark-box {
        height: 100px;
    }
}
</style>