<script setup>
import { useUserStore } from '../stores/UserStore';

const store = useUserStore();
</script>

<template>
    <section class="userBox">
        <h3>My info</h3>
        <article class="userInfo">
            <p>Email: {{ store.activeUser.email }}</p>
            <p>Role: {{ store.activeUser.role }}</p>
            <p>Registration Date: {{ store.activeUser.registerDate }}</p>
            <p>Last admission: {{ store.activeUser.lastLogin }}</p>
            <p>Verified email: {{ store.activeUser.verified ? '✅' : '❌' }}</p>
        </article>

    </section>
</template>


<style scoped>
.userBox {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%
}

.userInfo {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 30px;
}

.userInfo p {
    width: 40%;
}

@media screen and (max-width:767px) {
    .userBox {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
    }

    .userInfo {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
    }

    .userInfo p {
        width: 95%;
    }
}
</style>