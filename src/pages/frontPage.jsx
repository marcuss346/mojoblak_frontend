import { useNavigate } from "react-router-dom";

function FrontPage() {
    const navigate = useNavigate();

    function tologin() {
        navigate('/login');
    }
    return (
        <>
            <p>HOME PAGE</p>
            <button onClick={tologin}>Login</button>
        </>
    );
}

export default FrontPage;