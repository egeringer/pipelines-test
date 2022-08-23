import React from 'react';
import { Link } from "react-router-dom";

function MaestroHeader() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="about">About</Link>
      </nav>
    </div>
  );
}

export {
    MaestroHeader,
}