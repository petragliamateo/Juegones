import React from 'react';

function Game({
  title = 'Title', description = '', url = '', img = '', id,
}) {
  const color = Math.floor(id / 2) === id / 2 ? 'nature-4' : 'nature-3';

  return (
    <div className={`bg-${color}`}>
      <div className="text-3xl font-semibold my-2">
        {title}
      </div>
      <div className="text-xl font-medium my-8">
        {description}
      </div>
      <img alt={title} src={img} className="w-1/2 mx-auto my-3" />
      <button type="button" className={`bg-black my-5 w-32 h-16 rounded-xl font-bold text-${color} shadow-xl hover:bg-nature-0 transition`}>
        <a href={url}>Jugar</a>
      </button>
    </div>
  );
}

export default Game;
