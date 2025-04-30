<template>
  <div class="container">
    <a-menu
      @click="routeLink"
      v-model:selectedKeys="current"
      class="mt-3"
      mode="horizontal"
      :items="items"
    />
    <div v-if="userStore.userInfo.token" class="mt-3">
      <RouterView />
    </div>
    <div v-else class="not-registered mt-3">
      <p style="text-align: center; margin-bottom: 10">
        Уведомления будут доступны
      </p>
      <router-link to="/register">после регистрации</router-link>
    </div>
  </div>
</template>
<script setup>
//vue
import { h, ref } from 'vue';
//Antd Icons
import { MailOutlined, AppstoreOutlined } from '@ant-design/icons-vue';
//VueRouter
import { RouterView } from 'vue-router';
import { useRouter } from 'vue-router';
//userInfo
import { useUserStore } from '@/Stores/useUserStore';

const userStore = useUserStore();
const route = useRouter();
const current = ref(['message']);
const items = ref([
  {
    key: 'message',
    icon: () => h(MailOutlined),
    label: 'Сообщения',
    title: 'Navigation One',
  },
  {
    key: 'support',
    icon: () => h(AppstoreOutlined),
    label: 'Тех.Поддержка',
    title: 'Navigation Two',
  },
]);

const routeLink = (e) => {
  route.push(`/messageView/${e.key}`);
};
</script>

<style scoped>
.not-registered {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 300px;
}

@media (max-width: 768px) {
  .not-registered {
    height: 250px;
  }
}
</style>
