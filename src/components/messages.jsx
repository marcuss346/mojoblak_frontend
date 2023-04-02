import React from "react";


export default function Message({ type, message }) {
    return (
        <>
            <div>
                <div className=" z-[0] fixed bottom-0 right-0">
                    <h1>{type}</h1>
                    <p>{message}</p>
                </div>
            </div>
        </>
    );
}