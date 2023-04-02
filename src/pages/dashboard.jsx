import axios from 'axios';
import { useState } from 'react'
import { useEffect } from 'react';
import Message from '../components/messages'
import { Lists } from '../components/listFile';
import SideBar from '../components/sideNavigation';

function Dashboard() {
    const [files, setFiles] = useState([]);
    // const [refresh, setRefresh] = useState(false);
    const [message, setMessage] = useState(false);
    const [msg, setMsg] = useState({});
    const Token = localStorage.getItem('Token');

    console.log(Token);

    useEffect(() => {
        setTimeout(() => {
            axios.post('http://localhost:3011/getFiles', { data: { Token: localStorage.getItem('Token') } }).then(response => {
                let tmp = response.data;
                setFiles(tmp);
                console.log(tmp);
                //setRefresh(true);
            }).catch(err => { console.log(err); setMessage(true); setMsg({ type: 'ERROR', message: 'failed to load file' }) })
        }, 1000)
    });

    useEffect(() => {
        setTimeout(() => {
            setMessage(false);
        }, 1000)
    }, [message])

    return (
        <div className=" w-80% flex min-h-full bg-[#12263A]">
            <SideBar />
            <div className="w-full pl-2 pr-10">
                {files.map((file, index) => (
                    <Lists name={file.imeDatoteke} path={file.path} key={index} />
                ))}

            </div>
            <Message type={msg.type} message={msg.message} />
        </div>
    );
}

export default Dashboard;