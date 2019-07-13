import React from 'react';
import { shallow } from 'enzyme';
import Form from '.';


describe('Form', () => {
  let wrapper;

  it('should match the snapshot', () => {
    wrapper = shallow(<Form />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should save a new unicorn', () => {
    
  });

  it('should delete a unicorn', () => {
    
  });

});