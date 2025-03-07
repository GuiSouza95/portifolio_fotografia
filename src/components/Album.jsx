import { useState } from 'react';
import './Album.css';


export default function Album({photos}){

    const [selectedCard, setSelectedCard] = useState(null);

    const handleCardClick = (photo) =>{
        setSelectedCard(photo);
    };

    const handleCloseAside = () =>{
        setSelectedCard(null);
    };

    const backendUrl = import.meta.env.MODE === 'production'
    ? import.meta.env.VITE_PROD_BACKEND_URL : import.meta.env.VITE_BACKEND_URL;

    if (!photos || photos.length === 0) {
        return <div>
            <h3 className='text-white'>Loading...</h3>
            </div>;
    }

    return(
        <div className='mt-5'>
            <div className="d-flex">
                <div className="card-list">
                    <ul className='d-grid'>
                        {photos.map((photo) => (
                            <li key={photo.name} className='card p-3' onClick={()=> handleCardClick(photo)}>
                                <div className='image'>
                                    <img src={`${photo.image.src}`} alt={photo.image.alt} className='img-fluid rounded'/>
                                </div>

                                <div className='text-end my-3 me-3'>
                                    <q className='fst-italic text-body-tertiary'>{photo.name}</q>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                {selectedCard && (
                    <div className="aside ms-3 rounded p-2">
                        <button onClick={handleCloseAside} className='close-btn'>&#10006;</button>

                        <h4>{selectedCard.name}</h4>

                        <img src={`${selectedCard.image.src}`} alt={selectedCard.image.alt} className='img-fluid my-2 rounded'/>

                        <p>{selectedCard.description}</p>
                    </div>
                )}
            </div>
        </div>
    );
}