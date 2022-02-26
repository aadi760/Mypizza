
import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar.js';
import "bootstrap"
import HomeScreen from './screens/HomeScreen';
import{ BrowserRouter,Route,Link,Switch} from 'react-router-dom'
import CartScreen from './screens/CartScreen';
import Loginscreen from './screens/Loginscreen';
import Registerscreen from './screens/Registerscreen';
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <BrowserRouter>
        <Route path="/" exact component={HomeScreen} ></Route>
        <Route path="/cart" exact component={CartScreen}></Route>
        <Route path="/login" exact component={Loginscreen}></Route>
        <Route path="/register" exact component={Registerscreen}></Route>

      </BrowserRouter>
      
    </div>
  );
}

export default App;
