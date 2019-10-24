import * as React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SearchPage from "./SearchPage";
import FavoritesPage from "./FavoritesPage";
import NavBar from "./ui/NavBar";

const App = () => (
  <Router>
    <div>
      <NavBar />
      <Route exact path="/" component={SearchPage} />
      <Route path="/favorites" component={FavoritesPage} />
    </div>
  </Router>
);

export default App;
