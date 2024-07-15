<script setup>
import { ref } from 'vue';
import { useUserStore } from '../stores/UserStore';
const store = useUserStore();

const editing = ref(false);
const editingAvatar = ref(false);
const nuevoNombre = ref('');

const handleChangeName = () => {
    editing.value = true;
}

const handleOk = () => {
    editing.value = false;
    nuevoNombre.value && store.postNewName(nuevoNombre.value)
}

const handleChangeAvatar = (avatarImage) => {
    editingAvatar.value = true;
}

const handleOkAvatar = (link) => {
    editingAvatar.value = false;
    store.postNewAvatar(link);
}
</script>

<template>
    <section class="userContainer">
        <h3>Manage my user</h3>
        <section class="userBox">

            <article class="nombre" v-if="!editing">
                <p>Name: {{ store.activeUser.name || 'no name' }}</p>
                <button @click="handleChangeName">✏️</button>
            </article>
            <article class="nombre" v-else>
                <input type="text" placeholder="nuevo nombre" v-model="nuevoNombre">
                <button @click="handleOk">🆗</button>
            </article>
            <article class="avatar" v-if="!editingAvatar">
                <p>Avatar:</p>
                <img v-if='store.activeUser.avatar' :src="store.activeUser.avatar" alt="avatar" class="avatarImg">
                <p v-else>no avatar</p>
                <button @click="handleChangeAvatar">✏️</button>
            </article>
            <article class="avatar" v-else>
                
                <div class="avatarButtons">
                    <p>Choose your avatar:</p>
                    <button
                        @click="handleOkAvatar('https://www.pngall.com/wp-content/uploads/5/Profile-Avatar-PNG.png')">
                        <img src="https://www.pngall.com/wp-content/uploads/5/Profile-Avatar-PNG.png" alt="avatar1"
                            class="avatarImg">
                    </button>
                    <button
                        @click="handleOkAvatar('https://www.pngall.com/wp-content/uploads/5/Profile-Female-PNG.png')">
                        <img src="https://www.pngall.com/wp-content/uploads/5/Profile-Female-PNG.png" alt="avatar2"
                            class="avatarImg">
                    </button>
                </div>
            </article>
        </section>
    </section>
</template>

<style scoped>
.userContainer {
    width: 100%
}

.userBox {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

.nombre {
    display: flex;
    flex-direction: row;
    gap: 10px;
}

.avatar {
    display: flex;
    flex-direction: row;
    gap: 10px;
}

.avatarImg {
    border-radius: 50%;
    width: 80px;
}

@media screen and (max-width:767px) {
    .userBox {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
        gap: 50px;
    }

    .avatarButtons {
        display: flex;
        flex-direction: column;
        gap:10px
    }
}
</style>