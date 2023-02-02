import { mount } from '@vue/test-utils'
import Navbar from '@/components/Navbar.vue'

describe('Navbar Component unit tests', () => {

  test('is a vue instance', () => {
    const wrapper = mount (Navbar, {
      props: {
        linkName1:'Pokedex',
        link1:'/',
        linkName2:'About',
        link2:'/about',
        brand:'Regional Pokemon',
      }
    });
    expect(wrapper.exists()).toBeTruthy();
  });

  test('link name 1 will be rendered on navBar', () => {
    const linkName1 = "Pokedex"
    const wrapper = mount (Navbar, {
      props: {
        linkName1: linkName1,
        link1:'/',
        linkName2: "About",
        link2:'/about',
        brand:'Regional Pokemon',
      }
    });
    expect(wrapper.get('#link1').text()).toEqual(linkName1);
  });

  test('link name 2 will be rendered on navBar', () => {
    const linkName2 = "About"
    const wrapper = mount (Navbar, {
      props: {
        linkName1: "Pokedex",
        link1:'/',
        linkName2: linkName2,
        link2:'/about',
        brand:'Regional Pokemon',
      }
    });
    expect(wrapper.get('#link2').text()).toEqual(linkName2);
  });
});
