<script setup>
import { getUsers, updateUser } from '../firestore/firestore';
import { ref, onMounted } from 'vue';

const users = ref([]);

onMounted(async () => {
  users.value = await getUsers();
});

const handleChange = async (event, user) => {
  const newRole = event.target.value;
  updateUser(user.id, { role: newRole });
}

</script>

<template>
  <section class="tableContainer">
    <h3>Manage users</h3>
    <table class="usersTable">
      <thead>
        <th>email</th>
        <th>role</th>
        <th>verified</th>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.email }}</td>
          <td>
            <select name="role" v-model="user.role" @change="(event) => handleChange(event, user)">
              <option value="admin">admin</option>
              <option value="user">user</option>
            </select>
          </td>
          <td>{{ user.verified }}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>


<style scoped>
.tableContainer {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 90%;
  max-height: 80vh;
  overflow-y: auto;
}

.usersTable {
  width: 100%;
  /* Ajusta el ancho de la tabla al 100% del contenedor */
  border-collapse: collapse;
  /* Elimina espacio entre celdas */
}

.usersTable th,
.usersTable td {
  padding: 10px;
  /* Espacio alrededor del contenido de las celdas */
  text-align: left;
  /* Alinea el texto a la izquierda */
  border-bottom: 1px solid #ddd;
  /* Borde inferior para separar filas */
}

.usersTable tr:nth-child(even) {
  background-color: rgb(9, 70, 50);
  /* Color de fondo para filas pares */
  color: whitesmoke;
}

.usersTable th {
  background-color: rgb(18, 137, 97);
  /* Color de fondo para cabeceras */
  color: rgb(255, 255, 255);
  /* Color del texto para cabeceras */
}

@media screen and (max-width:767px) {
    .tableContainer {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        width: 60%;
        gap: 15px;
        padding-right: 30px;
    }

    .usersTable {
        width: 100%;
    }

    .usersTable th{
      display: flex;
      flex-direction: column;
    }

    .usersTable tr{
      display: flex;
      flex-direction: column;
    }
}
</style>