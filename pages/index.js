import Main from '../src/components/Main';
import Meta from '../src/components/Meta';
import Footer from '../src/components/Footer';

export default function Home() {
  return (
    <div className="bg-slate-900 h-full w-full absolute">
      <Meta />
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
