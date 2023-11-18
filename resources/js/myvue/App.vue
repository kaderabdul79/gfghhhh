<template>
    <v-app id="my-app">
      <ListAllRouteHere />
        <!--  -->
        <v-main no-gutters>
            <router-view />
        </v-main>
        <!-- footer -->
    </v-app>
</template>

<script setup>
import ListAllRouteHere from './views/ListAllRouteHere.vue';


</script>

<style>

</style>
