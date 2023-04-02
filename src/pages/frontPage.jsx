import { useNavigate } from "react-router-dom";
import logo from '../assets/IMG_0578.png'

function FrontPage() {
    const navigate = useNavigate();

    function tologin() {
        navigate('/dashboard');
    }
    return (
        <>
            <div className="flex flex-col min-h-full bg-[#12263A]">
                <nav className="flex items-center justify-between flex-wrap bg-[#244d75] p-6">
                    <div className="flex items-center flex-shrink-0 text-white mr-6">
                        <img className="fill-current w-[150px] mr-2" src={logo}></img>
                    </div>
                    <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                        <div className="text-sm lg:flex-grow">
                            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-[#7bc3d1] hover:text-[#EDE5A6] mr-4">
                                Domov
                            </a>
                            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-[#7bc3d1] hover:text-[#EDE5A6] mr-4">
                                O MojemOblaku
                            </a>
                            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-[#7bc3d1] hover:text-[#EDE5A6]">
                                Uporaba
                            </a>
                        </div>
                        <div>
                            <p onClick={tologin} className="inline-block text-sm px-4 py-2 leading-none border rounded text-[#7bc3d1] border-[#639FAB] hover:border-transparent hover:text-[#639FAB] hover:bg-[#EDE5A6] mt-4 lg:mt-0">Prijavite se!</p>
                        </div>
                    </div>
                </nav>
                <div id="Domov">
                    <h1>Pozdravljeni v vaš osebni oblak</h1>

                </div>
            </div>
        </>
    );
}

export default FrontPage;