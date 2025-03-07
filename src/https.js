import { useEffect, useState } from "react";

export default function getPhotosData(){
    const [availablePhotos, setAvailablePhotos] = useState([])
    useEffect(() =>{
        fetch('https://portifoliofotografia-production.up.railway.app/photos')
        .then((response) => {return response.json()})
        .then((resData) => {
            setAvailablePhotos(resData.photos)});
    }, []);

    return availablePhotos;
}