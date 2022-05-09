import { defineConfig } from 'vite'
import {  resolve } from 'path'

export default defineConfig({
    build:{
        lib:{
            entry:resolve(__dirname,'./main.ts'),
            name:'iconloader',
            fileName:"iconloader.js"
        }
    }
})