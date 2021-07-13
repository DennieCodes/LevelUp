import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Routes from "./components/routes/Routes";

import "./styles/index.css";

function LevelUp() {
  return (
    <Router>
      <Header />

      <Switch>
        <Route exact path="/"></Route>
        <Route component={Routes}></Route>
      </Switch>

      <Footer />
    </Router>
  );
}

export default LevelUp;
