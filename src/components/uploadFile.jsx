import axios from 'axios';
import { useState } from 'react';
import { getCookie } from '../contexts/cookies';

export function UploadFile() {
    const [file, setFile] = useState()

    function handleChange(event) {
        setFile(event.target.files[0])
    }

    function handleSubmit(event) {
        console.log(file);
        event.preventDefault()
        const url = 'http://localhost:3011/uploadFile';
        const formData = new FormData();
        formData.append('owner', localStorage.getItem('Token'));
        formData.append('file', file);
        formData.append('fileName', file.name);
        const config = {
            headers: {
                'content-type': 'multipart/form-data',
            },
        };
        axios.post(url, formData, config).then((response) => {
            console.log(response.data);
        }).catch((err) => {
            console.log(err);
        });
    }


    return (
        <>
            <div className="App">

                <h1>React File Upload</h1>
                <form onSubmit={handleSubmit}>
                    <input type="file" name="file" onChange={handleChange} />
                    <button type="submit" name="UPLOAD">Upload</button>
                </form>

            </div>
        </>)
}