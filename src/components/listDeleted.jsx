import axios from 'axios';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faRotateLeft } from '@fortawesome/free-solid-svg-icons';

export function ListsDeleted({ stater, name, path }) {
  console.log('file');
  const [link, setLink] = useState();

  function downloadFile() {
    console.log('download');

    axios
      .post('http://localhost:3011/restore', { data: { path: path } })
      .then((response) => {
        console.log(response);
        setLink(response.data);
        stater();
      });
  }

  function deleteFile() {
    axios
      .post('http://localhost:3011/delete', { data: { path: path } })
      .then((response) => {
        console.log(response);
        stater();
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <>
      <div className="py-2">
        <div className="flex flex-row border items-center px-2 py-1 rounded-md border-[#639FAB]">
          <p className="text-[#639FAB]">{name}</p>
          <div className="grow"></div>
          <div className="grow"></div>
          <button
            className="bg-transparent hover:bg-[#639FAB] hover:text-[#12263A] border-[#639FAB] border-2  text-[#639FAB] font-bold py-1 px-2  hover:border-transparent rounded mx-2"
            onClick={downloadFile}
          >
            <FontAwesomeIcon icon={faRotateLeft} />
          </button>
          <button
            className="bg-transparent hover:bg-[#e77a75] hover:text-[#12263A] border-[#e77a75] border-2 text-[#e77a75]  py-1 px-2 rounded mx-2"
            onClick={deleteFile}
          >
            <FontAwesomeIcon icon={faTrashCan} />
          </button>
        </div>
      </div>
    </>
  );
}
