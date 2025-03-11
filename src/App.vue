<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';

// 定义数据
const weatherData = ref(null);
const error = ref(null);

// 模拟 API 请求
const fetchWeather = async () => {
  try {
    // 这里需要替换成真实的天气 API 地址和 API 密钥
    const response = await axios.get('https://api.example.com/weather?city=Beijing&apiKey=yourApiKey');
    weatherData.value = response.data;
  } catch (err) {
    error.value = err;
  }
};

// 挂载时获取天气数据
onMounted(() => {
  fetchWeather();
});
</script>

<template>
  <div>
    <h1>天气应用</h1>
    <!-- 显示加载状态 -->
    <div v-if="!weatherData && !error">加载中...</div>
    <!-- 显示错误信息 -->
    <div v-if="error">{{ error.message }}</div>
    <!-- 显示天气数据 -->
    <div v-if="weatherData">
      <p>城市: {{ weatherData.city }}</p>
      <p>温度: {{ weatherData.temperature }}°C</p>
      <p>天气状况: {{ weatherData.condition }}</p>
    </div>
  </div>
</template>

<style scoped>
/* 简单的样式 */
h1 {
  text-align: center;
}

div {
  text-align: center;
  margin-top: 20px;
}
</style>
