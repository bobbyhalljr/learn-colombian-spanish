import React from 'react'
import Layout from '@/components/Layout'
import Flashcard from '@/components/FlashCard'
import Heading from '@/components/Heading'

export default function Home() {

  return (
      <Layout>
        <Heading>Flash Cards</Heading>
        <Flashcard />
      </Layout>
  )
}
