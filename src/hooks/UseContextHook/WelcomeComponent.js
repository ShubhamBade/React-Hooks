import React,{useContext} from 'react'
import { UserDataContext } from './UseContextHook'

const WelcomeComponent = () => {
  const {userName}=useContext(UserDataContext)
  return (
    <div>
      <h1>{userName}</h1>
    </div>
  )
}

export default WelcomeComponent
