import { mount } from '@vue/test-utils'
import RegionSelector from '@/components/RegionSelector.vue'

describe('RegionSelector Component unit tests', () => {

  test('is a vue instance', () => {
    const wrapper = mount (RegionSelector);
    expect(wrapper.exists()).toBeTruthy();
  });

  test('calls getPokemon function when a region is pressed from dropdown options', () => {
    const wrapper = mount (RegionSelector);
    wrapper.get('.dropdown-item').trigger('click');
    expect(wrapper.emitted().getPokemon).toBeTruthy();
  });

  test('length of dropdown options equal to length of data array', async () => {
    const testRegionsArray = [{name: "test", url: "test"}, {name: "test1", url: "test2"}];
    const wrapper = mount (RegionSelector);
    await wrapper.setData({
      regions: testRegionsArray
    });
    expect(wrapper.findAll('a').length).toEqual(testRegionsArray.length);
  });
});
