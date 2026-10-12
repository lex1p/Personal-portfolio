import { useEffect, useState } from 'react';

import { projects } from '@/app/src/files'
import React from 'react'

const FileViewer = () => {
    const [tab, settab] = useState(localStorage.getItem('tab') ?? 'Desktop');
    const [selectedFile, setselectedFile] = useState(''); //Styling

    const [fileData, setfileData] = useState([]);


    useEffect(()=> {
        localStorage.setItem('tab', tab);
    },[tab]);

  return (
    <div className='fileView'>
      <div className="sideBar">
        <p className={tab=== 'Desktop'? 'select': ''} onClick={()=> settab('Desktop')}>Desktop</p>
        <p className={tab=== 'Document'? 'select': ''} onClick={()=> settab('Document')} >Documents</p>
        <p className={tab=== 'Projects'? 'select': ''} onClick={()=> settab('Projects')} >Projects</p>
      </div>

      <div className="viewPane">
          <div className="files">
        {tab === 'Projects' &&
            projects.map(item => (
            <div onClick={()=> {
                setselectedFile(item.name);
                setfileData(item);
            }} className={selectedFile === item.name ? "file select": "file"}>
                <img src={item.icon} alt="item.name" />
                <p>{item.name}</p>
            </div>
            ))
        }
        </div>
        {fileData.length !== 0 && <div className="preview">
            <img src={fileData.icon} alt="" />
            <h2>{fileData.name}</h2>
            <p>{fileData.title}</p>
            <p className="small">{fileData.description}</p>
            <div className="ctaDiv">
                <button className="sec btn">Project</button>
                <button className="prim btn">Visit</button>
            </div>
        </div>}
      </div>
    </div>
  )
}

export default FileViewer
