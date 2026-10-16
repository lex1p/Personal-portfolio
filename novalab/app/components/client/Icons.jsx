"use client"

import { useEffect, useRef, useState } from 'react'
import Draggable from 'react-draggable'
import Alert from './Alert'



export const  TaskbarIcon = ({name,path, icon, isActive}) => {
  const [showAlert, setshowAlert] = useState(false);

  
  return (
    // Taskbar Icon
    <>
      {showAlert && <Alert cancel={(()=> setshowAlert(false))} ok={() => window.open(`${path}`, '_blank', 'noopener, noreferrer') } title = 'This site opens on a new page' />}
    <img onClick={()=> setshowAlert(true)} title={name} className={`tb_icon ${ isActive? "activeIcon": ""} icon`} src={icon} alt={icon} />
    </>
  )
}



export const  LucidAI_icon = () => {
  
  return (
    // Lucid AI Icon
      <img title='Chat LucyAI' className='tb_icon lucidicon icon' src= '/lucidAI.png' alt={'Lucid AI'} />
  
  )
}


export function DesktopIcon ({name, path, icon, isActive, clicK}) {
  const nodeRef = useRef(null);
  
    return (
        // Destop Icon

         <Draggable grid={[20,20]} nodeRef={nodeRef}>
        <div onDoubleClick ={clicK} ref={nodeRef} draggable = {false} className="dt_icon">
            <img draggable ={false} className='tb_icon icon' src={icon} alt={icon} />
            <p contentEditable>{name}</p>
        </div>
          </Draggable>
        
    )
}

