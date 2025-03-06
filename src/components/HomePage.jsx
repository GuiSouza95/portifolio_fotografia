import { useState } from 'react'
import { Link } from "react-router-dom";

export default function HomePage() {

  return (
    <div className='position'>
      <h1 className='text-white mb-3'>Exercícios de fotografia</h1>

      <ul>
        <Link to="/activities">
          <li>Atividades de fotografia</li>
        </Link>
      </ul>
    </div>
  );
}