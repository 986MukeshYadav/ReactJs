import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import {App} from './App.jsx'
// import {Practice} from './practice.jsx'
import './index.css'
// import { EventProps } from './components/EventProps.jsx'
// import { EventPropagation } from './components/EventPropagation.jsx'
import { State } from './components/hooks/State.jsx'
// import Profile from './components/Profile.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <EventProps/> */}
    {/* <Profile/> */}
    {/* <EventPropagation/> */}
    <State/>
  </StrictMode>,
)
