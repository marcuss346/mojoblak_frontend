import axios from 'axios';
import { useState } from 'react'
import { useEffect } from 'react';
import { ListsDeleted } from '../components/listDeleted';
import SideBar from '../components/sideNavigation';

function Trash() {
    const [files, setFiles] = useState([]);
    const Token = localStorage.getItem('Token');

    console.log(Token);


    useEffect(() => {
        axios.post('http://localhost:3011/trashFiles', { data: { Token: localStorage.getItem('Token') } }).then(response => {
            let tmp = response.data;
            setFiles(tmp);
            console.log(tmp);
        })
    }, []);


    return (
        <>
            <div className="flex">
                <SideBar />
                <div>
                    {files.map((file, index) => (
                        <ListsDeleted name={file.imeDatoteke} path={file.path} key={index} />
                    ))}
                </div>
            </div>
        </>

    );
}

export default Trash;