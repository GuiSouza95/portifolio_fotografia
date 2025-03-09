import { useState } from 'react'
import { Link } from "react-router-dom";
import "./HomePage.css";

export default function HomePage() {

  return (
    <div className='position text-center p-5'>
      <div className="container">
        <div className='row'>
          <h1 className='text-white mb-3'>
            <q>Meu tempo livre !</q>
          </h1>
        </div>

        <div className='row'>
          <ul className='text-center list-group'>
            <Link to="/activities">
              <li className='list-group-item list-group-item-primary rounded w-25 mx-auto'>Veja aqui meu álbum !</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}