import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { ThemeProvider } from "theme-ui";
import theme from "./theme/theme";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Routes from "./components/routes/Routes";

// import "./styles/index.css";

function LevelUp() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Header />

        <Switch>
          <Route exact path="/"></Route>
          <Route component={Routes}></Route>
        </Switch>

        <Footer />
      </ThemeProvider>
    </Router>
  );
}

export default LevelUp;
