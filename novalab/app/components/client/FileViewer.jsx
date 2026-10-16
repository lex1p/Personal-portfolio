"use-client"
import { useEffect, useState } from 'react';

import { desktop, projects } from '@/app/src/files'
import Alert from './Alert';

const FileViewer = () => {
    const [tab, settab] = useState(localStorage.getItem('tab') ?? 'Desktop');
    const [selectedFile, setselectedFile] = useState(''); //Styling

    const [fileData, setfileData] = useState([]);
    const [showAlert, setshowAlert] = useState(false)


    useEffect(()=> {
        localStorage.setItem('tab', tab);
    },[tab]);

  return (
    <div className='fileView'>
      <div className="sideBar">
        <p className={tab=== 'Desktop'? 'select': ''} onClick={()=> settab('Desktop')}>Desktop</p>
        <p className={tab=== 'Documents'? 'select': ''} onClick={()=> settab('Documents')} >Documents</p>
        <p className={tab=== 'Projects'? 'select': ''} onClick={()=> settab('Projects')} >Projects</p>
      </div>

      <div className="viewPane">
          <div className="files">
        {tab === 'Desktop' &&
            desktop.map(item => (
            <div onClick={()=> {
                setselectedFile(item);
                localStorage.setItem('tab',item);
                settab(item)
                setfileData([]);
            }} className={selectedFile === item ? "file select": "file"}>
                <img src={'/folder_file.png'} alt="item.name" />
                <p>{item}</p>
            </div>
            ))
        }
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
        {fileData.length !== 0 && <div title={fileData.title} className="preview">
            <img src={fileData.icon} alt="" />
            <h2>{fileData.name}</h2>
            <p>{fileData.title}</p>
            <p className="small">{fileData.description}</p>
            <div className="ctaDiv">
                {showAlert && <Alert cancel={()=> setshowAlert(false)} title={'Open new tab'} ok={()=> location.href = fileData.path}/>}
                <button onClick={() => {fileData.src?location.href = fileData.src: ''}} title={fileData.src?'': 'Not available'} className="sec btn">Project</button>
                <button onClick={() => setshowAlert(true)} className="prim btn">Visit</button>
            </div>
        </div>}
      </div>
    </div>
  )
}

export default FileViewer
