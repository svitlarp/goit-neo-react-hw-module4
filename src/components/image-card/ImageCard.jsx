import css from './ImageCard.module.css';


const ImageCard = ({image}) => {
    return (
        <div className={css.image}>
            <p>{image}</p>
            <img src="" alt="" />
        </div>
    )
}


export default ImageCard;
