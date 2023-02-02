<template>
  <div style='textAlign: right; margin: 1rem'>
    <CDropdown>
      <CDropdownToggle color='primary'>Regions</CDropdownToggle>
      <CDropdownMenu>
        <CDropdownItem 
          href='#' 
          v-for='region in regions' 
          :key='region' 
          @click="$emit('getPokemon', region.url, region.name)">
            {{region.name}}
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  </div>
</template>

<script>
  import {CDropdown, CDropdownToggle, CDropdownMenu, CDropdownItem} from '@coreui/vue';
  
  import data from '../data/regionData.js'
  export default {
    name: 'RegionSelector',
    components: {
      CDropdown, CDropdownToggle, CDropdownMenu, CDropdownItem
    },
    data() {
      return {
        regions: data.regions
      }
    }
  }
</script>
