import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/router.js'
import { createPinia } from 'pinia'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = JSON.parse(import.meta.env.VITE_FIREBASE);

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
// Pinia
const pinia = createPinia()

createApp(App).use(router).use(pinia).mount('#app')

//export firebaseApp
export default firebaseApp;