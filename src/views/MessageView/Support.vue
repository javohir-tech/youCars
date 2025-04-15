<template>
    <div v-if="userStore.userInfo.token">
        support
    </div>
    <div v-else class="not-registed">
        <p class="mb-0">
            Уведомления будут доступны
        </p>
        <router-link to="/register">после регистрации</router-link>
    </div>
</template>

<script setup>
//userInfo
import { useUserStore } from '@/Stores/useUserStore';

const userStore = useUserStore()
</script>

<style scoped>
.not-registered {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    height: 300px;

}

@media(max-width:768px) {
    .not-registered {
        height: 250px;
    }
}
</style>