import './App.css';
import { Routes, Route, NavLink } from "react-router-dom";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Team from "./pages/Team";
import History from "./pages/History";

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink to="/" end activeClassName="active">Home</NavLink>
        <NavLink to="/about" activeClassName="active">About</NavLink>
        <NavLink to="/contact" activeClassName="active">Contacts</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} >
          <Route path="team" element={<Team />} />
          <Route path="history" element={<History />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;

