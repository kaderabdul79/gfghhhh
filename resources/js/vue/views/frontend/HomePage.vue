<template>
    <v-sheet id="homepage" class="">
        <Header></Header>
        <Slider></Slider>
        <Services></Services>
        <Technicians></Technicians>
    </v-sheet>
</template>

<script setup>
import Header from './Header.vue'
import Services from './Services.vue';
import Slider from './Slider.vue'
import Technicians from './Technicians.vue';

</script>

<style scoped>
/* #homepage{
    max-width: 1160px;
    margin: auto;
    background-color: red;
} */
</style>