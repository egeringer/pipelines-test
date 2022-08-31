import React from 'react'
import logo from './logo.svg'
import './App.css'

function App (): JSX.Element {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Maestro Application</p>
        <small>
          Version 0.0.6
        </small>
      </header>
    </div>
  )
}

export default App
