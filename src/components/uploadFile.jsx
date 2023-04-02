import axios from 'axios';
import { useState } from 'react';
import Loader from './loader';

export function UploadFile({ allfiles, addFiles, closeUpload }) {
    const [file, setFile] = useState()
    const [loader, setLoader] = useState(false);

    function handleChange(event) {
        setFile(event.target.files[0])
    }

    function handleSubmit(event) {
        setLoader(true);
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
            /*const dt = {
                imeDatoteke: response.data.imeDatoteke,
                path: response.data.path
            }
            let a = [];
            allfiles.forEach(element => {
                a.push(element)
            });
            a.push(dt);
            addFiles(a);*/
        }).catch((err) => {
            console.log(err);
        }).finally(() => {
            setLoader(false);
        });
    }


    return (
        <>

            <div className="min-h-full min-w-full fixed bg-[rgba(255,255,255,0.5)]">

                <div className="place-items-center rounded-md bg-[#244d75] w-1/2 h-3/4 px-5 py-5 absolute items-center flex flex-col gap-y-5 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
                    <h1>React File Upload</h1>
                    <form onSubmit={handleSubmit}>
                        <input type="file" name="file" onChange={handleChange} />
                        <button type="submit" name="UPLOAD">Upload</button>
                    </form>

                    <button onClick={closeUpload}>Close</button>
                </div>

            </div>
            {loader ? <Loader /> : null}
        </>)
}