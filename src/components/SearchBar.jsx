import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './Dashboard.css'

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const categories = useSelector((state) => state.widgets.categories);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredWidgets = categories.flatMap(category =>
    category.widgets.filter(widget =>
      widget.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search widgets..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <div className="search-results">
        {filteredWidgets.map(widget => (
          <div key={widget.id}>
            <h3>{widget.name}</h3>
            <p>{widget.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
