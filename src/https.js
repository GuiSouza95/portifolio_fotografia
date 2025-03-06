import { useEffect, useState } from "react";

export default function getPhotosData(){
    const [availablePhotos, setAvailablePhotos] = useState([])
    useEffect(() =>{
        fetch('http://portifoliofotografia-production.up.railway.app')
        .then((response) => {return response.json()})
        .then((resData) => {
            setAvailablePhotos(resData.photos)});
    }, []);

    return availablePhotos;
}