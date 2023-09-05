import React, { useState } from 'react'
import { colombianPhrases } from '@/colombian-phrases'
import Layout from '@/components/Layout'
import FlashcardApp from '@/components/FlashCard'
import Flashcard from '@/components/FlashCard'

export default function Home() {
  let phraseKeys = Object.keys(colombianPhrases)
  let phraseValues = Object.values(colombianPhrases)

  const [phrase, setPhrase] = useState<string[]>(phraseKeys)
  const [phraseAnswer, setPhraseAnswer] = useState<any>(phraseValues)
  const [showModal, setShowModal] = useState<boolean>(false)

  const showModalFunc = () => {
    setShowModal(true)
  }

  return (
    <main className=''>
      <Layout>
        <div className='mx-auto max-w-3xl w-full'>
          <div className=''>
            <Flashcard />
          </div>

          {/* <div className='fixed bottom-0 w-full max-w-3xl mx-auto py-8 rounded-t-lg px-4 z-10 left-0 right-0 bg-gray-200'>
            <div className="rounded-full w-full mx-auto text-whiter grid grid-cols-2 justify-evenly space-x-6">
              <button className="btn bg-blue-500 text-gray-100 border-none tracking-wide leading-3 hover:bg-blue-600">Previous phrase</button>
              <button className="btn bg-blue-500 text-gray-100 border-none tracking-wide leading-3 hover:bg-blue-600">Next phrase</button>
            </div>
          </div> */}

        </div>
      </Layout>
    </main>
  )
}
