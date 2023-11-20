<template>
    <v-app id="my-app">
      <!--  -->
        <v-main no-gutters>
            <router-view />
        </v-main>
        <!-- footer -->
        <ListAllRouteHere />
    </v-app>
</template>

<script setup>
import ListAllRouteHere from './views/ListAllRouteHere.vue';


</script>

<style>

</style>
