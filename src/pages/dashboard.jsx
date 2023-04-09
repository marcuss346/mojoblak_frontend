import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import Message from '../components/messages';
import { Lists } from '../components/listFile';
import SideBar from '../components/sideNavigation';
import { UploadFile } from '../components/uploadFile';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons';

function Dashboard() {
  const [files, setFiles] = useState([]);
  const [showing, setShowing] = useState([]);
  const [search, setSearch] = useState('');
  const [upload, setUpload] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [message, setMessage] = useState(false);
  const [msg, setMsg] = useState({});
  const Token = localStorage.getItem('Token');

  console.log(Token);

  useEffect(() => {
    console.log('LOADING FILES');
    axios
      .post('http://localhost:3011/getFiles', {
        data: { Token: localStorage.getItem('Token') },
      })
      .then((response) => {
        let tmp = response.data;
        setFiles(tmp);
        console.log(tmp);
      })
      .catch((err) => {
        console.log(err);
        setMessage(true);
        setMsg({ type: 'ERROR', message: 'failed to load file' });
      })
      .finally(() => {
        setRefresh(false);
      });
  }, [refresh]);

  useEffect(() => {
    setShowing(files.filter((file) => file.imeDatoteke.includes(search)));
  }, [files, search]);

  useEffect(() => {
    setTimeout(() => {
      setMessage(false);
    }, 1000);
  }, [message]);

  function change() {
    console.log('fired');
    setRefresh(true);
  }

  function handleSearchChange(e) {
    e.preventDefault();
    setSearch(e.target.value);
  }

  return (
    <div className="w-80% flex min-h-full bg-[#12263A]">
      <SideBar setRefreser={change} site="dashboard" />
      <div className="w-full h-screen overflow-y-scroll pl-2 pr-10 pt-3">
        <div className="flex flex-row items-center mb-4">
          <div className="w-3/4 h-8">
            <input
              type="text"
              className="h-full py-1 border pl-4 bg-transparent text-[#639FAB] border-[#639FAB] rounded-md w-3/4 outline-none"
              placeholder="Search for a file"
              onChange={handleSearchChange}
              value={search}
            />
          </div>
          <div className="grow"></div>
          <div
            className="h-full bg-transparent hover:bg-[#639FAB] hover:text-[#12263A] border-[#639FAB] border-2  text-[#639FAB] font-bold py-1 px-2  hover:border-transparent rounded mx-2"
            onClick={() => {
              setUpload(true);
            }}
          >
            <FontAwesomeIcon icon={faCloudArrowUp} />
          </div>
        </div>
        {showing.map((file, index) => (
          <Lists
            stateChanger={change}
            name={file.imeDatoteke}
            path={file.path}
            key={index}
          />
        ))}
      </div>
      <Message type={msg.type} message={msg.message} />
      {upload ? (
        <UploadFile
          setRefreser={setRefresh}
          allfiles={files}
          addFiles={setFiles}
          closeUpload={() => {
            setUpload(false);
          }}
        />
      ) : null}
    </div>
  );
}

export default Dashboard;
