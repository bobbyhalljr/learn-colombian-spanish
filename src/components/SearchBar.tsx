// src/components/SearchBar.tsx
import React, { useState } from 'react';
import { colombianPhrases } from '@/colombian-phrases';

interface SearchBarProps {
  onSearch: (results: { spanish: string; english: string }[]) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestedPhrases, setSuggestedPhrases] = useState<
    { spanish: string; english: string }[]
  >([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query) {
      // Filter phrases based on search query
      const filteredPhrases: any = Object.entries(colombianPhrases)
        .filter(([spanish]) => spanish.toLowerCase().includes(query.toLowerCase()))
        .slice(0, 5) // Limit to 4 suggestions
        .map(([spanish, english]) => ({ spanish, english }));
      setSuggestedPhrases(filteredPhrases);
    } else {
      setSuggestedPhrases([]);
    }
  };

  const handleSearch = () => {
    // Clear the suggestions and invoke the search
    setSuggestedPhrases([]);
    const results: any = Object.entries(colombianPhrases)
      .filter(([spanish]) => spanish.toLowerCase().includes(searchQuery.toLowerCase()))
      .map(([spanish, english]) => ({ spanish, english }));
    onSearch(results);
  };

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search Colombian Phrases..."
        className="w-64 p-2 rounded-md border"
        value={searchQuery}
        onChange={handleInputChange}
      />
      {suggestedPhrases.length > 0 && (
        <div className="absolute mt-2 w-64 bg-opacity-90 bg-white backdrop-blur-md rounded-xl shadow-md">
          {suggestedPhrases.map((phrase, index) => (
            <div key={index} className="p-2  rounded-lg hover:bg-gray-200 cursor-pointer">
              <p className="font-semibold">{phrase.spanish}</p>
              <p>{phrase.english}</p>
            </div>
          ))}
        </div>
      )}
      <button
        className="absolute right-0 bg-blue-500 text-white px-4 py-2 rounded-md"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
