import React from 'react';
import Spinner from '../components/UI/Spinner/Spinner';

describe('Check Spinner tests', () => {
    it('should render a 1 div', () => {
        const wrapper = shallow(<Spinner />);
        const spinner = wrapper.find('div');
        expect(spinner.length).toBe(2);
    });

    it('should contain div with some flex styles', () => {
        const wrapper = shallow(<Spinner />);
        const spinner = wrapper.find('div').at(0);
        expect(spinner.prop('style')).toHaveProperty('display', 'flex');
        expect(spinner.prop('style')).toHaveProperty('justifyContent', 'center');
    })
});