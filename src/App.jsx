import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Textarea from "./components/Textarea";

function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>CPSC2650 Week7 Presentation</h1>
      <p>
        This is a simple React + Vite app, built for the CPSC2650 Week7
        presentation.
      </p>
      <Textarea name="Yujie" />
    </>
  );
}

export default App;
