import React from "react";
import ImageCard from "./ImageCard";
import './ImageList.css';

const ImageList = ({images}) => {
    const imagesJsx = images.map(image => {
        return <ImageCard key={image.id} image={image}/>
    });

    return <div className="image-list">{imagesJsx}</div>;
}

export default ImageList;