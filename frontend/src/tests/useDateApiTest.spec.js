import React from 'react';
import UseDateApi from '../tools/useDateApi';
import { render } from '@testing-library/react';

function setup(...args) {
    const returnVal = {};
    function TestComponent () {
      Object.assign(returnVal, UseDateApi(...args));
      return null;
    };
    render(<TestComponent />);
    return returnVal;
}

describe('useDateApi for fetch backend works normally', () => {
    it('1 test', () => {
        const result = setup('/', "GET", null, null);
        expect(result.isError).toBe(false);
        expect(result.isLoading).toBe(true);
    });
});