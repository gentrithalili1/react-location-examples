import Header from "./components/Header";
import { Router, Outlet } from "@tanstack/react-location";
import { location, routes } from "./routes";

function App() {
  return (
    <div className="App">
      <Router location={location} routes={routes}>
        <Header />
        <Outlet />
      </Router>
    </div>
  );
}

export default App;
