import css from './LoadMoreBtn.module.css';


const LoadMoreBtn = ({onSetPage}) => {

    return (
        <button
            type='button'
            className={css.loadMoreBtn}
            // hidden
            onClick={() => onSetPage(p => p + 1)}>
            Load More 
        </button>
    ); 
}

export default LoadMoreBtn;

