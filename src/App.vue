<script setup>
import { onMounted, ref } from 'vue';
import { useUserStore } from './stores/UserStore';

const store = useUserStore();

onMounted(() => {
  store.getAuthState();
})

const handleLogOut = () => {
  store.logOut();
  alert('Bye bye');
}

const home = ref('homeClass');
const logout = ref('logoutClass');
const vCursor = {
  mounted: (el, binding) => el.classList.add(binding.value)
}

</script>

<template>
  <section class="topContainer">
    <h1>User analytics dashboard</h1>
    <nav>
      <section class="upperRoutes">
        <RouterLink activeClass='mainActive' to="/home" v-cursor="home">Home</RouterLink>
        <RouterLink activeClass='mainActive' to="/login" v-if="!store.activeUser">Log in</RouterLink>
        <RouterLink activeClass='mainActive' to="/register" v-if="!store.activeUser">Register</RouterLink>
      </section>
      <section class="upperButton">
        <button @click='handleLogOut' v-if="store.activeUser" v-cursor="logout">Log out {{ store.activeUser.name
          }}</button>
      </section>
    </nav>
  </section>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
.topContainer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  gap: 50px;
}

nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 25px;
}

.upperButton {
  display: flex;
  flex-direction: row;
  justify-content: right;
}

.upperRoutes {
  display: flex;
  flex-direction: row;
  justify-content: left;
  gap: 15px;
}

.mainActive {
  color: aquamarine;
}

.logoutClass {
  cursor: url('/logout-svgrepo.svg'), auto;
}

.homeClass {
  cursor: url('/home-1-svgrepo.svg'), auto;
}

@media screen and (max-width:767px) {
  .topContainer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    gap: 50px;
  }

  .upperButton{
    margin-right: 25px;
  }
}
</style>
