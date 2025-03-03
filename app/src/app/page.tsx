'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import jamesCroweImage from '../images/james-crowe-1.jpg'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000) // Adjust this value to control how long the black screen appears

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {isLoading ? (
        <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
          <h1 className="text-white text-4xl font-bold animate-fade-out">
            Hello, I am James Crowe
          </h1>
        </div>
      ) : null}
      <main className="flex min-h-screen items-center justify-center p-24 pt-32 bg-gradient-to-br from-[#095779] to-[#14003b] animate-fade-in">
        <div className="flex max-w-3xl items-center space-x-8">
          <div className="flex-1">
            <h1 className="mb-4 text-4xl font-bold">Hello, I'm James Crowe</h1>
            <p className="text-lg">
              Welcome to my personal website! I'm a [your profession/role] passionate about [your interests]. 
              With [X] years of experience in [your field], I love [what you love about your work].
              When I'm not [your work], you can find me [your hobbies or interests].
            </p>
          </div>
          <div className="flex-shrink-0">
            <Image
              src={jamesCroweImage}
              alt="[James Crowe]"
              width={300}
              height={300}
              className="rounded"
            />
          </div>
        </div>
      </main>
    </>
  )
}
