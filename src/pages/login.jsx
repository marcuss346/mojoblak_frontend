import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { setCookie } from '../contexts/cookies'


function Login() {
    const navigate = useNavigate();

    function HandleLogin(e) {
        e.preventDefault();

        const neki = {
            email: document.getElementById('name').value,
            password: document.getElementById('password').value
        };
        console.log(neki);

        console.log("hello");
        axios.post('http://192.168.1.72:3011/login', { data: neki }
        ).then(response => {
            console.log("succsesful");


            setCookie('id', response.data.id, 99999);


            navigate('/dashboard');
        }).catch(err => {
            console.log(err);
            alert('USER NOT FOUND');
        })
    }


    return (
        <>
            <form onSubmit={HandleLogin}>
                <input type="text" id="name" name="email" placeholder="Enter your email"></input>
                <input type="password" id="password" name="password" placeholder="Enter your password"></input>
                <input type="submit"></input>
            </form>

            <p>
                <Link to="/register">Don/t have an account?</Link>
            </p>
        </>
    );
}

export default Login;