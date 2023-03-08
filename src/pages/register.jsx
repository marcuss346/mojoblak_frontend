import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
    const navigate = useNavigate();
    function onSubmits(e) {
        e.preventDefault();


        if (document.getElementById('password').value === document.getElementById('repeat').value) {
            console.log('password match');
        } else {
            alert('Passwords do not match');
            return;
        }

        let preveriMail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (document.getElementById('email').value.match(preveriMail)) {
            console.log('email in correct fromat');
        } else {
            alert('email not in correct fromat');
        }

        const neki = {
            name: document.getElementById('name').value,
            surname: document.getElementById('surname').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value
        }

        console.log(neki);

        axios.post('http://localhost:3011/register', { data: neki }
        ).then(response => {
            console.log("succsesful");
            navigate("/login");
        }).catch(err => {
            console.log(err);
        })
    }

    return (
        <>
            <form onSubmit={onSubmits}>
                <input id="name" type="text" name="name" placeholder="First Name"></input>
                <input id="surname" type="text" name="surname" placeholder="Surname"></input>
                <input id="email" type="text" name="email" placeholder="Email"></input>
                <input id="password" type="password" name="password" placeholder="Password" minLength="8"></input>
                <input id="repeat" type="password" name="repeatPassword" placeholder="Repeat Password"></input>
                <input type="submit"></input>
            </form>
        </>
    );
}

export default Register;