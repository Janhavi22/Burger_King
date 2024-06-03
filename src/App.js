
import './App.css';
import Login from './screens/Login';
import Home from './componants/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



function App() {
  return (
    <div>
   <Login/>
<Home/>
    </div>
  );
}

export default App;
