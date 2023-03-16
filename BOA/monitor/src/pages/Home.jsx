import LeftPage from "../components/LeftPage/LeftPage";
import RightPage from "../components/RightPage/RightPage";
import { useState,useEffect } from "react";
import './home.css'
import { useLocation } from "react-router-dom";
import { Navigate } from "react-router-dom";
import PersonIcon from '@mui/icons-material/Person';
import { Link } from "react-router-dom";

function Home(){

    const location=useLocation()
    let {state}=location


    const[result,setResult]=useState({})
    const [atms,setAtms]=useState([])
    const [title,setTitle]=useState('All atm lists')
    const handleLog=()=>{
       state=null
    }
    //console.log('user',state.user);

    return(
        <div className="home">
            {!state && (<Navigate to="/" replace={true}  />)}
            <div className="app_wrapper">
            <Link to='/'><p onClick={handleLog} id="logout"> <PersonIcon /></p></Link>
            <div className="app_left_wrapper">
            
            {state &&  <LeftPage setAtms={setAtms} setResult={setResult} setTitle={setTitle} user={state.user}/>}
           
        </div>
        <div className="app_right_wrapper">
            {state &&<RightPage result={result} atms={atms} title={title} user={state.user}/>}
         </div>
      </div>
        </div>
    )
}
export default Home