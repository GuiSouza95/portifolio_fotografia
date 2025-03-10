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

    let backendUrl = 'https://portifoliofotografia-production.up.railway.app/photos';

    if (backendUrl && backendUrl.includes('/photos')) {
        backendUrl = backendUrl.replace('/photos', '');
    }

    const imagePath = `${backendUrl}/images`;

    if (!photos || photos.length === 0) {
        return <div>
            <h2 className='text-white'>Loading...</h2>
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
                                    <img src={`${imagePath}/${photo.image.src}`} alt={photo.image.alt} className='img-fluid rounded'/>
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

                        <img src={`${imagePath}/${selectedCard.image.src}`} alt={selectedCard.image.alt} className='img-fluid my-2 rounded'/>

                        <p>{selectedCard.description}</p>
                    </div>
                )}
            </div>
        </div>
    );
}