import css from './ImageCard.module.css';


const ImageCard = ({image, onSelect}) => {
    return (
        <img
            className={css.image}
            src={image.urls.small}
            alt={image.alt_description}
            title={image.alt_description}
            onClick={() => onSelect(image)} // open modal
        />
    ) 
}

export default ImageCard;

