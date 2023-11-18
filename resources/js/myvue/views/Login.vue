<template>
    <div id="login" class="h-100 bg-blue-lighten-1 pa-3 rounded">
        <v-sheet width="500" class="mx-auto">
            <div class="text-h3 bg-blue-darken-2 text-center py-4">Login</div>
            <v-form class="pa-3" fast-fail @submit.prevent="formSubmit">
            <v-text-field
                v-model="firstName"
                label="First name"
            ></v-text-field>

            <v-text-field
                v-model="lastName"
                label="Last name"
            ></v-text-field>

            <v-btn type="submit" block class="mt-2 bg-blue-darken-2">Submit</v-btn>
            </v-form>
        </v-sheet>
    </div>
</template>

<script setup>
import {ref} from 'vue'
const firstName = ref("")
const lastName = ref("")
function formSubmit(){
    alert("submit",firstName.value)
    // return ;
}
</script>

<style scoped>
div#login {
    display: flex;
    align-items: center;
}
</style>