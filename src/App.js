import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MenuBar from './components/MenuBar/MenuBar';
import Home from './components/Home/Home';
import AuthProvider from './context/AuthProvider';
import LogIn from './components/LogIn/LogIn';
import Signup from './components/Signup/Signup';

function App() {
  return (
    <div className="">
      <AuthProvider>
        <BrowserRouter>
          <MenuBar></MenuBar>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path='/login'>
              <LogIn></LogIn>
            </Route>
            <Route exact path="/signup">
              <Signup></Signup>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
