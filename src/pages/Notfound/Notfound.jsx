import React from 'react'
import { Link } from 'react-router-dom';

export const Notfound = () => {
  return (
    <div>
      <Link to="/">
        <h1>Notfound 404</h1>
      </Link>
    </div>
  );
}
