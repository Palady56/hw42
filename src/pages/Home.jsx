import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {

  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate("/contact")
  }

  return (
    <div>
      <h1>This is HOME page...</h1>
      <button onClick={handleNavigate}>Move to CONTACT page</button>
    </div>
  )
}