import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./Components/Navbar";
import AnimeDetail from "./Components/Pages/Detail";
import HomePage from "./Components/Pages/HomePage";
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={HomePage} />

        {/* detail */}
        <Route path="/detail" component={AnimeDetail} />
      </Switch>
    </Router>
  );
}

export default App;
