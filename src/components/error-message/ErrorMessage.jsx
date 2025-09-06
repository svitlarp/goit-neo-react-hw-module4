import css from './ErrorMessage.module.css';


const ErrorMessage = ({errorMessage}) => {
    return (
        <div className={css.errorMessage}>
            <h4>{errorMessage}</h4>
        </div>
    ); 
}

export default ErrorMessage;

