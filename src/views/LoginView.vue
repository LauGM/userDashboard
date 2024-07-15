<script setup>
import LoginComponent from '../components/LoginComponent.vue';

</script>

<template>
    <div>       
        <div class="opciones">
            <h3>Log in</h3>
            <LoginComponent />
        </div>
    </div>
</template>

<style scoped>
.opciones{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>