import { useEffect, useState } from 'react';
import axios  from 'axios';
import './App.css'
import SearchBar from './components/search-bar/SearchBar'
import ImageGallery from './components/image-gallery/ImageGallery';
import ErrorMessage from './components/error-message/ErrorMessage';
import LoadMoreBtn from './components/load-more-btn/LoadMoreBtn';


const clientId = import.meta.env.VITE_UNSPLASH_CLIENT_ID;


function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [page, setPage] = useState(1);


  useEffect(() => {
    // if (!query) return;

    // setImages([]);
    // setPage(1);
    
    async function fetchImages() {
      try {
        // const resp = await axios.get('https://api.unsplash.com/photos/?query={query}&client_id=IJX_We--I9uMyQJrFJvsVNXwcZbroItWFUpNmAOWle8');
        const resp = await axios.get(`https://api.unsplash.com/photos/?page=${page}&per_page=12&client_id=${clientId}`);
      console.log(resp.data);
        // setImages(resp.data);
        setImages(prevImages => [...prevImages, ...resp.data])
        setErrorMessage(null);
      } catch (err) {
        console.error("Error fetching images:", err.message);
        setErrorMessage("We could not load images. Please try again later.");
      }
    }
    fetchImages();
  }, [query, page]);

  // TODO: newQuery - reset Page, Search

  return (
    <>
      <SearchBar onQuery={setQuery} />
      {images.length === 0 && <ErrorMessage errorMessage={errorMessage} />}
      <ImageGallery images={images} />
      <LoadMoreBtn onSetPage={setPage} />
    </>
  )
}

export default App

// return (
//     <>
//       <div className={styles.app}>
//         <SearchBar search={search} onSearch={handlerSearch} />
//         <ImageGallery images={images} onSelect={handlerSelectImage} />
//         {images.length === 0 && error && <ErrorMessage message="Failed to fetch images. Please try again later." />}
//         {loading && <Loader />}
//         {!ended && !loading && <LoadMoreBtn label={error ? "Retry" : "Load More"} onClick={handlerLoadMore} />}
//         <ImageModal images={images} selectedImageIdx={selectedImageIdx} onClose={onCloseModal} />
//       </div>
//       <ToasterComponent />
//     </>
//   );


// TODO: useRef()
// refs.loaderEl.classList.remove('hidden');
// refs.galleryListEl.innerHTML = '';
// refs.formLoadMoreBtn.classList.add('hidden');
