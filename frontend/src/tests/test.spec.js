import { shallow } from 'enzyme/build';
import React from 'react';
import Auth from '../pages/Auth/Auth';

const setUpAuth = () => shallow(<Auth />);

describe('should render Auth component', () => {
    let component;
    beforeEach(() => {
        component = setUpAuth();
    });

    // check for existing 2 divs with className .auth_container_body
    it('should contain .auth_container_body divs',() => {
        const div = component.find(".auth_container_body");
        const loginBlock = component.find('#login');
        const signUpBlock = component.find('#register');
        expect(div.length).toBe(2);
        expect(loginBlock.length).toBe(1);
        expect(signUpBlock.length).toBe(1);
    });

    //  check inputs for empty fields on program start
    it('the default value for both fields should be empty', () => {
        const wrapper = component.find('#email1');
        const wrapper2 = component.find('#pass1');
        expect(wrapper.prop('value')).toBe('');
        expect(wrapper2.prop('value')).toBe('');
    });

    // cheking onChangeInput event
    it('on change of value in the field, the state of that field in the component should be updated', () => {
        component.find('#email1').simulate('change', {
            target: {
                value: '123@gmail.com'
            }
        });
        expect(component.find('#email1').prop('value')).toBe('123@gmail.com');

        component.find('#email2').simulate('change', {
            target: {
                value: '1337@gmail.com'
            }
        });
        expect(component.find('#email2').prop('value')).toBe('1337@gmail.com');
    });

    // checking eye working
    it('when clickng on eye - password will be visible', () => {
        const eye = component.find('.eye').at(0);
        expect(component.find('#pass1').prop('type')).toBe('password');
        eye.simulate('click');
        expect(component.find('#pass1').prop('type')).toBe('text');
    });

    // checking spinner existing
    it('on trigger server request we should see a spinner', () => {
        const button = component.find('#submit1');
        button.simulate('click');
        expect(component.find('Spinner').length).toBe(1);
    });
});