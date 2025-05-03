<template>
  <div v-if="loading" class="loader shadow">
    <a-spin />
  </div>
  <a-row v-else-if="marks.length">
    <a-col
      v-for="(mark, index) in marks"
      :key="index"
      :xs="{ span: 8 }"
      :md="{ span: 6 }"
      :lg="{ span: 4 }"
    >
    <a-skeleton-input 
            v-if="loadingSkeleton[index]"
            :active="true"
            :key="mark.id"
            :block="true"
            style="width: 100%; height: 200px !important; border-radius: 8px"
            />
  <div class="mark-box"  v-show="!loadingSkeleton[index]">
            <img
            :key="mark.id"
        :src="mark.image"
        class="img-fluid mark-image"
        alt="marka"
        @load="onImageLoad(index)"
      />
  </div>
    </a-col>
  </a-row>
  <a-result
    v-else-if="error"
    status="404"
    title="404"
    sub-title="Sorry, An error occurred while loading the data!"
  />
</template>
<script setup>
//vue
import { ref, watch } from 'vue';

//Hooks
import { useFetch } from '@/Hooks/UseFatch';

const marks = ref([]);

const { data, loading, error } = useFetch(
  `${import.meta.env.VITE_APP_API}/marks`
);

const loadingSkeleton = ref([]);

/// Skeletonni to‘g‘ri sozlash uchun:
watch(data, (newData) => {
  if (Array.isArray(newData)) {
    marks.value = newData;
    loadingSkeleton.value = newData.map(() => true);
  }
});

// Rasm yuklanganda skeletonni yashirish
function onImageLoad(index) {
  loadingSkeleton.value[index] = false;
}
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

@media (max-width: 576px) {
  .mark-box {
    height: 100px;
  }
  .mark-image {
    width: 70% !important;
  }
}
</style>
