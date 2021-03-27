import React from 'react';

import Header from './Header/Header';

const Wrapper = (props) => {
    return (
        <>
            <Header />
            {props.children}
        </>
    );
};

export default Wrapper;