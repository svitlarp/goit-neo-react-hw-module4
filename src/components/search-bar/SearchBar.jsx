import css from './SearchBar.module.css';
import toast, { Toaster } from 'react-hot-toast';


const SearchBar = ({ onQuery }) => {
    
    const handleSubmit = (e) => {
        e.preventDefault();

        const inputValue = e.target.elements.search.value;
        if (inputValue === "") {
            toast('Please enter a search term', { icon: '👏', });
            return;
        }
        onQuery(inputValue);

        e.target.reset();
    }
    

    return (
        <header>
            {/* <div className={css.searchBar} > */}
                <form className={css.searchBar}  onSubmit={handleSubmit}>
                    <input
                        className={css.searchBarInput}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        name="search"
                    />
                    {/* <button type="submit">Search</button> */}
                    <Toaster />
                    </form>
                {/* </div> */}
        </header>
    )
}

export default SearchBar;

