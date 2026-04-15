import "./styles/global.css";
import "./App.css";

import Header from "./components/sections/Header";
// import Experience from "./components/sections/Experience";
import ModalPatternShowcase from "./components/sections/ModalPatternShowcase";
import Resume from "./components/sections/Resume.tsx";

function App() {
  return (
    <div className="page">
      <div className="top-bar" />
      <main className="container" >
        <Header />
        {/* <Experience /> */}
        <ModalPatternShowcase />
        <Resume />
      </main>
    </div>
  );
}

export default App;
