import Sidebar from "./components/Sidebar";
import CrewPage from "./pages/CrewPage";
import DestinationPage from "./pages/DestinationPage";
import HomePage from "./pages/HomePage";
import TechPage from "./pages/TechPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Sidebar />
      <BrowserRouter>
        <Routes>
          <Route path="/"><HomePage /></Route>
          <Route path="/destination"><DestinationPage /></Route>
          <Route path="/crew"><CrewPage /></Route>
          <Route path="/technology"><TechPage /></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
