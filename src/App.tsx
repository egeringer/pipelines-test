import React from 'react'
import logo from './logo.svg'
import './App.css'
import fileVersion from './version.json'

const getVersion = (): string => {
  const theVersion: string[] = fileVersion.version.split('-')
  const finalVersion: string | undefined = theVersion.pop()
  if (finalVersion != null) return finalVersion
  else return ''
}

function App (): JSX.Element {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Maestro Application</p>
        <small>
          Version {getVersion()}
        </small>
      </header>
    </div>
  )
}

export default App
