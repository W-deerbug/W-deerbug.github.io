import "./styles/global.css";
import "./App.css";

import Header from "./components/sections/Header";
import Experience from "./components/sections/Experience";
import Resume from "./components/sections/Resume.tsx";

function App() {
  return (
    <div className="page">
      <div className="top-bar" />
      <main className="container" >
        <Header />
        <Experience />
        <Resume />
      </main>
    </div>
  );
}

export default App;
