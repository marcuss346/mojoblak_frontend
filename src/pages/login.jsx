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
        axios.post('http://localhost:3011/login', { data: neki }
        ).then(response => {
            console.log("succsesful");


            setCookie('id', response.data.UserID, 99999);
            localStorage.setItem('Token', response.data.Token)


            navigate('/dashboard');
        }).catch(err => {
            console.log(err);
            alert('USER NOT FOUND');
        })
    }


    return (
        <>
            <div className="">
                <form onSubmit={HandleLogin}>
                    <input type="text" id="name" name="email" placeholder="Enter your email"></input>
                    <input type="password" id="password" name="password" placeholder="Enter your password"></input>
                    <input type="submit"></input>
                </form>

                <p>
                    Don/t have an account?
                    <Link to="/register">Register Here</Link>
                </p>
            </div>
        </>
    );
}

export default Login;