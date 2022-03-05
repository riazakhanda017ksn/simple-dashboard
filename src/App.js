import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Any from "./components/Dashboard/Any";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/any">
          <Any />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
