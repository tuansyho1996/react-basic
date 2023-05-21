import logo from './logo.svg';
import './App.scss';
import ListTodo from './TodoApp/ListTodo';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nav from './Nav/Nav';
import MyComponent from './Example/MyComponent';
import Home from './Home/Home';
import ListUser from './ListUsers/ListUsers';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';



const App = (props) => {

  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/todo">
              <ListTodo />
            </Route>
            <Route path="/about">
              <MyComponent />
            </Route>
            <Route path="/user">
              <ListUser />
            </Route>
          </Switch>
        </header>
        <ToastContainer />

      </div>
    </BrowserRouter>
  );
}

export default App;
