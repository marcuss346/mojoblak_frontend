import React from 'react';

import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react'
import { UploadFile } from './uploadFile';


export default function SideBar() {
    const nav = useNavigate();
    const [name, setName] = useState();
    const [upload, setUpload] = useState(false);
    const [files, setFiles] = useState([]);
    const Token = localStorage.getItem('Token');


    useEffect(() => {
        let Token = localStorage.getItem('Token');;
        if (!Token) {
            nav('/login');
        }


        axios.post('http://localhost:3011/userInfo', { data: { Token: Token } }).then(response => {
            if (response.data.auth === false) {
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
    }, [nav])

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
        <>
            <nav className="w-20% bg-primary h-screen flex flex-col gap-y-0.5 pl-2 pr-2 border-solid border rounded-md border-[#639FAB]">
                <div className="width-full mr-2 text-white py-4 px-8 text-[#639FAB] hover:cursor-default">Pozdravljeni, {name}</div>
                <div className="width-full hover:cursor-pointer  rounded-lg hover:animate-fade bg-[#639FAB] hover:bg-[#EDE5A6] text-white py-4 px-8 text-[#12263A]" onClick={() => { setUpload(true) }}>Upload</div>
                <div className="width-full hover:cursor-pointer rounded-lg hover:animate-fade hover:bg-[#EDE5A6] text-white py-4 px-8 text-[#639FAB]" onClick={() => { nav('/dashboard') }}>Files</div>
                <div className="width-full hover:cursor-pointer  rounded-lg hover:animate-fade hover:bg-[#EDE5A6] text-white py-4 px-8 text-[#639FAB]" onClick={() => { nav('/trash') }}>Trash</div>
                <div className="grow"></div>
                <div className="width-full hover:cursor-pointer mb-2  rounded-lg hover:animate-fade hover:bg-[#EDE5A6] text-white py-4 px-8 text-[#639FAB]" onClick={logOut}>Log Out</div>
            </nav>
            {upload ? <UploadFile allfiles={files} addFiles={setFiles} closeUpload={() => { setUpload(false) }} /> : null}
        </>

    );

}