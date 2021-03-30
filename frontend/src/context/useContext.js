import { useContext } from 'react';
import { storeContext } from './provideContext';

export default function useCustomContext() {
    return useContext(storeContext);
};