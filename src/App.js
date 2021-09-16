import './App.css'
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/pages/Home'
import Services from './components/pages/Services';
import Product from './components/pages/Product';
import Signup from './components/pages/SignUp';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/services" component={Services}/>
          <Route path="/products" component={Product}/>
          <Route path="/sign-up" component={Signup}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
