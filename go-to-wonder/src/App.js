import './App.css';
import { 
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import Home from './Pages/HomePage/Home';
import LogIn from './Pages/LogInPage/LogIn';
import SignIn from './Pages/SigInPage/SignIn';
import LogOut from './Pages/LogOutPage/LogOut';
import MyState from './Components/Context/Data/MyState';
import Welcome from './Pages/Welcome/Welcome';
import CheckOut from './Pages/Payment/CheckOut';
import Destination from './Pages/Destination/Destination';

function App() {
  return (
    <div className="App">
      <MyState>
      <Router>
        <Routes>
          <Route path='/' element={ <Home /> }/>
          <Route path='/signIn' element={ <SignIn/> }/>
          <Route path='/logIn' element={ <LogIn /> }/>
          <Route path='/logout' element={ <LogOut /> }/>
          <Route path='/welcome' element={ <Welcome /> }/>
          <Route path='/payment' element={ <CheckOut /> }/>
          <Route path='/destination' element={ <Destination /> }/>
          <Route path='*' element={ <Home /> }/>
        </Routes>
      </Router>
      </MyState>
    </div>
  );
}

export default App;
