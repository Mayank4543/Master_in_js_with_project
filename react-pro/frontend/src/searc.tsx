import React, { useState } from 'react';

const SearchComponent = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [items, setItems] = useState([
        // Your array of items
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' },
        // ... more items
    ]);
    const [searchResults, setSearchResults] = useState(items);

    const handleSearch = () => {
        const filteredResults = items.filter(item =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(filteredResults);
    };

    return (
        <div>
            {/* Your search input */}
            <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>

            {/* Display search results */}
            <ul>
                {searchResults.map(item => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default SearchComponent;
