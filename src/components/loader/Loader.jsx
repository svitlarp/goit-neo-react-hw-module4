import { ClipLoader } from "react-spinners";
import css from './Loader.module.css';

const Loader = ({ loading, size=50, color="#36d7b7" }) => {
    if (!loading) return null;

    return (
    <div className={css.sweetLoading}>
      <ClipLoader
        color="#36d7b7"
        loading={loading}
        size={70}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default Loader;