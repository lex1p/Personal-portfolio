import React, { useRef } from 'react'
import Draggable from 'react-draggable'


const Alert = ({ok, cancel, title}) => {
    const windowRef = useRef(null);
  return (

    <Draggable nodeRef={windowRef}>
    <div ref={windowRef} className='alert'>
      <p>{title}</p>
      <div className="ctaDiv">
        <button onClick={cancel} className="btn sec">Cancel</button>
        <button onClick={ok} className="btn prim">OK</button>
      </div>
    </div>

    </Draggable>
  )
}

export default Alert
