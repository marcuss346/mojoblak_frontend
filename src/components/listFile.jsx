import axios from "axios";
import { useState, useEffect } from 'react'
import { AiOutlineVerticalAlignBottom } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";
import Message from '../components/messages'



export function Lists(props) {
    console.log('file');
    const [message, setMessage] = useState(false);
    const [msg, setMsg] = useState({});



    function downloadFile() {
        console.log('download');

        axios.post('http://localhost:3011/download', { data: { path: props.path } })
            .then((response) => {
                console.log(response);
                let a = document.createElement('a');
                a.href = response.data;
                a.download = props.name;
                a.click();
            }).catch((error) => { console.log(error); setMessage(true); setMsg({ type: 'ERROR', message: 'failed to download file' }) })



    }

    function deleteFile() {
        axios.post('http://localhost:3011/moveToTrash', { data: { path: props.path } })
            .then((response) => {
                console.log(response);
            }).catch((err) => {
                console.error(err);
            })
    }


    useEffect(() => {
        if (message) {
            setTimeout(() => {
                setMessage(false);
            }, 1000)
        }
    }, [message])


    return (
        <>
            <div className="py-2">
                <div className="flex flex-row border items-center px-2 py-1 rounded-md border-[#639FAB]">
                    <p className="text-[#639FAB]" >{props.name}</p>
                    <div className="grow"></div>
                    <div className="grow"></div>
                    <button className="bg-transparent hover:bg-[#EDE5A6] text-[#639FAB] font-bold py-2 px-4  hover:border-transparent rounded mx-2" onClick={downloadFile}>Prenesi</button>
                    <button className="bg-transparent hover:bg-[#EDE5A6] text-[#639FAB] font-bold py-2 px-4  hover:border-transparent rounded mx-2" onClick={deleteFile}>Izbriši</button>
                </div>
            </div>
            {message ? <Message type={msg.type} message={msg.message} /> : null}
        </>
    );
}