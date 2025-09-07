import ImageCard from "../image-card/ImageCard";
import css from './ImageGallery.module.css';


const ImageGallery = ({images, onSelect}) => {
    return (
        <ul className={css.imageGallery}>
            {images.map(image => (
                <li className={css.imageGalleryList} key={image.id}>
                    <ImageCard image={image} onSelect={onSelect} />
                </li>))}
        </ul>
    )
}


export default ImageGallery;
