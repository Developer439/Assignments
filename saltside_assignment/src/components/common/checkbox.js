import React from 'react';

const CheckBox = (props) => {
    return (
        <label style = {{ ...props.style, position: 'relative' }}>
            <input
                type = 'checkbox'
                value = { props.value }
                checked = { props.checked }
                onChange = { (event) => props.handleChange(event, props.index) }
                style = {{ visibility: 'hidden' }}
                name = { props.name }
            />
            { props.showValue }
            <span style = {{
                position: 'absolute',
                left: 0,
                top: '7px',
                width: '15px',
                height: '15px',
                border: '1px solid  #029B78',
                background: props.checked ? '#029B78' : '#fff'
            }}></span>
            <span style = {{
                position: 'absolute',
                left: '4px',
                top: '7px',
                width: '6px',
                height: '11px',
                border: '1px solid #fff',
                borderWidth: '0 2px 2px 0',
                transform: 'rotate(45deg)',
                zIndex: 2
            }}></span>
            {props.innerText?props.innerText:''}
        </label>
    );
}

export default CheckBox;