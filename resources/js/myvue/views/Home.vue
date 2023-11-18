<template>
<div class="my-card">
  <div>
    <v-container class="remove-all" fluid>
  <v-row class="ma-0">
    <v-col>
      <v-sheet class="bg-grey-lighten-3 py-5 pl-2 text-blue-lighten-1 rounded border-left-5 text--primary" :elevation="3">
         <div class="text-h6 text-uppercase">Sales</div>
         <span class="text-h4">54</span>
      </v-sheet>
    </v-col>
    <v-col>
      <v-sheet class="bg-grey-lighten-3 py-5 pl-2 bl-2-red text-deep-purple-accent-1 rounded border-left-5 text--primary" :elevation="3">
         <div class="text-h6 text-uppercase">Growth</div>
         <span class="text-h4">23</span><span class="text-red">%</span>
      </v-sheet>
    </v-col>
    <v-col>
      <v-sheet class="bg-grey-lighten-3 py-5 pl-2 bl-2-red text-blue-lighten-1 rounded border-left-5 text--primary" :elevation="3">
         <div class="text-h6 text-uppercase">Profit</div>
         <span class="text-h4">61</span><span class="text-red">%</span>
      </v-sheet>
    </v-col>
  </v-row>
  <!--  -->
   <v-row>
    <v-col>
      <v-sheet class="text-h2">Product's Table</v-sheet>
      <v-table
    fixed-header
    height="420px"
  >
    <thead>
      <tr>
        <th class="text-left">
          Name
        </th>
        <th class="text-left">
          Calories
        </th>
        <th class="text-left">
          Rating
        </th>
        <th class="text-left">
          Price
        </th>
        <th class="text-left">
          Action
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="item in desserts"
        :key="item.name"
      >
      
        <td>{{ item.name }}</td>
        <td>{{ item.calories }}</td>
        <td>{{ item.rating }}</td>
        <td>{{ item.price }}</td>
        <td>
          <v-btn class="mr-3" color="success">Edit</v-btn>
          <v-btn color="red-darken-1">Delete</v-btn>
        </td>
      </tr>
    </tbody>
  </v-table>
  </v-col>
   </v-row>
   <!--  -->
   <v-row>
    <v-col xl="4">
      <!-- <form @submit.prevent="submit">
    <v-text-field
      v-model="name.value.value"
      :counter="10"
      :error-messages="name.errorMessage.value"
      label="Name"
    ></v-text-field>

    <v-text-field
      v-model="phone.value.value"
      :counter="7"
      :error-messages="phone.errorMessage.value"
      label="Phone Number"
    ></v-text-field>

    <v-text-field
      v-model="email.value.value"
      :error-messages="email.errorMessage.value"
      label="E-mail"
    ></v-text-field>

    <v-select
      v-model="select.value.value"
      :tableData="tableData"
      :error-messages="select.errorMessage.value"
      label="Select"
    ></v-select>

    <v-checkbox
      v-model="checkbox.value.value"
      :error-messages="checkbox.errorMessage.value"
      value="1"
      label="Option"
      type="checkbox"
    ></v-checkbox>

    <v-btn
      class="me-4"
      type="submit"
    >
      submit
    </v-btn>

    <v-btn @click="handleReset">
      clear
    </v-btn>
  </form> -->
    </v-col>
    <v-col>
      <v-table
    fixed-header
    height="420px"
  >
    <thead>
      <tr>
        <th class="text-left">
          Name
        </th>
        <th class="text-left">
          Calories
        </th>
        <th class="text-left">
          Rating
        </th>
        <th class="text-left">
          Price
        </th>
        <th class="text-left">
          Action
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="item in desserts"
        :key="item.name"
      >
      
        <td>{{ item.name }}</td>
        <td>{{ item.calories }}</td>
        <td>{{ item.rating }}</td>
        <td>{{ item.price }}</td>
        <td>
          <v-btn class="mr-3" color="success">Edit</v-btn>
          <v-btn color="red-darken-1">Delete</v-btn>
        </td>
      </tr>
    </tbody>
  </v-table>
    </v-col>
   </v-row>
   <!--  -->
</v-container>
  </div>
</div>
</template>

<script setup>
import { ref } from 'vue';


const items = ref([
  'Item 1',
  'Item 2',
  'Item 3',
  'Item 4',
])
  const desserts = [
    {
      name: 'Nebula GTX 3080',
      image: '1.png',
      price: 699.99,
      rating: 5,
      stock: true,
      calories: 55,
    },
    {
      name: 'Galaxy RTX 3080',
      image: '2.png',
      price: 799.99,
      rating: 4,
      stock: false,
      calories: 55,
    },
    {
      name: 'Orion RX 6800 XT',
      image: '3.png',
      price: 649.99,
      rating: 3,
      stock: true,
      calories: 55,
    },
    {
      name: 'Vortex RTX 3090',
      image: '4.png',
      price: 1499.99,
      rating: 4,
      stock: true,
      calories: 55,
    },
    {
      name: 'Cosmos GTX 1660 Super',
      image: '5.png',
      price: 299.99,
      rating: 4,
      stock: false,
      calories: 55,
    },
    {
      name: 'Cosmos GTX 1660 Super',
      image: '5.png',
      price: 299.99,
      rating: 4,
      stock: false,
      calories: 55,
    },
    {
      name: 'Cosmos GTX 1660 Super',
      image: '5.png',
      price: 299.99,
      rating: 4,
      stock: false,
      calories: 55,
    },
    {
      name: 'Cosmos GTX 1660 Super',
      image: '5.png',
      price: 299.99,
      rating: 4,
      stock: false,
      calories: 55,
    },

        {
      name: 'Cosmos GTX 1660 Super',
      image: '5.png',
      price: 299.99,
      rating: 4,
      stock: false,
      calories: 55,
    },
    {
      name: 'Cosmos GTX 1660 Super',
      image: '5.png',
      price: 299.99,
      rating: 4,
      stock: false,
      calories: 55,
    },
    {
      name: 'Cosmos GTX 1660 Super',
      image: '5.png',
      price: 299.99,
      rating: 4,
      stock: false,
      calories: 55,
    },
    {
      name: 'Cosmos GTX 1660 Super',
      image: '5.png',
      price: 299.99,
      rating: 4,
      stock: false,
      calories: 55,
    },
    {
      name: 'Cosmos GTX 1660 Super',
      image: '5.png',
      price: 299.99,
      rating: 4,
      stock: false,
      calories: 55,
    },
  ]
</script>
 
<style scoped>
.remove-all{
  margin: 0px;
  padding: 8px;
}
.my-card{

}
</style>