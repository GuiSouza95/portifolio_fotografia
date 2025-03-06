import { Link } from "react-router-dom";
import getPhotosData from "../https";
import Album from "./Album";

export default function Activies(){
    
    const availablePhotos = getPhotosData();

    return(
        <div className="album text-center mt-5">
            <Link to='/portifolio_fotografia' className="position-end position-absolute top-0 end-0 me-5">
                <button className="btn btn-outline-light mt-5 mb-2">Voltar</button>
            </Link>

            <h1 className="text-white">Álbum de fotografia</h1>

            <Album
                photos={availablePhotos} />
                
        </div>
    )
}