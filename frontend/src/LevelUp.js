import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Context
import { UserProvider } from "./context/userContext";

import { ThemeProvider } from "theme-ui";
import theme from "./theme/theme";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Routes from "./components/routes/Routes";

function LevelUp() {
  return (
    <Router>
      <UserProvider>
        <ThemeProvider theme={theme}>
          <Header />

          <Switch>
            <Route exact path="/"></Route>
            <Route component={Routes}></Route>
          </Switch>

          <Footer />
        </ThemeProvider>
      </UserProvider>
    </Router>
  );
}

export default LevelUp;
