import axios from 'axios';
import { useState, useEffect } from 'react';
import Message from '../components/messages';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faDownload } from '@fortawesome/free-solid-svg-icons';

export function Lists({ stateChanger, name, path }) {
  console.log('file');
  const [message, setMessage] = useState(false);
  const [msg, setMsg] = useState({});

  function downloadFile() {
    console.log('download');

    axios
      .post('http://localhost:3011/download', { data: { path: path } })
      .then((response) => {
        console.log(response);
        let a = document.createElement('a');
        a.href = response.data;
        a.download = name;
        a.click();
      })
      .catch((error) => {
        console.log(error);
        setMessage(true);
        setMsg({ type: 'ERROR', message: 'failed to download file' });
      });
  }

  function deleteFile() {
    axios
      .post('http://localhost:3011/moveToTrash', { data: { path: path } })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  useEffect(() => {
    if (message) {
      setTimeout(() => {
        setMessage(false);
      }, 5000);
    }
  }, [message]);

  return (
    <>
      <div className="py-2">
        <div className="flex flex-row border items-center px-2 py-1 rounded-md border-[#BBDBDC]">
          <p className="text-[#639FAB]">{name}</p>
          <div className="grow"></div>
          <div className="grow"></div>
          <button
            className="bg-transparent hover:bg-[#639FAB] hover:text-[#12263A] border-[#639FAB] border-2  text-[#639FAB] font-bold py-1 px-2  hover:border-transparent rounded mx-2"
            onClick={downloadFile}
          >
            <FontAwesomeIcon icon={faDownload} />
          </button>
          <button
            className="bg-transparent hover:bg-[#e77a75] hover:text-[#12263A] border-[#e77a75] border-2 text-[#e77a75]  py-1 px-2 rounded mx-2"
            onClick={(event) => {
              deleteFile();
              stateChanger();
            }}
          >
            <FontAwesomeIcon icon={faTrashCan} />
          </button>
        </div>
      </div>
      {message ? <Message type={msg.type} message={msg.message} /> : null}
    </>
  );
}
