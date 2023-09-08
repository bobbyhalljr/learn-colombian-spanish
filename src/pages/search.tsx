import { colombianPhrases } from '@/colombian-phrases';
import Heading from '@/components/Heading';
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
            <Heading>Search</Heading>
            <h2 className='text-xl text-gray-500 mx-auto w-2/3 font-semibold mb-12'>Search from over 200 <span className='border-b-2 text-gray-700 border-b-blue-500'>Colombian Spanish phrases</span></h2>
            <SearchBar onSearch={handleSearch}/>
        </Layout>
    )
}

export default SearchPage;