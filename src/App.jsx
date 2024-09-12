import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DataFetchingComponent from './components/DataFetchingComponent'
import MouseMovementComponent from './components/MouseMovementComponent'
import TitleUpdaterComponent from './components/TitleUpdaterComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <DataFetchingComponent />
    <MouseMovementComponent />
    <TitleUpdaterComponent />

      
    </>
  )
}

export default App
