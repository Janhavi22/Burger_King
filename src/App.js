import logo from './logo.svg';
import './App.css';
import Login from './componants/Login';
import Home from './componants/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



function App() {
  return (
    <div>
<Home/>
   <Login/>
    </div>
  );
}

export default App;
