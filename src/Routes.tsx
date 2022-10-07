import * as React from 'react'
import { Routes, Route } from 'react-router-dom'
import App from './App'
import './App.css'
import { About } from './About'
import { GitGraph3 as GitGraph } from './GitGraph'
import { MaestroHeader } from './Header'

function MaestroRoutes (): JSX.Element {
  return (
    <div className="App">
      <MaestroHeader />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="about" element={<About />} />
        <Route path="gitgraph" element={<GitGraph />} />
      </Routes>
    </div>
  )
}

export {
  MaestroRoutes
}
