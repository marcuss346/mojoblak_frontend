import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Message from '../components/messages';

function Register() {
  const navigate = useNavigate();
  const [message, setMessage] = useState(false);
  const [msg, setMsg] = useState({});

  useEffect(() => {
    if (message) {
      setTimeout(() => {
        setMessage(false);
      }, 5000);
    }
  }, [message]);

  function onSubmits(e) {
    e.preventDefault();

    if (
      document.getElementById('password').value ===
      document.getElementById('repeat').value
    ) {
      console.log('password match');
    } else {
      alert('Passwords do not match');
      return;
    }

    let preveriMail =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (document.getElementById('email').value.match(preveriMail)) {
      console.log('email in correct fromat');
    } else {
      alert('email not in correct fromat');
    }

    const neki = {
      name: document.getElementById('name').value,
      surname: document.getElementById('surname').value,
      email: document.getElementById('email').value,
      password: document.getElementById('password').value,
    };

    axios
      .post('http://localhost:3011/register', { data: neki })
      .then((response) => {
        console.log('succsesful');
        navigate('/login');
      })
      .catch((err) => {
        console.log(err.response.data);
        setMsg({ type: 'error', message: err.response.data });
        setMessage(true);
      });
  }

  return (
    <>
      <div className=" w-full h-full bg-[#12263A]">
        <div className="place-items-center rounded-md bg-[#244d75] w-1/2 h-3/4 px-5 py-5 absolute items-center flex flex-col gap-y-5 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
          <div className="w-1/2 h-9">
            <input
              className="text-[#639FAB] border outline-none bg-transparent pl-4 h-full w-full rounded-md"
              id="name"
              type="text"
              name="name"
              placeholder="First Name"
            ></input>
          </div>
          <div className="w-1/2 h-9">
            <input
              className=" text-[#639FAB] border bg-transparent pl-4 h-full w-full rounded-md"
              id="surname"
              type="text"
              name="surname"
              placeholder="Surname"
            ></input>
          </div>
          <div className="w-1/2 h-9">
            {' '}
            <input
              className="text-[#639FAB] border bg-transparent pl-4 h-full w-full rounded-md"
              id="email"
              type="text"
              name="email"
              placeholder="Email"
            ></input>
          </div>
          <div className="w-1/2 h-9">
            <input
              className="text-[#639FAB] border bg-transparent pl-4 h-full w-full rounded-md"
              id="password"
              type="password"
              name="password"
              placeholder="Password"
              minLength="8"
            ></input>
          </div>
          <div className="w-1/2 h-9">
            <input
              className="text-[#639FAB] border bg-transparent pl-4 h-full w-full rounded-md"
              id="repeat"
              type="password"
              name="repeatPassword"
              placeholder="Repeat Password"
            ></input>
          </div>
          <div>
            <input
              className="text-[#639FAB] bg-transparent hover:bg-[#EDE5A6] text-[#639FAB] font-bold py-2 px-4 border border-[#639FAB] hover:border-transparent rounded"
              onClick={onSubmits}
              type="submit"
            ></input>
          </div>
        </div>
      </div>
      {message ? <Message type={msg.type} message={msg.message} /> : null}
    </>
  );
}

export default Register;
