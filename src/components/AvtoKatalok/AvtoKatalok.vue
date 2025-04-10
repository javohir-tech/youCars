<template>
  <div class="cars-katalok mt-5">
    <a-row :gutter="[10, 10]" v-if="paginatedCars.length">
      <a-col
        :xs="{ span: 24 }"
        :md="{ span: 8 }"
        v-for="(car, index) in paginatedCars"
        :key="index"
      >
      <!-- ===== Tovars ===== -->
        <RouterLink :to="`${props.router}/${car.id}`">
          <AvtoCard
            :avtomabil="{ ...car, route: props.router }"
            :images="car.image"
            :cost="car.cost"
            :country="car.country"
            :milage="car.milage"
            :model="car.model"
          />
        </RouterLink>
      </a-col>
    </a-row>
    <!-- ==== Pagination ===== -->
    <a-pagination
      class="pagination mt-3"
      v-model:current="current"
      :page-size="pageSize"
      :total="props.avtomobiles.length"
      show-less-items
      @change="onPageChange"
    />
  </div>
</template>
<script setup>
import { computed, ref, toRaw, watch } from 'vue';
import { RouterLink } from 'vue-router';
//components
import AvtoCard from '../Ui/AvtoCard.vue';

const props = defineProps({
  avtomobiles: Array,
  newCurrent: Number,
  router: String,
});

//Pagination
const current = ref(props.newCurrent);
//Tovars in one page
const pageSize = ref(6);

const paginatedCars = computed(() => {
  const start = (current.value - 1) * pageSize.value;
  const end = start + pageSize.value;
  return toRaw(props.avtomobiles).slice(start, end);
});

const onPageChange = (page) => {
  current.value = page;
};

watch(
  () => props.newCurrent,
  (newVal) => {
    current.value = newVal;
  }
);
</script>
<style scoped>
.pagination {
  text-align: center;
}
</style>
