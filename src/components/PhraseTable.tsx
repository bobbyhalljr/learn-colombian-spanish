// src/components/PhraseTable.tsx
import React, { useState } from 'react';
import SearchBar from './SearchBar';

interface Phrase {
  spanish: string;
  english: string;
}

interface PhraseTableProps {
  phrases: Record<string, string>;
}

interface SearchHighlightInputProps {
  onSearch: (query: string) => void;
}

const PhraseTable: React.FC<PhraseTableProps> = ({ phrases }) => {
  const [searchQuery, setSearchQuery] = useState('');


  const handleSearch = (e: any) => {
    const query = e.target.value;
    setSearchQuery(query);
  };

  return (
    <>
    <div className="overflow-y-scroll overflow-x-auto lg:h-96 h-auto max-w-screen w-screen break-words">
    {/* <SearchBar onSearch={handleSearch} /> */}
      <table className="table table-zebra table-pin-rows text-lg">
        <thead>
          <tr>
            <th className='text-lg text-gray-500'>Spanish</th>
            <th className='text-lg text-gray-500'>English</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(phrases).map(([spanish, english], index) => (
            <tr className='hover cursor-pointer' key={index}>
              <td>{spanish}</td>
              <td>{english}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default PhraseTable;
