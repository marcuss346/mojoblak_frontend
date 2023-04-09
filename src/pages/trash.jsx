import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { ListsDeleted } from '../components/listDeleted';
import SideBar from '../components/sideNavigation';

function Trash() {
  const [files, setFiles] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const Token = localStorage.getItem('Token');

  console.log(Token);

  useEffect(() => {
    axios
      .post('http://localhost:3011/trashFiles', {
        data: { Token: localStorage.getItem('Token') },
      })
      .then((response) => {
        let tmp = response.data;
        setFiles(tmp);
        console.log(tmp);
      })
      .finally((ev) => {
        setRefresh(false);
      });
  }, [refresh]);

  function change() {
    console.log('fired');
    setRefresh(true);
  }

  return (
    <>
      <div className="w-80% flex min-h-full bg-[#12263A]">
        <SideBar site="trash" />
        <div className="w-full pl-2 pr-10 h-screen overflow-y-scroll">
          {files.map((file, index) => (
            <ListsDeleted
              stater={change}
              name={file.imeDatoteke}
              path={file.path}
              key={index}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Trash;
