import axios from 'axios';
import { useState } from 'react'
import { useEffect } from 'react';
import { UploadFile } from '../components/uploadFile';
import { Lists } from '../components/listFile';
import SideBar from '../components/sideNavigation';

function Dashboard() {
    const [files, setFiles] = useState([]);
    // const [refresh, setRefresh] = useState(false);
    const Token = localStorage.getItem('Token');

    console.log(Token);

    useEffect(() => {
        setTimeout(() => {
            axios.post('http://localhost:3011/getFiles', { data: { Token: localStorage.getItem('Token') } }).then(response => {
                let tmp = response.data;
                setFiles(tmp);
                console.log(tmp);
                //setRefresh(true);
            }).catch(err => { console.log(err) })
        }, 1000)
    });

    return (
        <div className="flex min-h-full">
            <SideBar />
            <div>
                {files.map((file, index) => (
                    <Lists name={file.imeDatoteke} path={file.path} key={index} />
                ))}
                <UploadFile allfiles={files} addFiles={setFiles} />
            </div>
        </div>
    );
}

export default Dashboard;