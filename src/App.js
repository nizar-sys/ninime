import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";

import "./App.css";
import CardComp from "./Components/CardComp";
import Navbar from "./Components/Navbar";
import AnimeDetail from "./Components/Pages/Detail";
import GenreList from "./Components/Pages/GenreListPage";
import Genres from "./Components/Pages/Genres";
import HomePage from "./Components/Pages/HomePage";
import Season from "./Components/Pages/SeasonPage";
import SearchResult from "./Components/Search";
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={HomePage} />

        {/* Comp */}
        <Route path="/genre-list" component={GenreList} />
        {/* detail */}
        <Route path="/detail/:id" component={AnimeDetail} />
        <Route path="/genre/:id" component={Genres} />
        <Route path="/search/:id" component={SearchResult} />
        <Route path="/seasons/:id" component={Season} />
      </Switch>
    </Router>
  );
}

export default App;
