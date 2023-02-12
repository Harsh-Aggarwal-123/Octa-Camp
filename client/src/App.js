
import './App.css';
import{Routes, Route, BrowserRouter} from "react-router-dom";
import Home from "./pages/Home";
import Patients from "./pages/Patients";
import Arete from "./pages/Arete";
import Camp from './pages/Camp';
import LoginForm from './components/LoginForm';
import PatientRegistration from './components/PatientRegistration';
import Registration from './pages/Registration';

function App() {
  return (

    <>

      <BrowserRouter>
        <Routes>
        
        <Route path="/" exact element={<Home />}></Route>
          <Route path="/patients" exact element={<Patients />}></Route>
          <Route path="/arete" exact element={<Arete />}></Route>
          <Route path="/camp" exact element={<Camp />}></Route>
          <Route path="/registration" exact element={<Registration />}></Route>
          <Route path = "/login-form" exact element={ <LoginForm/>}></Route>
        </Routes>
      </BrowserRouter>

   
  
    </>
  )
  

  
}

export default App;
