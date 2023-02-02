<template>
  <CNavbar expand='lg' color-scheme='light' class='bg-light'>
    <CContainer fluid>
      <CNavbarBrand href='#'>{{brand}}</CNavbarBrand>
      <CNavbarToggler aria-label='Toggle navigation' aria-expanded={visible} @click='visible = !visible'/>
      <CCollapse class='navbar-collapse' :visible='visible'>
        <CNavbarNav>
          <CNavItem>
            <CNavLink id='link1' v-bind:href='link1'>{{linkName1}}</CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink id='link2' v-bind:href='link2'>{{linkName2}}</CNavLink>
          </CNavItem>
        </CNavbarNav>
      </CCollapse>
    </CContainer>
  </CNavbar>
</template>

<script>
  import { CNavbar, CNavbarNav, CContainer, CNavbarBrand, 
    CNavbarToggler, CNavItem, CCollapse , CNavLink} from '@coreui/vue';
  
  export default {
    name: 'Navbar',
    components: {
      CNavbar, CContainer, CNavbarBrand, CNavbarToggler, CNavItem, CCollapse , CNavLink, CNavbarNav
    },
    props: ['linkName1', 'link1', 'linkName2', 'link2', 'brand'],
    data() {
      return {
        visible: false
      }
    }
  }
</script>
