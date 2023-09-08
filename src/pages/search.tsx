import { colombianPhrases } from '@/colombian-phrases';
import Layout from '@/components/Layout';
import PhraseTable from '@/components/PhraseTable';
import SearchBar from '@/components/SearchBar';
import React, { useState } from 'react'

const SearchPage = () => {
    const [searchResults, setSearchResults] = useState<{ spanish: string; english: string }[]>([]);
  
  const handleSearch = (results: { spanish: string; english: string }[]) => {
    setSearchResults(results);
  };

    return (
        <Layout>
            <SearchBar onSearch={handleSearch}/>
        </Layout>
    )
}

export default SearchPage;