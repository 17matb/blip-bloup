import './App.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function App() {
  const data = [
    { ipAddress: '0.0.0.0', timestamp: 1763729247000 },
    { ipAddress: '0.0.0.0', timestamp: 1763729247000 },
    { ipAddress: '0.0.0.0', timestamp: 1763729247000 },
  ];
  return (
    <>
      <header>
        <p className="text-2xl font-bold">blip-bloup</p>
        <p className="text-black/70">
          Pressez le bouton pour enregistrer un ping.
        </p>
      </header>
      <section className="border border-black/20 rounded-xl p-4 my-8 flex flex-col">
        <div className="grid grid-cols-2">
          <p className="font-bold">IP</p>
          <p className="font-bold">Timestamp</p>
          {data.map((item, index) => (
            <>
              <p
                className={`rounded-l-md ${index % 2 === 0 ? 'bg-black/5' : ''}`}
              >
                {item.ipAddress}
              </p>
              <p
                className={`rounded-r-md ${index % 2 === 0 ? 'bg-black/5' : ''}`}
              >
                {item.timestamp}
              </p>
            </>
          ))}
        </div>
        <div className="flex gap-1 mt-4">
          <button className="border border-black/20 rounded-md flex items-center justify-center text-black/40 hover:text-black cursor-pointer active:scale-95">
            <ChevronLeft size={20} />
          </button>
          <button className="border border-black/20 rounded-md flex items-center justify-center text-black/40 hover:text-black cursor-pointer active:scale-95">
            <ChevronRight size={20} />
          </button>
        </div>
      </section>
      <section className="w-full">
        <button className="bg-black text-white border-0 h-9 px-4 rounded-xl cursor-pointer hover:bg-black/80 active:scale-95">
          Ping
        </button>
      </section>
    </>
  );
}

export default App;
