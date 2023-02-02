import axios from 'axios';
import { getCookie, setCookie } from '../contexts/cookies'
import { useState } from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UploadFile } from '../components/uploadFile';
import { Lists } from '../components/listFile';

function Dashboard(e) {
    //e.preventDefault();
    const [name, setName] = useState();
    const [files, setFiles] = useState([]);
    const navigate = useNavigate();
    const id = getCookie('id');


    console.log(id);



    useEffect(() => {
        if (id == '') {
            navigate('/login');
        }
        console.log(id);
        axios.post('http://localhost:3011/userInfo', { data: { userId: id } }).then(response => {
            console.log(response);
            let a = response.data
            console.log(a.name);
            setName(a.name);
        }).catch(err => {
            console.log(err);
        })
    }, [])

    function logOut() {
        setCookie('id', '', 0);
        navigate('/');
    }

    useEffect(() => {
        axios.post('http://localhost:3011/getFiles', { data: { owner: getCookie('id') } }).then(response => {
            let tmp = response.data;
            setFiles(tmp);
            console.log(tmp);
        })
    }, []);


    console.log(name);

    return (
        <>
            <p>Welcome to dashboard {name}</p>
            <button onClick={logOut}>LOG OUT</button>
            {files.map((file, index) => (
                <Lists name={file.imeDatoteke} path={file.path} key={index} />
            ))}
            <UploadFile />
        </>
    );
}

export default Dashboard;