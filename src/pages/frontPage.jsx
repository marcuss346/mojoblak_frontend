import { useNavigate } from "react-router-dom";

function FrontPage() {
    const navigate = useNavigate();

    function tologin() {
        navigate('/dashboard');
    }
    return (
        <>
            <div className="flex flex-col min-h-full bg-[#12263A]">
                <nav class="flex items-center justify-between flex-wrap bg-[#244d75] p-6">
                    <div class="flex items-center flex-shrink-0 text-white mr-6">
                        <svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" /></svg>
                    </div>
                    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                        <div class="text-sm lg:flex-grow">
                            <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-[#639FAB] hover:text-[#EDE5A6] mr-4">
                                Domov
                            </a>
                            <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-[#639FAB] hover:text-[#EDE5A6] mr-4">
                                O MojemOblaku
                            </a>
                            <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-[#639FAB] hover:text-[#EDE5A6]">
                                Uporaba
                            </a>
                        </div>
                        <div>
                            <p onClick={tologin} class="inline-block text-sm px-4 py-2 leading-none border rounded text-[#639FAB] border-[#639FAB] hover:border-transparent hover:text-[#639FAB] hover:bg-[#EDE5A6] mt-4 lg:mt-0">Prijavite se!</p>
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