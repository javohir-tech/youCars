<template>
    <div class="container">
        <div class="mt-3">
            <from >
                <a-row :layout="vertical" :gutter="[10, 10]">
                    <a-col :xs="{ span: 24 }" :md="{ span: 12 }">
                        <label for="username">User Name</label>
                        <a-input v-model:value="formState.username" id="username" placeholder="user name" class="mt-3" />
                    </a-col>
                    <a-col :xs="{ span: 24 }" :md="{ span: 12 }">
                        <label for="email">Email</label>
                        <a-input v-model:value="formState.email" id="email" placeholder="Email" class="mt-3"/>
                    </a-col>
                </a-row>
            </from>
        </div>
    </div>
</template>

<script setup>
import { reactive } from 'vue';


const formState = reactive({
    username: '',
    email:''
})
</script>