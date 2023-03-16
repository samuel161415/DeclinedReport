import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import {BrowserRouter as Router, Route,Routes,Navigate} from 'react-router-dom';
import SingleAtm from "./pages/singleAtm/SingleAtm";
import Login from "./pages/login/Login";
import SingUp from "./pages/signup/SignUp";
import Update from "./pages/update/Update";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
               <Routes>
                  <Route exact path="/" element={<Login />} />
                  <Route exact path="/signup" element={<SingUp />} />
                  <Route exact path="/update" element={<Update />} />
                  <Route exact path="/home"  element={<Home />}/>
                  <Route exact path="/cate"  element={<Home />}/>
                  <Route exact path="/singleAtm"  element={<SingleAtm />}/>
                 
               </Routes> 
            </Router>
      
    </div>
  );
}

export default App;
