<script setup>
import RegisterComponent from '../components/RegisterComponent.vue';
</script>

<template>
    <div>       
        <div class="opciones">
            <h3>Register</h3>
            <RegisterComponent />
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