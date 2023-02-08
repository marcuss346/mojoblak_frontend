import { useNavigate } from "react-router-dom";

function FrontPage() {
    const navigate = useNavigate();

    function tologin() {
        navigate('/login');
    }
    return (
        <>
            <p>HOME PAGE</p>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" onClick={tologin}>Login</button>
        </>
    );
}

export default FrontPage;