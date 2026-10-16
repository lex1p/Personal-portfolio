
"use client"
import { useState } from 'react';
import React, { useEffect } from 'react'
import { LucidAI_icon, TaskbarIcon } from '../client/Icons'
export const TaskBar = () => {
const [taskbaricons, settaskbaricons] = useState([]);


    useEffect(()=> {
        const timer =setInterval(() => {
            settaskbaricons(JSON.parse(localStorage.getItem("active_windows")));

            
        }, 500);
        

        return () => clearInterval(timer)
    },[])
  return (
    <div className='TaskBar'>
        {/* taskbar Icon here */}
        <div className="LucidTray">
            <LucidAI_icon />
        </div>
        {/* Our taskbar Icons tray */}
        <div className="iconsTray">
            {taskbaricons.map((icon, idx) => (
                <TaskbarIcon key={idx} isActive={icon?.isActive} name={icon.name} icon={icon.icon} path={icon.path}/>
            ))}
        </div>

        {/* Status bar showing the battery, bluetooth, volume, time */}
        <div className="statusbar">
            status
        </div>
    </div>
  )
}
