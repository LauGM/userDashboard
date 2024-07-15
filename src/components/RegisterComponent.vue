<script setup>
import { ref } from 'vue';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useRouter } from 'vue-router';
import { addUser } from '../firestore/firestore';
import { useUserStore } from '../stores/UserStore';

const router = useRouter();
const store = useUserStore();

const email = ref('');
const password = ref('');


const handleRegister = () => {
    createUserWithEmailAndPassword(store.auth, email.value, password.value)
        .then(data => {
            registerUser(data);
        })
        .catch((error) => {
            alert(error.code);
        })
}

const handleGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(store.auth, provider)
        .then(data => {
           registerUser(data);
        })
        .catch((error) => {
            alert(error.code);
        });
}

function registerUser(data) {
    alert('Successful registration!')
    console.log(data)
    addUser(data.user.uid, data.user.email, data.user.emailVerified).then(() => {
        console.log('agregado a firestore');
        //asigno manualmente el rol que se paso a firestore para evitar la llamada
        store.activeUser.role = 'user';
        router.push('/home');
    })
}

</script>

<template>
    <div class="registro">
        <h3>Create an account</h3>
        <label for="correo">
            Email:
            <input type="email" name="correo" id="correo" placeholder="tu correo" v-model="email" />
        </label>
        <label for="clave">
            Password:
            <input type="password" name="clave" id="clave" v-model="password" />
        </label>
        <button @click="handleRegister">Register</button>
        <button @click="handleGoogle">Register with Google</button>
    </div>
</template>

<style scoped>
.registro {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    max-width: 300px;
    gap: 15px;
    border: 1px solid grey;
    padding: 30px;
    border-radius: 10px;
}
</style>