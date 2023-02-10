import axios from 'axios';
import { getCookie, setCookie } from '../contexts/cookies'
import { useState } from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UploadFile } from '../components/uploadFile';
import { Lists } from '../components/listFile';

function Dashboard() {
    const [name, setName] = useState();
    const [files, setFiles] = useState([]);
    const navigate = useNavigate();
    const Token = localStorage.getItem('Token');

    console.log(Token);


    useEffect(() => {
        if (!Token) {
            navigate('/login');
        }

        axios.post('http://localhost:3011/userInfo', { data: { Token: Token } }).then(response => {
            if (response.data.auth == false) {
                localStorage.removeItem('Token');
                navigate('/login');
            } else {
                console.log(response);
                let a = response.data
                console.log(a.name);
                setName(a.name);
            }
        }).catch(err => {
            console.log(err);
        })
    }, [])

    function logOut() {
        axios.post('http://localhost:3011/logout', { data: { Token: Token } }).then(response => {
            console.log('logout succsess');
        }).catch(err => {
            console.log(err);
        })
        localStorage.removeItem('Token');
        navigate('/');
    }

    useEffect(() => {
        axios.post('http://localhost:3011/getFiles', { data: { Token: localStorage.getItem('Token') } }).then(response => {
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