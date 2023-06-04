import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
    const [images, setImages] = useState([]);
    const [isloading, setIsloading] = useState(true);

    const getImages = async() => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsloading(false);
    };
    
    useEffect(() => {
        getImages();
    }, [])

    return ({
        images, 
        isloading,
    })
}
