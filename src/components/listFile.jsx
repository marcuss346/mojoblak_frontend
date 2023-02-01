import axios from "axios";


export function Lists(props) {
    console.log('file');

    function downloadFile() {
        console.log('download');

        axios.post('http://localhost:3011/download', { data: { path: props.path } })
            .then((response) => {
                console.log(response);
            })

    }


    return (<>
        <p >To je ena od datotek, {props.path}</p>
        <button onClick={downloadFile}>DOWNLOAD</button>
    </>);
}