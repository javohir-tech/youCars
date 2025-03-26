import { ref, onMounted, onUnmounted } from 'vue';
import axios from 'axios';
import { message } from 'ant-design-vue';

export function useFetch(url, options = {}) {
    const data = ref(null);
    const loading = ref(false);
    const error = ref(null);

    const fetchData = async (method = 'GET', body = null) => {
        loading.value = true;
        error.value = null;
        try {
            const response = await axios({
                url,
                method,
                data: body,
                headers: {
                    'Content-Type': 'application/json',
                    ...options.headers,
                },
                ...options,
            });

            data.value = response.data;
        } catch (err) {
            error.value = err.response?.data?.message || err.message;
            console.error(err);
        } finally {
            loading.value = false;
        }
    };

    const get = async () => {
        // message.success("get  method ishga tushdi")
        fetchData('GET')
    };

    const post = async (body) => fetchData('POST', body);

    const put = async (body) => fetchData('PUT', body);

    const remove = async (body = null) => fetchData('DELETE', body);

    const handleOnline = () => {
        message.success('Internet tiklandi. Qayta urinish...');
        get(); 
    };

    onMounted(() => {
        get();
        window.addEventListener('online', handleOnline);
    });

    onUnmounted(() => {
        message.success("you are online")
        window.removeEventListener('online', handleOnline);
    });

    return { data, loading, error, get, post, put, remove };
}
