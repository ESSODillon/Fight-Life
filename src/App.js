import { BrowserRouter, Route, Switch } from "react-router-dom";

// Styles
import "./App.css";

// Pages and Components
import Dashboard from "./pages/dashboard/Dashboard";
import Create from "./pages/create/Create";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Event from "./pages/event/Event";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar />
        <div className="container">
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Dashboard />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/events/:id">
              <Event />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
