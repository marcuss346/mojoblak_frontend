import React from 'react';

import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react'


export default function SideBar() {
    const nav = useNavigate();
    const [name, setName] = useState();
    const Token = localStorage.getItem('Token');

    useEffect(() => {
        if (!Token) {
            nav('/login');
        }

        axios.post('http://localhost:3011/userInfo', { data: { Token: Token } }).then(response => {
            if (response.data.auth == false) {
                localStorage.removeItem('Token');
                nav('/login');
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
        nav('/');
    }

    return (

        <nav className="w-1/6 bg-primary h-screen flex flex-col">
            <div className="width-full hover:bg-[#000000] py-4 px-8">Pozdravljeni, {name}</div>
            <div className="width-full hover:bg-accent py-4 px-8" onClick={() => { nav('/dashboard') }}>Files</div>
            <div className="width-full hover:bg-accent py-4 px-8" onClick={() => { nav('/trash') }}>Trash</div>
            <div className="grow"></div>
            <div className="width-full hover:bg-accent py-4 px-8" onClick={logOut}>Log Out</div>
        </nav>

    );
}


