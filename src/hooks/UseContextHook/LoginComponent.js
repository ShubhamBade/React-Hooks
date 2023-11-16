import React,{useContext} from 'react'
import { UserDataContext } from './UseContextHook'

const LoginComponent = () => {
    const {setUserName}=useContext(UserDataContext)
  return (
    <div>
      <input placeholder='Enter Username' onChange={(event)=>{setUserName(event.target.value)}} />
    </div>
  )
}

export default LoginComponent
