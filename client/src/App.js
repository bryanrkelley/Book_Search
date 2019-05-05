import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App() {
  console.log(process.env.REACT_APP_BOOKS_KEY);
  return (
    <Router>
      <div>
        <Wrapper>
          <Header />

          <Nav />
          
          <Switch>
            {/* https://stackoverflow.com/questions/49162311/react-difference-between-route-exact-path-and-route-path */}
            <Route exact path="/" component={Search} />
            <Route exact path="/saved" component={Saved} />
            <Route component={NoMatch} />
          </Switch>
        </Wrapper>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
