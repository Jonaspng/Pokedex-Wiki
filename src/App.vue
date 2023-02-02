<script>
  import '@coreui/coreui/dist/css/coreui.min.css';
  import { RouterView } from 'vue-router';

  import Navbar from './components/Navbar.vue';
  import navbarData from './data/navbarData.js'
  export default {
    components: {
      Navbar
    },
    data() {
      return {
        linkName1: navbarData.linkName1,
        linkName2: navbarData.linkName2,
        link1: navbarData.link1,
        link2: navbarData.link2,
        brand: navbarData.brand
      }
    }
  }
</script>

<template>
  <Navbar v-bind:linkName1='linkName1' 
          v-bind:link1='link1' 
          v-bind:linkName2='linkName2' 
          v-bind:link2='link2' 
          v-bind:brand='brand'/>
  <RouterView/>
</template>
