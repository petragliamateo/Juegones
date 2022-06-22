import React from 'react';

function Main({ children }) {
  return (
    <div className="bg-nature-2 w-full py-16 px-10 text-center">
      <h1 className="mb-11 font-bold text-4xl text-slate-700">
        Bienvenidos!
      </h1>
      {children}
    </div>
  );
}

export default Main;
