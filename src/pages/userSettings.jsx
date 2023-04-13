import SideBar from '../components/sideNavigation';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function UserSettings() {
  let Token = localStorage.getItem('Token');
  const nav = useNavigate();

  function deleteAcc() {
    axios
      .post(`http://localhost:3011/deleteUser`, {
        data: { Token: Token },
      })
      .then((response) => {
        console.log(response);
        nav('/');
      });
  }

  return (
    <div className="w-80% flex min-h-full bg-[#12263A]">
      <SideBar site="userSettings" />
      <div className="w-full h-screen overflow-y-scroll pl-2 pr-10 pt-3 center">
        <div
          className="text-center bg-transparent hover:bg-[#e77a75] hover:text-[#12263A] border-[#e77a75] border-2 text-[#e77a75]  py-1 px-2 rounded mx-2"
          onClick={deleteAcc}
        >
          Delete Account
        </div>
      </div>
    </div>
  );
}
