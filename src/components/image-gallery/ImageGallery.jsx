import ImageCard from "../image-card/ImageCard";
import css from './ImageGallery.module.css';


const ImageGallery = ({images}) => {
    return (
        <ul className={css.imageGallery}>
            {images.map(image => (
                <li key={image.id}>
                    <ImageCard image={image} />
                </li>))}
        </ul>
    )
}


export default ImageGallery;

