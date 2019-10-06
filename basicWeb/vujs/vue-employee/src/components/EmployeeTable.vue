<template>
  <div id="employee-table-id">
    <table>
      <!-- ...thead... -->
      <tbody>
        <tr v-for="emp in employees" :key="emp.id" >
        <td>{{emp.name}}</td>       
        <td>{{emp.email}}</td>   
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
   export default{
      name:"employe-table",
      props:{
          employees:Array
      }
    }
</script>


<style scoped></style>