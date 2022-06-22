import React from 'react';

function Main({ children }) {
  return (
    <div className="bg-nature-2 w-full py-16 px-10 flex flex-col justify-center">
      <h1>
        Main
      </h1>
      <h2>
        Page
      </h2>
      {children}
    </div>
  );
}

export default Main;
