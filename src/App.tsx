import Header from "./components/Header";
import { Router, Outlet } from "@tanstack/react-location";
import { location, routes } from "./routing";
import Breadcrumbs from "./components/Breadcrumbs";

function App() {
  return (
    <div className="App">
      <Router location={location} routes={routes}>
        <Header />
        <Breadcrumbs />
        <Outlet />
      </Router>
    </div>
  );
}

export default App;
