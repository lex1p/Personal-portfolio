
"use client"
import { useEffect, useState } from 'react';
import { active_apps, sys_icons } from '@/app/src/system_icons'
import React from 'react'
import { DesktopIcon } from '../client/Icons'
import Window from './Window';
import { TaskBar } from './TaskBar';
import { pathRegistry } from '@/app/src/registry';


const HomeIconTray = () => {
    const icons = sys_icons;
    const [openedWindows, setopenedWindows] = useState([])
    const activeWindows = [...active_apps, ...openedWindows];

    useEffect(()=> {
      localStorage.setItem('active_windows', JSON.stringify(activeWindows));
      localStorage.setItem('opened_windows', JSON.stringify(openedWindows));
    },[activeWindows,openedWindows]);


    function rightClick(e) {
      e.preventDefault()
    }
   
      
    
    
  return (
    <div onContextMenu ={rightClick} className='homeIconTray'>
      {icons.map((icon, idx)=> (
        <DesktopIcon key = {idx} clicK={()=> {
          setopenedWindows(prev => [...prev, {
            name: icon.name,
            isActive: true,
            path: icon.path,
            type: icon.type,
            icon: icon.icon
          }])
        }} name={icon.name} icon={icon.icon}/>
      )) }


      {
        openedWindows.map((window, idxw) => {
          const PathComponent = pathRegistry[window.path]
          return (
          <Window key={idxw} close={()=> {
            const filter = openedWindows.filter((item, idxf) =>   idxf !== idxw);
            

            setopenedWindows(filter)

            localStorage.setItem('active_windows', JSON.stringify(filter))
          }} id = {idxw} isActive={window.isActive}  title={window.name}>
            <PathComponent />
          </Window>
        )
        })
      }

      

    </div>
  )
}

export default HomeIconTray
