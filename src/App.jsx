import { useEffect, useState } from 'react';
import axios  from 'axios';
import './App.css'
import SearchBar from './components/search-bar/SearchBar'
import ImageGallery from './components/image-gallery/ImageGallery';
import ErrorMessage from './components/error-message/ErrorMessage';
import LoadMoreBtn from './components/load-more-btn/LoadMoreBtn';
import Loader from './components/loader/Loader';


const clientId = import.meta.env.VITE_UNSPLASH_CLIENT_ID;


function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const handleSearch = (newQuery) => {
    setQuery(newQuery);
    setPage(1);
    setImages([]);
  }

  useEffect(() => {
    if (!query) return;
    
    async function fetchImages() {    
      setLoading(true);
      try {
        const resp = await axios.get(`https://api.unsplash.com/search/photos?query=${query}&page=${page}&per_page=12&client_id=${clientId}`)
        console.log(resp.data);
        setImages(prevImages => [...prevImages, ...resp.data.results]) 
        setErrorMessage(null);
      } catch (err) {
        console.error("Error fetching images:", err.message);
        setErrorMessage("We could not load images. Please try again later.");
      } finally {
        setLoading(false);
      }
    }
    fetchImages();
  }, [query, page]);

  return (
    <>
      <SearchBar onQuery={handleSearch} />
      {images.length === 0 && <ErrorMessage errorMessage={errorMessage} />}
      {loading && <Loader />}
      <ImageGallery images={images} />
      {!loading && images.length > 0 && <LoadMoreBtn onSetPage={setPage} />}
    </>
  );
}

export default App
