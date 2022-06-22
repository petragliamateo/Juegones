/* eslint-disable react/jsx-no-bind */
import { useState } from 'react';
import Main from '../src/components/Main';
import Meta from '../src/components/Meta';
import Footer from '../src/components/Footer';
import Navbar from '../src/components/Navbar';
import Game from '../src/components/Game';
import data from '../src/GamesData.json';

// Watcher de tailwind:
// npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch

// Custom Palette "nature-n" for n from 0 to 4, in tailwind.config

export default function Home() {
  const [tagState, setTagState] = useState(null);

  const categorys = [];
  data.forEach((item) => {
    item.tags.forEach((tag) => categorys.push(tag));
  });
  categorys.forEach((value) => {
    while (categorys.indexOf(value) !== categorys.lastIndexOf(value)) {
      categorys.splice(categorys.lastIndexOf(value), 1);
    }
  });

  function handleFilter(event) {
    setTagState(event.target.textContent);
  }

  return (
    <div className="bg-nature-0 h-full w-full absolute">
      <Meta />
      <Navbar tags={categorys} handleFilter={handleFilter} />
      <Main>
        <div className="flex flex-col">
          {data.map((item) => (
            <div key={item.id} className="m-5">
              {!tagState || item.tags.indexOf(tagState) !== -1
                ? (
                  <Game
                    title={item.title}
                    description={item.description}
                    url={item.url}
                    git={item.git}
                    img={item.img}
                    id={item.id}
                  />
                )
                : null}
            </div>
          ))}
        </div>
      </Main>

      <Footer />
    </div>
  );
}
