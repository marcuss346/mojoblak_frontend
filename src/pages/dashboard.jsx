import axios from 'axios';
import { getCookie, setCookie } from '../contexts/cookies'
import { useState } from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard(e) {
    //e.preventDefault();
    const [name, setName] = useState();
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

    console.log(name);

    return (
        <>
            <p>Welcome to dashboard {name}</p>
            <button onClick={logOut}>LOG OUT</button>
        </>
    );
}

export default Dashboard;