<template>
    <div class="cars-katalok mt-5">
        <a-row :gutter="[10, 10]" v-if="paginatedCars.length">
            <a-col :xs="{ span: 24 }" :md="{ span: 8 }" :lg="{ span: 6 }" v-for="(car, index) in paginatedCars"
                :key="index">
                <AvtoCard :images="car.image" :cost="car.cost" :country="car.country" :milage="car.milage"
                    :model="car.model" :id-number="car.id" />
            </a-col>
        </a-row>
        <a-pagination class="pagination mt-3" v-model:current="current" :page-size="pageSize"
            :total="props.avtomobiles.length" show-less-items @change="onPageChange" />
    </div>
</template>
<script setup>
import { computed, ref, toRaw, watch } from 'vue';
import AvtoCard from './Ui/AvtoCard.vue';


const props = defineProps({
    avtomobiles: Array,
    newCurrent: Number
})

// console.log(props.avtomobiles)
console.log(toRaw(props.avtomobiles));
console.log(toRaw(props.newCurrent))
// console.log(props.newCurrent)

const current = ref(props.newCurrent);
const pageSize = ref(8)

const paginatedCars = computed(() => {
    const start = (current.value - 1) * pageSize.value
    const end = start + pageSize.value;
    return toRaw(props.avtomobiles).slice(start, end)
})

const onPageChange = (page) => {
    current.value = page
}

watch(() => props.newCurrent, (newVal) => {
    current.value = newVal;
});

</script>
<style scoped>
.pagination {
    text-align: center;
}
</style>