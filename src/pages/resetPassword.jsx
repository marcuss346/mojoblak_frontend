import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function ResetPasswordPage() {
  const navigate = useNavigate();
  const url = window.location.search;
  const urlParams = new URLSearchParams(url);

  console.log(urlParams);

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

    const neki = {
      token: urlParams.get('token'),
      password: document.getElementById('password').value,
    };

    console.log(neki);

    axios
      .post('http://localhost:3011/updatePassword', { data: neki })
      .then((response) => {
        console.log('succsesful');
        navigate('/');
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      <form onSubmit={onSubmits}>
        <input
          id="password"
          type="password"
          name="password"
          placeholder="Password"
          minLength="8"
        ></input>
        <input
          id="repeat"
          type="password"
          name="repeatPassword"
          placeholder="Repeat Password"
        ></input>
        <input type="submit" />
      </form>
    </>
  );
}
