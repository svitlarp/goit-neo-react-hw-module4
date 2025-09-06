import { useEffect, useState } from 'react';
import axios  from 'axios';
import './App.css'
import SearchBar from './components/search-bar/SearchBar'
import ImageGallery from './components/image-gallery/ImageGallery';


const clientId = import.meta.env.VITE_UNSPLASH_CLIENT_ID;


function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");


  useEffect(() => {
    // if (!query) return;
    
    async function fetchImages() {
      try {
        // const resp = await axios.get('https://api.unsplash.com/photos/?query={query}&client_id=IJX_We--I9uMyQJrFJvsVNXwcZbroItWFUpNmAOWle8');
        const resp = await axios.get(`https://api.unsplash.com/photos/?&client_id=${clientId}`);
      console.log(resp.data);

      setImages(resp.data);
      } catch (err) {
        console.err("Error fetching images:", err.message);
        throw err;
      }
    }
    fetchImages();
  }, [query]);

  return (
    <>
      <SearchBar onQuery={setQuery} />
      <ImageGallery images={images} />
    </>
  )
}

export default App

  