
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar';
import Signin from './pages/Auth/Signin';
import Signup from './pages/Auth/Signup';
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Profile from './pages/Profile';
import ProtectedRoute from "./pages/ProtectedRoute"



function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <div id="content">
          <Switch>
            <Route path="/" exact component={Products}></Route>
            <Route path="/product/:product_id" component={ProductDetail}></Route>
            <Route path="/signin" component={Signin}></Route>
            <Route path="/signup" component={ Signup}></Route>
            <ProtectedRoute path="/profile" component={ Profile}></ProtectedRoute>
          
          </Switch>
        </div>
      </div>
    </Router>
  );
}



export default App;
