import React from 'react';

const CloseIcon = ({ className = '', onClick }) => (
    <div
        className = { className }
        onClick = { onClick }
    >
        &#x2715;
    </div>
)

export default CloseIcon;