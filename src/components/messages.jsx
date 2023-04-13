import React from 'react';

export default function Message({ type, message }) {
  return (
    <>
      <div>
        <div className="bg-[#639FAB] z-[0] fixed bottom-0 right-0">
          <h1 className="text-[#12263A]">{type}</h1>
          <p className="text-[#12263A]">{message}</p>
        </div>
      </div>
    </>
  );
}
