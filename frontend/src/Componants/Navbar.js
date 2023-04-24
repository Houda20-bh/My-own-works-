
import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { logOut } from '../Redux/Slices/UserSlice'


function Navbar() {
  const dispatch = useDispatch();
  const navigate =useNavigate();
  const logout = (e)=>{
    e.preventDefault();
    dispatch(logOut({navigate}))
 }
 const {userLoggedIn} = useSelector((state)=>state.userAuth)
  return (
    <div style={{backgroundColor:'blueviolet', display:'flex', flexDirection:'row',justifyContent:'space-around'}}>Navbar
    <br></br>
    {userLoggedIn?.found &&(<div >
      <button onClick={logout}>
    LogOut
      </button>

    </div>)}
   
    </div>
  )
}

export default Navbar