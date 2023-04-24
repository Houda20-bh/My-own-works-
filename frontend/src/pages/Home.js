import React from 'react'
import { useSelector } from 'react-redux'

function Home() {
  const {userAuth} = useSelector((state)=>state)
  return (
    <div>{ userAuth?.userLoggedIn?.found ? `Welcome ${userAuth?.userLoggedIn?.found.name}` : 'Hello EveryBody'
      }</div>
  )
}

export default Home