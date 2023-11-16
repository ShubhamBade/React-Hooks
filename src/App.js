import React from 'react'
import UseStateHook from './hooks/useStateHook/UseStateHook'
import UseReducerHook from './hooks/useReducerHook/UseReducerHook'
import UseEffectHook from './hooks/useEffectHooks/UseEffectHook'
import UseLayoutEffectHook from './hooks/useEffectHooks/UseLayoutEffectHook'
import UseRefHook from './hooks/useRefHook/UseRefHook'
import UseImperativeHook from './hooks/useImperativeHook/UseImperativeHook'
import UseContextHook from './hooks/UseContextHook/UseContextHook'

function App() {
  return (
    <div>
      {/* <UseStateHook /> */}
      {/* <UseReducerHook/> */}
      {/* <UseEffectHook /> */}
      {/* <UseLayoutEffectHook /> */}
      {/* <UseRefHook /> */}
      {/* <UseImperativeHook /> */}
      <UseContextHook />
    </div>
  )
}

export default App
