import React from 'react';
import useJoke from './customHooks/useJoke';

export default function JokesPage() {
  const { joke, loading, error, getJoke } = useJoke(); 

  return (
    <div className="jokes-container">
    <img src='clown.png' alt='Clown' className='clown-img'/>
      <h1 className="jokes-title">Generate Joke</h1>
      {loading && <p>Loading...</p>}
      {error && <p className="error-text">{error}</p>}
      <p className="joke-text">{joke}</p>
      
      <button className="generate-btn" onClick={getJoke}>Generate Joke</button>
    </div>
  );
}
