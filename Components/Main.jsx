import React from 'react'
import { useState } from "react"

const articleTitles = [
  "Come Ottimizzare le Performance Web con le Nuove API di JavaScript",
  "I Benefici dell'Intelligenza Artificiale nella Sanità: Prospettive Future",
  "5 Strategie per Migliorare la Produttività con il Remote Working",
  "La Sostenibilità nel Settore Fashion: Innovazioni e Sfide",
  "Guida Completa alle Tendenze di Design UX per il 2025"
];

const Main = () => {
  const [articles, setArticles] = useState(articleTitles);
  const [newArticles, setNewArticles] = useState('');

  const handlerArticles = (e) => {
    e.preventDefault();
    setArticles([newArticles, ...articles])
  }

  return (
    <main>
      <div className="container">
        <div className='input-area'>
          <form onSubmit={handlerArticles}>
            <input
              type="text"
              value={newArticles}
              placeholder='Inserisci il titolo...'
              onChange={(e) => setNewArticles(e.target.value)} />
            <button type='submit'>Inserisci</button>
          </form>
        </div>
        <ul>
          {articles.map((item, index) => (
            <li key={index}>{item}<div><i class="fa-solid fa-pencil"></i><i class="fa-solid fa-trash"></i></div></li>
          ))}
        </ul>
      </div>
    </main>
  )
}

export default Main