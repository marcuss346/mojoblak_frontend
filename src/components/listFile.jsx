import axios from "axios";
import { useState } from 'react'
import { useEffect } from 'react';



export function Lists(props) {
    console.log('file');
    const [link, setLink] = useState();



    function downloadFile() {
        console.log('download');

        axios.post('http://localhost:3011/download', { data: { path: props.path } })
            .then((response) => {
                console.log(response);
                setLink(response.data);
            })




        let a = document.createElement('a');
        a.href = link;
        a.download = props.name;

        a.click();



    }

    function deleteFile() {
        axios.post('http://localhost:3011/delete', { data: { path: props.path } })
            .then((response) => {
                console.log(response);
            }).catch((err) => {
                console.error(err);
            })
    }


    return (<>
        <p >To je ena od datotek, {props.name}</p>
        <button onClick={downloadFile}>DOWNLOAD</button>
        <button onClick={deleteFile}>DELETE</button>
    </>);
}