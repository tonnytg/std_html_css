// App.tsx
import React from 'react'
import './App.css'
import { Instagram, Twitter, Youtube, Heart } from 'lucide-react'

const ImagesList = [
  'https://picsum.photos/id/70/800/500'
]

export default function App() {
  const handleClick = (): any => {
    console.log('Clicked')
  }

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      {/* Header */}
      <header className="bg-gray-100 py-4 shadow-sm">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-600">Thomacelli</h1>
          <nav>
            <ul className="flex gap-6 text-sm font-medium">
              <li><a href="#" className="hover:text-gray-600">Home</a></li>
              <li><a href="#" className="hover:text-gray-600">About</a></li>
              <li><a href="#" className="hover:text-gray-600">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1 py-10">
        <div className="container mx-auto px-6">
          <section className="bg-gray-100 flex flex-col md:flex-row gap-6 p-6 rounded-xl shadow-md">
            <img
              className="w-full md:w-sm h-60 md:h-64 rounded-xl object-cover"
              src={ImagesList[0]}
              alt="Ilustração"
            />
            <div className="flex flex-col justify-between flex-1">
              <div>
                <h2 className="font-bold text-4xl text-gray-600 mb-2">
                  Title Article
                </h2>
                <span className="font-medium text-lg text-gray-700 block mb-2">
                  Teste de texto para Span, o que é o span dentro do html?
                </span>
                <p className="text-sm leading-relaxed text-gray-600 mb-4 max-w-xl">
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy text
                  ever since the 1500s...
                </p>
              </div>

              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={handleClick}
                  className="px-4 py-2 bg-blue-200 rounded-md font-medium"
                >
                  Leia Mais...
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <a href="#">
            I
            <Heart className="inline"/>
            Tech
            </a>
            </div>
          <ul className="flex gap-6">
            <li>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <Youtube className="w-5 h-5 hover:text-red-500" />
              </a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-5 h-5 hover:text-pink-400" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Twitter className="w-5 h-5 hover:text-sky-400" />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  )
}

