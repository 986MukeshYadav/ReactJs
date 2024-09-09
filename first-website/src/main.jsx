import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import {App} from './App.jsx'
// import {Practice} from './practice.jsx'
import './index.css'
// import { EventProps } from './components/EventProps.jsx'
// import { EventPropagation } from './components/EventPropagation.jsx'
// import { State } from './components/hooks/State.jsx'
// import { DerivedState } from './components/DerivedState.jsx'
// import { LiftStateUp } from './components/LiftStateUp.jsx'
// import { TogleSwitch } from './project/Toggle/TogleSwitch.jsx'
import { Todo } from './project/ToDo/Todo.jsx'
// import Profile from './components/Profile.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <EventProps/> */}
    {/* <Profile/> */}
    {/* <EventPropagation/> */}
    {/* <State/> */}
    {/* <DerivedState/> */}
    {/* <LiftStateUp/> */}
    {/* <TogleSwitch/> */}
    <Todo/>
  </StrictMode>,
)
