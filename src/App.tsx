import { SideBar } from "./components/SideBar/SideBar";
import { MainSection } from "./components/MainSection/MainSection";
import "./App.css";
import { StorageSection } from "./components/StorageSection/StorageSection";

function App() {
  return (
    <div className="App">
      <SideBar />
      <MainSection />
      <StorageSection />
    </div>
  );
}

export default App;
