// src/pages/PhrasesPage.tsx
import React from 'react';
import PhraseTable from '../components/PhraseTable';
import { colombianPhrases } from '@/colombian-phrases'; // Import the provided phrases
import Layout from '@/components/Layout';
import Heading from '@/components/Heading';

const PhrasesPage: React.FC = () => {
    return (
        <Layout>
            <Heading>Phrases</Heading>
            <div className="container w-full max-w-3xl mt-10 my-24 pt-4 bg-gray-200 dark:bg-gray-200 rounded-lg shadow-lg">
                <h1 className="text-3xl px-4 font-semibold mb-4">List of Colombian Phrases</h1>
                <PhraseTable phrases={colombianPhrases} />
            </div>
        </Layout>
    );
};

export default PhrasesPage;
