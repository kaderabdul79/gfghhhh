<template>
  <v-app id="portfolio">
    <!-- header -->
    
    <v-navigation-drawer
          v-model="drawer"
          :rail="rail"
          permanent
          @click="rail = false"
        >
          <v-list-item
            class="py-2"
            icon="mdi mdi-unfold-more-vertical"
            nav
          >
            <template v-slot:append>
              <v-btn
                variant="flat"
                icon="mdi mdi-unfold-more-vertical"
                @click.stop="rail = !rail"
              ></v-btn>
            
            </template>
          </v-list-item>
  
          <v-divider></v-divider>
  
          <v-list density="compact" nav>
            <v-list-item prepend-icon="mdi-home-city" title="Home" value="home"></v-list-item>
            <v-list-item prepend-icon="mdi-account" title="My Account" value="account"></v-list-item>
            <v-list-group value="Admin">
              <template v-slot:activator="{ props }">
                <v-list-item
                  v-bind="props"
                  prepend-icon="mdi-account"
                  title="Admin"
                ></v-list-item>
              </template>

              <v-list-item
                v-for="admin in admins"
                :key="admin.id"
                :title="admin.title"
                :prepend-icon="admin.icon"
                :value="admin.title"
              ></v-list-item>
            </v-list-group>
            <v-list-item prepend-icon="mdi-account-group-outline" title="Users" value="users"></v-list-item>
          </v-list>
    </v-navigation-drawer>
<!-- drawer -->
    <v-app-bar class="px-2" :elevation="2">
      <div>Abdul Kader</div>
      <div>              
            <!-- <v-btn
                variant="flat"
                icon="mdi mdi-account"
                :ripple="false"
            ></v-btn> -->
            <v-menu
      transition="scale-transition"
    >
      <!-- <template v-slot:activator="{ props }">
        <v-btn
          color="primary"
          v-bind="props"
          
        >
          Scale Transition
        </v-btn>
      </template> -->
      <!-- <v-list-item class="parentProfile"
            prepend-avatar="https://cdn.vuetifyjs.com/images/john.png"
            title="John Leider"
            subtitle="john@google.com"
          >
          <template v-slot:append></template>
          </v-list-item>

      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list> -->
    </v-menu>
    <!--  -->
            <!-- <v-list-item class="parentProfile"
            prepend-avatar="https://cdn.vuetifyjs.com/images/john.png"
            title="John Leider"
            subtitle="john@google.com"
          >
          <template v-slot:append>
              <v-btn
                size="small"
                variant="text"
                icon="mdi-menu-down"
                @click="profileDrawerChange"
              ></v-btn> -->
              <!-- <v-sheet v-if="profileDrawer" class="myprofile bg-red">
                <v-list-item prepend-icon="mdi-home-city" title="Home" value="home"></v-list-item>
                <v-list-item prepend-icon="mdi-account" title="My Account" value="account"></v-list-item>
              </v-sheet> -->
              <!--  -->
            <!-- </template> -->
            <!-- <v-sheet v-if="profileDrawer" class="myprofile bg-red">
                <v-list-item prepend-icon="mdi-home-city" title="Home" value="home"></v-list-item>
                <v-list-item prepend-icon="mdi-account" title="My Account" value="account"></v-list-item>
              </v-sheet> -->
          <!-- </v-list-item> -->
             
      </div>
    </v-app-bar>
    <v-main no-gutters>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, dolorum illo! Earum, facere dolore! Adipisci veritatis aliquam itaque illo excepturi, cum vitae enim debitis error aut fugiat ab laboriosam commodi sint suscipit esse, optio nisi ut repudiandae voluptas iste quidem a! Assumenda nihil reprehenderit amet natus modi. Incidunt quibusdam non cumque, nesciunt sed quae quod.
      <router-view />
    </v-main>
    <!-- footer -->
  </v-app>
</template>

<script setup>
  import { ref } from 'vue'
  const profileDrawer = ref(false)
  const drawer = ref(true)
  const rail = ref(true)
  function profileDrawerChange(){
    return profileDrawer.value = !profileDrawer.value;
  }
  const items = ref([
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
      ],)
  const admins = ref([{id:1,title: "Create User", icon: "mdi-home-city"},{id:2,title: "Edit User", icon: "mdi mdi-note-edit"}])
</script>

<style>
.v-toolbar__content{
  justify-content: space-between;
}
.parentProfile{
  position: relative;
}
.myprofile {
    position: absolute;
    top: 43px;
    right: 45px;
    z-index: 5555555px;
}
</style>