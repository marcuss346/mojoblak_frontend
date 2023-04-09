import axios from 'axios';
import { useState, useEffect } from 'react';
import Loader from './loader';
import Message from '../components/messages';

export function UploadFile({ allfiles, addFiles, closeUpload, setRefreser }) {
  const [file, setFile] = useState();
  const [loader, setLoader] = useState(false);
  const [message, setMessage] = useState(false);
  const [msg, setMsg] = useState('');

  function handleChange(event) {
    setFile(event.target.files[0]);
  }

  useEffect(() => {
    if (message) {
      setTimeout(() => {
        setMessage(false);
      }, 5000);
    }
  }, [message]);

  function handleSubmit(event) {
    setLoader(true);
    if (!file) {
      setMsg({ type: 'error', message: 'No files selected' });
      setMessage(true);
      setLoader(false);
      return;
    }
    console.log(file);
    event.preventDefault();
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
    axios
      .post(url, formData, config)
      .then((response) => {
        console.log(response.data);
        setRefreser();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoader(false);
      });
  }

  return (
    <>
      <div className="min-h-full min-w-full fixed bg-[rgba(255,255,255,0.5)]">
        <div className="place-items-center rounded-md bg-[#244d75] w-1/2 h-3/4 px-5 py-5 absolute items-center flex flex-col gap-y-5 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
          <input
            type="file"
            name="file"
            className="file:bg-transparent hover:bg-[#EDE5A6] file:text-[#639FAB] font-bold py-2 px-4 file:border-solid file:border-[#639FAB] hover:border-transparent rounded"
            onChange={handleChange}
          />
          <br />
          <button
            onClick={handleSubmit}
            name="UPLOAD"
            className="bg-transparent hover:bg-[#EDE5A6] text-[#639FAB] font-bold py-2 px-4 border border-[#639FAB] hover:border-transparent rounded"
          >
            Upload
          </button>

          <button
            onClick={closeUpload}
            className="bg-transparent hover:bg-[#EDE5A6] text-[#639FAB] font-bold py-2 px-4 border border-[#639FAB] hover:border-transparent rounded"
          >
            Close
          </button>
        </div>
      </div>
      {loader ? <Loader /> : null}
      {message ? <Message type={msg.type} message={msg.message} /> : null}
    </>
  );
}
