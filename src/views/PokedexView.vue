<template>
    <div style='padding: 1rem'>
      <h1 style='float:left; display: inline-block'>{{curRegionName}} Region Pokedex</h1>
      <RegionSelector @getPokemon='(url, name) => {getPokemon(url); this.curRegionName = name;}' />
    </div>
  <CContainer> 
    <div style='textAlign: center'>
      <CSpinner v-if='pokemonData.length == 0' style='margin: 1rem'/>
    </div>
    <CRow>
      <CCol v-for='pokemon in pokemonData' :key='pokemon.id' lg='4' md='6' xs='12' style='padding: 2rem'>
        <PokeCard 
          v-bind:name='pokemon.name'
          v-bind:image="pokemon.sprites.other['official-artwork'].front_default"
          v-bind:exp='pokemon.base_experience'
          v-bind:index='pokemon.id' />
      </CCol>
    </CRow>
  </CContainer>
</template>

<script>
  import { CContainer, CRow, CCol, CSpinner } from '@coreui/vue';

  import PokeCard from '../components/PokeCard.vue';
  import data from '../data/regionData.js'
  import RegionSelector from '../components/RegionSelector.vue';  
  
  export default {
    name: 'PokdexView',
    data() {
      return {
        pokemonData: [],
        curRegionUrl: data.defaultRegionUrl,
        curRegionName: data.defaultRegion,
      }
    },
    components: {CContainer, CRow, CCol, PokeCard, CSpinner, RegionSelector},
    methods: {
      async getPokemon(region) {
        this.pokemonData = [];
        let prelimData = [{name: 'test'}];
        let finalData = [];
        await fetch('https://pokeapi.co/api/v2/pokedex/' + region)
                .then((res) => res.json())
                .then((data) => prelimData = data);
        for (let i = 0; i < prelimData.pokemon_entries.length; i ++) {
          try {
            await fetch('https://pokeapi.co/api/v2/pokemon/' + prelimData.pokemon_entries[i].pokemon_species.name)
            .then(res => res.json())
            .then(data => finalData.push(data));
          } finally {
            continue;
          }
        }
        this.pokemonData = finalData;      
      }
    }, 
    async beforeMount() {
      await this.getPokemon(this.curRegionUrl);
    }
  }
</script>
