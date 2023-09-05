import React, { useState } from 'react'
import { colombianPhrases } from '@/colombian-phrases'
import Layout from '@/components/Layout'
import FlashcardApp from '@/components/FlashCard'
import Flashcard from '@/components/FlashCard'

export default function Home() {

  return (
    <main className=''>
      <Layout>
        <Flashcard />
      </Layout>
    </main>
  )
}
