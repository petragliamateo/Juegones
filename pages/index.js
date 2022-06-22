import Main from '../src/components/Main';
import Meta from '../src/components/Meta';
import Footer from '../src/components/Footer';
import Navbar from '../src/components/Navbar';

// Watcher de tailwind:
// npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch

// Custom Palette "nature-n" for n from 0 to 4, in tailwind.config

export default function Home() {
  return (
    <div className="bg-nature-0 h-full w-full absolute">
      <Meta />
      <Navbar />
      <Main>
        <div>
          childern 1
        </div>
        <div>
          childern 2
        </div>
        <div>
          childern 3
        </div>
      </Main>

      <Footer />
    </div>
  );
}
