import React from 'react';

import './spinner.scss';

const Spinner = () => (
    <div style={{
        width: '300px',
        height: '100px',
        display: 'flex',
        justifyContent: 'center'
    }}>
        <div className="loader" />
    </div>
);

export default Spinner;