import logo from './logo.svg';
import './App.scss';
import MyComponent from './Example/MyComponent';


const App = (props) => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello wellcome to reactjs basic
        </p>
        <MyComponent />
      </header>
    </div>
  );
}

export default App;
