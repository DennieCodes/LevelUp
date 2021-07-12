import { Switch, Route } from "react-router-dom";

import Register from "../user/Register";
import Login from "../user/Login";
import Activities from "../activities/Activities";
import Todos from "../todos/Todos";

function Routes(props) {
  return (
    <main>
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/activities" component={Activities} />
        <Route exact path="/todos" component={Todos} />
      </Switch>
    </main>
  );
}

export default Routes;
