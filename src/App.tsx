import "./App.css";
import imgWorld from "./assets/imgs/img-world-01.svg";

const App = () => {
  return (
    <main className="relative overflow-hidden">
      <section className="bg-cus-black bg-[url('./assets/imgs/img-bg-01.png')] h-screen">
        <div className="text-center">
          <p className="text-main">weblcome to my website</p>
          <h1 className="text-main">Quys_nt</h1>
        </div>
      </section>
      <div className="absolute top-0 left-1/2 w-full h-full -translate-x-1/2">
        <img src={imgWorld} alt="IMG WORLD" />
      </div>
    </main>
  );
};

export default App;
