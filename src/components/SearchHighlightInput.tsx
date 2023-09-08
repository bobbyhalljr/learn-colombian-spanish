// src/components/SearchHighlightInput.tsx
import React, { useState } from 'react';

interface SearchHighlightInputProps {
  onSearch: (query: string) => void;
}

const SearchHighlightInput: React.FC<SearchHighlightInputProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  return (
    <input
      type="text"
      placeholder="Search..."
      value={searchQuery}
      onChange={handleSearch}
      className="w-full p-2 rounded-md border"
    />
  );
};

export default SearchHighlightInput;
