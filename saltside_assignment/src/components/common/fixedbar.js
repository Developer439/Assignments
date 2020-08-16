import React, { useState, useEffect, useRef } from 'react';


const FixedBar = ({top = true, children, className = ''}) => {
    const [height, setHeight] = useState(0);
    const innerDiv = useRef(null);

    useEffect(() => {
        setHeight(innerDiv.current.getBoundingClientRect().height);
    },[children])

    return (
        <div style = {{ height }}>
            <div className = {`fixedbar ${ top ? 'top' : 'bottom' } ${ className }`} ref = { innerDiv }>
                { children }
            </div>
        </div>
    )
}

export default FixedBar;