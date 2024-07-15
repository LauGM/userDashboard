<script setup>
import { ref } from 'vue';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useRouter } from 'vue-router';
import { getRole } from '../firestore/firestore';
import { useUserStore } from '../stores/UserStore';

const store = useUserStore();

const email = ref('');
const password = ref('');

const router = useRouter();

const handleLogin = () => {
    signInWithEmailAndPassword(store.auth, email.value, password.value)
        .then((data) => {
            logUser(data);
        })
        .catch((error) => {
            alert(error.code);
        })
}

const handleGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(store.auth, provider)
        .then(data => {
            logUser(data);
        })
        .catch((error) => {
            alert(error.code);
        });
}

function logUser(data) {
    alert('Successful login!')
    console.log(data)
    getRole(data.user.uid).then(role => store.activeUser.role = role);
    router.push('/home');//re direccionamos cuando se realizo el login correctamente
}

</script>


<template>
    <div class="login">
        <h3>Sign in with your account</h3>
        <label for="correo">
            Email:
            <input type="email" name="correo" id="correo" placeholder="tu correo" v-model="email" />
        </label>
        <label for="clave">
            Password:
            <input type="password" name="clave" id="clave" v-model="password" />
        </label>
        <button @click="handleLogin">Sign in</button>
        <button @click="handleGoogle">Sign in with Google</button>
    </div>
</template>

<style scoped>
.login {
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