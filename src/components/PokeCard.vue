<template>
  <CCard>
    <CCardImage :src='image' style='padding: 1rem; background: lightGrey'/>
    <CCardBody>
      <CCardText id="exp" :style='pokemonExp'>Base-Exp: {{exp}}</CCardText>
      <CCardText id="index" :style='pokemonIndexNumber'>#{{index}}</CCardText>
      <CCardTitle>{{name}}</CCardTitle>
    </CCardBody>
  </CCard>
</template>

<script>
import { CCard, CCardImage, CCardTitle, CCardText, CButton, CCardBody } from '@coreui/vue';

export default {
  name: 'PokeCard',
  components: {
    CCard, CCardImage, CCardTitle, CCardText, CButton, CCardBody
  },
  props: ['image', 'exp', 'index', 'name'],
  data() {
    return {
      pokemonIndexNumber : {
        display: 'inline-block',
        fontSize: '0.8rem',
      },
       pokemonExp : {
        display: 'inline-block',
        fontSize: '0.8rem',
        float: 'right',
      }
    }
  }
}
</script>
