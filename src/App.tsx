import Header from "./components/Header";
import { Router, Outlet } from "@tanstack/react-location";
import { location, routes } from "./routes";
import { ReactLocationDevtools } from "@tanstack/react-location-devtools";
function App() {
  return (
    <div className="App">
      <Router location={location} routes={routes}>
        <Header />
        <Outlet />
        <ReactLocationDevtools initialIsOpen={true} />
      </Router>
    </div>
  );
}

export default App;
