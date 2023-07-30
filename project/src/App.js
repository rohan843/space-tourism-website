import Sidebar from "./components/Sidebar";
import CrewPage from "./pages/CrewPage";
import DestinationPage from "./pages/DestinationPage";
import HomePage from "./pages/HomePage";
import TechPage from "./pages/TechPage";
import Route from "./components/Route";

function App() {
  return (
    <div>
      <Sidebar />
      <div>
        <Route path="/">
          <HomePage />
        </Route>
        <Route path="/destination">
          <DestinationPage />
        </Route>
        <Route path="/crew">
          <CrewPage />
        </Route>
        <Route path="/technology">
          <TechPage />
        </Route>
      </div>
    </div>
  );
}

export default App;
