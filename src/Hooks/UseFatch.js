import { ref, onMounted, onUnmounted } from 'vue';
import axios from 'axios';
import { message } from 'ant-design-vue';

const fetchFunctions = new Set();
let isOnlineListenerAdded = false;

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
        fetchData('GET');
    };

    const post = async (body) => fetchData('POST', body);

    const put = async (body) => fetchData('PUT', body);

    const remove = async (body = null) => fetchData('DELETE', body);

    onMounted(() => {
        get();

        fetchFunctions.add(get);

        if (!isOnlineListenerAdded) {
            window.addEventListener('online', () => {
                message.success('Internet tiklandi. Qayta urinish...');
                fetchFunctions.forEach((fn) => fn());
            });

            isOnlineListenerAdded = true;
        }
    });

    onUnmounted(() => {
        fetchFunctions.delete(get);
    });

    return { data, loading, error, get, post, put, remove };
}
