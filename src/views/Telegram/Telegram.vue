<template>
  <div class="container">
    <div class="mt-4">
      <a-form
        ref="formRef"
        layout="vertical"
        :model="formState"
        :rules="rules"
        @submit.prevent="fetchTelegram"
      >
        <a-row :layout="vertical" :gutter="[10, 20]">
          <a-col :xs="{ span: 24 }" :md="{ span: 12 }">
            <a-form-item
              label="User Name"
              name="username"
              :rules="rules.username"
            >
              <a-input
                v-model:value="formState.username"
                placeholder="user name"
              />
            </a-form-item>
          </a-col>
          <a-col :xs="{ span: 24 }" :md="{ span: 12 }">
            <a-form-item
              label="Phone Number"
              name="number"
              :rules="rules.number"
            >
              <a-input
                v-model:value="formState.number"
                placeholder="Enter your phone number"
              />
            </a-form-item>
          </a-col>
          <a-col :xs="{ span: 24 }">
            <a-form-item label="Email" name="email" :rules="rules.email">
              <a-input
                v-model:value="formState.email"
                placeholder="Enter your email"
              />
            </a-form-item>
          </a-col>
          <a-col :xs="{ span: 24 }">
            <label for="message">Message</label>
            <a-textarea
              v-model:value="formState.message"
              id="message"
              class="mt-3"
              placeholder="If you have any questions, you can reach out to us."
              :auto-size="{ minRows: 2, maxRows: 5 }"
            />
          </a-col>
        </a-row>

        <a-button
          @click="fetchTelegram"
          :disabled="loader"
          class="mt-3 submit-btn"
          style="width: 100%"
          type="primary"
        >
          <a-spin v-if="loader" />
          <p v-else>Send</p>
        </a-button>
      </a-form>
    </div>
  </div>
</template>

<script setup>
import { message } from 'ant-design-vue';
import axios from 'axios';
import { reactive, ref } from 'vue';

//loader
const formState = reactive({
  username: '',
  email: '',
  number: '',
  message: '',
});

const loader = ref(false);
const formRef = ref();

//validation
const rules = {
  username: [{ required: true, message: 'Please enter your username.' }],
  number: [
    { required: true, message: 'Please enter your phone number.' },
    {
      pattern: /^\+998\d{9}$/,
      message: 'Please enter a valid Uzbek phone number (+998 XX XXX XX XX).',
    },
  ],
  email: [
    { required: true, message: 'Please enter your email address.' },
    { type: 'email', message: 'Please enter a valid email address.' },
  ],
};

const fetchTelegram = async () => {
  //validation
  const isValid = await formRef.value.validate();
  if (!isValid) return;

  loader.value = true;
  const token = import.meta.env.VITE_BOT_TOKEN;
  const chatId = import.meta.env.VITE_CHAT_ID;
  const TelegamUrl = `https://api.telegram.org/bot${token}/sendMessage`;

  const data = {
    chat_id: chatId,
    text: `
      🧑‍💻 Ismi: ${formState.username}
      📞 Tel: ${formState.number}
      📧 Email: ${formState.email}
      💬 Xabar: ${formState.message}
    `,
  };

  try {
    const response = await axios.post(TelegamUrl, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.data.ok) {
      message.success('Message sent successfully!');
    }
  } catch (error) {
    console.log(error);
    message.error(error.message);
  } finally {
    loader.value = false;
    formState.username = '';
    formState.message = '';
    formState.number = '';
    formState.email = ''
  }
};
</script>

<style scoped></style>
