import axios from "axios";
import { Link, useNavigate } from "react-router-dom";



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
            localStorage.setItem('Token', response.data.Token);
            navigate('/dashboard');
        }).catch(err => {
            console.log(err);
            alert('USER NOT FOUND');
        })
    }


    return (
        <div className=" w-full h-full bg-[#12263A]">
            <div className="place-items-center rounded-md bg-[#244d75] w-1/2 h-3/4 px-5 py-5 absolute items-center flex flex-col gap-y-5 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">

                <div className="w-1/2 h-9"><input className="border pl-4 bg-transparent rounded-md h-full w-full" type="text" id="name" name="email" placeholder="email"></input></div>
                <div className="w-1/2 h-8"><input className=" border rounded-md bg-transparent pl-4 h-full w-full " type="password" id="password" name="password" placeholder="password"></input></div>
                <div><input className="bg-transparent hover:bg-[#EDE5A6] text-[#639FAB] font-bold py-2 px-4 border border-[#639FAB] hover:border-transparent rounded" onClick={HandleLogin} type="submit" value="Login"></input></div>
                <p className="w-4/5 text-[#639FAB]">Don't have an account?</p>
                <p className="w-4/5 text-[#639FAB]"><Link to="/register">Register Here</Link></p>

            </div>
        </div>
    );
}

export default Login;