import React from 'react'
import { Link } from 'react-router-dom'

function MaestroHeader (): JSX.Element {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> |{' '}
        <Link to="about">About</Link> |{' '}
        <Link to="gitgraph">GitGraph</Link>
      </nav>
    </div>
  )
}

export {
  MaestroHeader
}
