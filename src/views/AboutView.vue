<template>
  <div style='textAlign: center; padding: 2rem'>
    <h5>This website uses data from PokéAPI version 2.</h5>
    <h5>Data may take around 1-2 minutes to load.</h5>
    <h5>Some Pokemon may be missing due to missing information on Poke2API.</h5>
  </div>
  
</template>

<script>
  import Pokecard from '../components/PokeCard.vue';

  export default {
    name: 'AboutView',
    components: {
      Pokecard
    }
  }
</script>
