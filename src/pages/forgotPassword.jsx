import axios from "axios";



function Forgot() {




    function SendReset(e) {
        e.preventDefault();

        const neki = {
            email: document.getElementById('name').value,
        };
        console.log(neki);

        console.log("hello");
        axios.post('http://localhost:3011/forgotPassword', { data: neki }
        ).then(response => {
            alert('email to reset password has been sent')
        }).catch(err => {
            console.log(err);
            alert('USER NOT FOUND');
        })
    }


    return (
        <>
            <div className="">
                <form onSubmit={SendReset}>
                    <input type="text" id="name" name="email" placeholder="Enter your email"></input>
                    <input type="submit"></input>
                </form>
            </div>
        </>
    );
}

export default Forgot;