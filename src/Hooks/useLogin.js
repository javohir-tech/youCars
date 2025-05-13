import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { message } from 'ant-design-vue';
import axios from 'axios';
import { useUserStore } from '@/Stores/useUserStore';

export function useLogin() {
  const router = useRouter();
  const userStore = useUserStore();
  const loading = ref(false);

  const formState = reactive({
    email: '',
    password: '',
    remember: false,
  });

  const onFinish = async () => {
    loading.value = true;
    try {
      const payload = {
        email: formState.email,
        password: formState.password,
      };

      const response = await axios.post(
        `${import.meta.env.VITE_APP_API}/login`,
        payload
      );

      const { token, userData } = response.data;

      // Tokenni saqlash
      if (formState.remember) {
        localStorage.setItem('token', token);
      } else {
        sessionStorage.setItem('token', token);
      }

      userStore.setUser({
        name: userData.name,
        email: userData.email,
        id: userData.id,
        token,
      });

      message.success(`Success: ${response.data.message || 'Login successfully!'}`);

      router.push('/');
      resetForm();
    } catch (error) {
      message.error(error.response?.data?.message || 'Xatolik yuz berdi');
    } finally {
      loading.value = false;
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const resetForm = () => {
    formState.email = '';
    formState.password = '';
    formState.remember = false;
  };

  return {
    formState,
    loading,
    onFinish,
    onFinishFailed,
  };
}
