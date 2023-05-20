import logo from './logo.svg';
import './App.scss';
import ListTodo from './TodoApp/ListTodo';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nav from './Nav/Nav';
import MyComponent from './Example/MyComponent';
import Home from './Home/Home';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom';



const App = (props) => {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Nav />
          <Switch>
            <Route path="/todo">
              <ListTodo />
            </Route>
            <Route path="/about">
              <MyComponent />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </header>
        <ToastContainer />

      </div>
    </BrowserRouter>
  );
}

export default App;
