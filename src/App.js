import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterGrid from './components/characters/CharacterGrid'
import Header from './components/ui/Header'
import './App.css';
import Search from './components/ui/Search';
import Footer from './components/ui/Footer';
function App() {

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('')

  useEffect(() => {

    console.log(query);
    const fetchItems = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`);
      setItems(result.data);
      setIsLoading(false);
    }
    fetchItems();
  }, [query]);

  return (
    <section className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <p className='info'>Hover over character to see more details</p>
      <CharacterGrid isLoading={isLoading} items={items} />
      <Footer />
    </section>
  );
}

export default App;
