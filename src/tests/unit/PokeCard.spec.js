import { mount } from '@vue/test-utils'
import PokeCard from '@/components/PokeCard.vue'

describe('PokeCard Component unit tests', () => {

  test('is a vue instance', () => {
    const wrapper = mount (PokeCard, {
      propsData: {
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/152.png",
        exp: "0",
        index: "0",
        name: "test"
      }
    });
    expect(wrapper.exists()).toBeTruthy();
  });

  test('name rendered correctly', () => {
    const name = "chikorita";
    const wrapper = mount (PokeCard, {
      propsData: {
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/152.png",
        exp: "0",
        index: "0",
        name: name
      }
    });
    expect(wrapper.get(".card-title").text()).toEqual(name);
  });

  test('exp rendered correctly', () => {
    const exp = "10";
    const prefix = "Base-Exp: "
    const wrapper = mount (PokeCard, {
      propsData: {
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/152.png",
        exp: exp,
        index: "0",
        name: "test"
      }
    });
    expect(wrapper.get("#exp").text()).toEqual(prefix + exp);
  });

  test('exp rendered correctly', () => {
    const index = "10";
    const prefix = "#"
    const wrapper = mount (PokeCard, {
      propsData: {
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/152.png",
        exp: 0,
        index: index,
        name: "test"
      }
    });
    expect(wrapper.get("#index").text()).toEqual(prefix + index);
  });
});
