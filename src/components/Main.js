import React from 'react';

function Main({ children }) {
  return (
    <div className="bg-blue-300 py-16 px-10">
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
