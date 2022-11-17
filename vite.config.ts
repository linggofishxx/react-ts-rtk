/*
 * @Descripttion: ''
 * @Author: 王广徽
 * @Date: 2022-09-14 14:18:45
 * @LastEditors: 王广徽
 * @LastEditTime: 2022-11-16 17:26:30
 */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import vitePluginImp from 'vite-plugin-imp';
import { AntDesignVueResolver, VueUseComponentsResolver } from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  server: {
    port: 3000,
    open: false,
    host: '0.0.0.0',
    proxy: {
      '/api': {
        target: 'http://10.10.184.134:8004', // 测试线
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  plugins: [
    react({
      exclude: 'node_module',
      include: ['**/*.tsx', '**/*.jsx']
    }),
    /* vitePluginImp({
      libList: [
        {
          libName: "antd",
          style: (name) => `antd/lib/${name}/style/index.less`,
        }
      ]
    }), */
    AutoImport({
      dts: 'src/auto-imports.d.ts',
      eslintrc: {
        enabled: true, // Default `false`
        filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
        globalsPropValue: true // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
      },
      imports: [
        'react',
        'react-router-dom',
        // { 'react': ['React'] },
        { 'react-router-dom': ['BrowserRouter'] }
      ],
      resolvers: [
        AntDesignVueResolver()
      ]
    }),
    Components({
      dts: 'src/components.d.ts',
      resolvers: [
        AntDesignVueResolver({ importStyle: true, resolveIcons: true }),
        VueUseComponentsResolver()
      ]
    })
  ],
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
      '@': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@views': path.resolve(__dirname, 'src/views'),
      '@utils': path.resolve(__dirname, 'src/utils')
      // vue: 'vue/dist/vue.esm-bundler.js'
    }
  },
})
