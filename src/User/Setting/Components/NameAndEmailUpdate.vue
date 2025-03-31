<template>
    <a-form :model="formState" name="basic" layout="vertical" autocomplete="off" @finish="updateEmailName"
        @finishFailed="onFinishFailed">
        <a-row :gutter="[10, 10]">
            <a-col :md="{ span: 12 }">
                <a-form-item label="Имя" name="username"
                    :rules="[{ required: true, message: 'Please input your username!' }]">
                    <a-input v-model:value="formState.username" />
                </a-form-item>
            </a-col>

            <a-col :md="{ span: 12 }">
                <a-form-item label="E-mail" name="email" :rules="[
                    {
                        type: 'email',
                        required: true,
                        message: 'Please input your password!',
                    },
                ]">
                    <a-input v-model:value="formState.email" />
                </a-form-item>
            </a-col>
        </a-row>
        <a-button type="primary" html-type="submit" :disabled="loading">
            <template v-if="loading">
                <a-spin /> Loading...
            </template>
            <template v-else>
                Сохранить
            </template>
        </a-button>
    </a-form>
</template>

<script setup>


const updateEmailName = async () => {
    try {
        const response = await axios.put(`${import.meta.env.VITE_APP_API}/update-name-email/${userStore.userInfo.id}`, {
            newName: formState.username,
            newEmail: formState.email
        })
        console.log(response.data)
        userStore.setUser({
            name: formState.username,
            email: formState.email,
            id: userStore.userInfo.id,
            token: userStore.userInfo.token
        })
        message.success(response.data.message)
    } catch (error) {
        console.log(error)
    } finally {
        loading.value = false
    }
};
</script>

<style></style>