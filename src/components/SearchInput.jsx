import React, { useState } from 'react';
import axios from 'axios';
import SearchResults from './SearchResults';

const SearchInput = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [error, setError] = useState(null);

    const handleSearch = async () => {
        const response = await axios.get(`https://https://django-backend-0eks.onrender.com/api/books/?q=${query}`,
        {
            headers: {
                'Authorization': `Api-Key ${import.meta.env.VITE_API_KEY}`,
       },
    })
    .then(response => {
        setResults(response.data);
})
.catch(error => {
  setError(error.message);
});
  };

    return (
        <div>

            <div className="searchInput">
            <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
            <button onClick={handleSearch}>Search</button>
            </div>
            <div className="result">
            <SearchResults results={results} />
            </div>
        </div>
    );
};

export default SearchInput;
