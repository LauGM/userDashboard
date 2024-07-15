<script setup>
import { useUserStore } from '../stores/UserStore';
const store = useUserStore();
</script>

<template>
    <div v-if="store.activeUser">
        <section class="all">
            <aside class="asideContainer">
                <RouterLink activeClass="active" to="/home/user">Manage my user</RouterLink>
                <RouterLink activeClass="active" to="/home/data">My info</RouterLink>
                <RouterLink activeClass="active" to="/home/users" v-if="store.activeUser.role == 'admin'">Manage users</RouterLink>
                <RouterLink activeClass="active" to="/home/all" v-if="store.activeUser.role == 'admin'">Data analysis</RouterLink>
            </aside>
            <RouterView />
        </section>
    </div>
    <div v-else>
        <p>You must register or log in first 🤷‍♀️</p>
    </div>
</template>

<style scoped>
.asideContainer {
    margin-top: 20px;
    margin-right: 15px;
    width: 190px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 12px;
}

.all {
    display: flex;
    flex-direction: row;
    gap: 18px;
    align-items: flex-start;
}
.active{
    color: rgb(177, 174, 252);
}

</style>