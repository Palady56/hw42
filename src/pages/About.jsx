import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';

export default function About() {
  return (
    <div>
      <h1>This is ABOUT page...</h1>
      <nav>
        <NavLink to="team">Our Team</NavLink> | <NavLink to="history">Our History</NavLink>
      </nav>
      <Outlet />
    </div>

  )
}