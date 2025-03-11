import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue'
import eslint from 'vite-plugin-eslint'
// https://vitejs.dev/config
export default defineConfig({

    // 添加 Vue 插件配置
    plugins: [vue(),eslint()]

});
