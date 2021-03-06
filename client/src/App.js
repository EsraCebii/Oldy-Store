
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
import ProtectedRoute from "./pages/ProtectedRoute";
import Basket from "./pages/Basket"
import Error404 from './pages/Error404/İndex';
import Admin from "./pages/Admin/"




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
            <Route path="/basket" component={ Basket}></Route>
            <ProtectedRoute path="/profile" component={ Profile}></ProtectedRoute>
            <ProtectedRoute path="/admin" component={Admin} admin={true}></ProtectedRoute>
            <Route path="*" component={Error404}></Route>
          
          </Switch>
        </div>
      </div>
    </Router>
  );
}



export default App;
