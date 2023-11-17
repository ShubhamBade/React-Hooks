import React from 'react'
import UseStateHook from './hooks/useStateHook/UseStateHook'
import UseReducerHook from './hooks/useReducerHook/UseReducerHook'
import UseEffectHook from './hooks/useEffectHooks/UseEffectHook'
import UseLayoutEffectHook from './hooks/useEffectHooks/UseLayoutEffectHook'
import UseRefHook from './hooks/useRefHook/UseRefHook'
import UseImperativeHook from './hooks/useImperativeHook/UseImperativeHook'
import UseContextHook from './hooks/UseContextHook/UseContextHook'
import UseMemoHook from './hooks/usememoHook/UseMemoHook'
import UseCallbackHook from './hooks/useCallbackHook/UseCallbackHook'

function App() {
  return (
    <div>
      {/* <UseStateHook /> */}
      {/* <UseReducerHook/> */}
      {/* <UseEffectHook /> */}
      {/* <UseLayoutEffectHook /> */}
      {/* <UseRefHook /> */}
      {/* <UseImperativeHook /> */}
      {/* <UseContextHook /> */}
      {/* <UseMemoHook /> */}
      <UseCallbackHook />
    </div>
  )
}

export default App
