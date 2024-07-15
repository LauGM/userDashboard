<script setup>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import { getUsers } from '../firestore/firestore';
import { ref, onMounted } from 'vue';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const users = ref([]);
const admin = ref(0);
const user = ref(0);
const verified = ref(null);
const notVerified = ref(null);

const loaded = ref(false);
const chartData = ref({
    labels: ['Administrators', 'Users'],
    datasets: [{
        label: 'Quantity',
        backgroundColor: ['aquamarine'],
        data: [1, 1],
    }]
});

const chartData2 = ref({
    labels: ['Verified', 'Not verified'],
    datasets: [{
        label: 'Quantity',
        backgroundColor: ['violet'],
        data: [1, 1],
    }]
})


const chartOptions = {
    responsive: true,
}


onMounted(async () => {
    users.value = await getUsers();
    updateChartData();
});

function updateChartData() {
    admin.value = users.value.reduce((acum, user) => user.role === 'admin' ? acum + 1 : acum, 0);
    user.value = users.value.reduce((acum, user) => user.role === 'user' ? acum + 1 : acum, 0);
    verified.value = users.value.reduce((acum, user) => user.verified === true ? acum + 1 : acum, 0);
    notVerified.value = users.value.reduce((acum, user) => user.verified === false ? acum + 1 : acum, 0);
    // Actualiza los datos del gráfico
    chartData.value.datasets[0].data = [admin.value, user.value];
    chartData2.value.datasets[0].data = [verified.value, notVerified.value];
    loaded.value = true;
}

</script>

<template>
    <section class="bigContainer">
        <h3>Analyze data</h3>
        <article class="chartContainer">
            <div class="chart">
                <h4>Number of users per role</h4>
                <Bar v-if="loaded" :options="chartOptions" :data="chartData" />
            </div>
            <div class="chart">
                <h4>Number of users by verification status</h4>
                <Bar v-if="loaded" :options="chartOptions" :data="chartData2" />
            </div>
        </article>
    </section>
</template>

<style scoped>
.bigContainer {
    width: 100%;
}

.chartContainer {
    height: 600px;
    max-height: 600px;
    overflow-y: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 50px;
    justify-content: space-around;
    align-items: flex-start;
    width: 100%;
}

.chart {
    width: 40%;
}

@media screen and (max-width:767px) {
    .chartContainer {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        width: 100%;
        gap: 15px;
    }

    .chart {
        width: 90%;
    }
}
</style>