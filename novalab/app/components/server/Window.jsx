
"use client"
import { useEffect, useRef, useState } from 'react';
import React from 'react';
import { Resizable } from 'react-resizable';
import 'react-resizable/css/styles.css';
import Draggable from 'react-draggable'

const Window = ({title, children, close, isActive, id}) => {
    const [size, setsize] = useState({ width: 80, height: 80 });
    const [isMaximized, setisMaximized] = useState(false);
    const [isMinimized, setisMinimized] = useState(false);
    const windowRef = useRef(null);
    const [zindex, setzindex] = useState(1);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    function comeTop(){
        const index = Number(localStorage.getItem('index')) + 2;
        localStorage.setItem('index', index);
      setzindex(localStorage.getItem('index'));
    }

    


    useEffect(() => {
        if (!isActive) {
            windowRef.current.style.display = 'none';
        } else {
            windowRef.current.style.display = 'flex';
        }
    }, [isActive]);




    const toggleMaximize = () => {
        const next = !isMaximized;
        setisMaximized(next);
        setsize(next ? { width: 100, height: 100 } : { width: 80, height: 80 });
    };

  return (
<Draggable nodeRef={windowRef} cancel=".react-resizable-handle">

        <div onClick={()=> {
            comeTop();
        }} ref={windowRef}  className='window' style={{
            zIndex: zindex,
            height: `${size.height}%`,
            width: `${size.width}%`
        }}>
      <div className="windowHead">
        <p className="title">{title}</p>
        <div className="controls">
            <div onClick={close} title='minimize' className="control min"></div>
            <div onClick={toggleMaximize} title='maximize' className="control max"></div>
            <div onClick={close} title='close' className="control close"></div>
        </div>
      </div>

      <div className="windowBody">
        {children}
      </div>
    </div>

</Draggable>
    
  )
}

export default Window
