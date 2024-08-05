import React from 'react';

function Result({ gameStatus, onReset, onNextRound , word }) {
//   console.log("Game Status:", gameStatus); // Debugging line
//   console.log("Word:", word); // Debugging line

  if (gameStatus === 'playing'){
    return null;
  } 
  else
  return (
    <div className="absolute inset-0 w-full bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-slate-700 w-full p-8 rounded shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-4">
          {gameStatus === 'won' ? 'Congratulations! You won!' : 'Sorry, you lost!'}
        </h2>
        {gameStatus === 'lost' && (
          <p className="mb-4">The word was: <strong>{word}</strong></p>
        )}
        <button onClick={onReset} className="bg-blue-500 mx-2 text-white px-4 py-2 rounded"> Reset </button>
        <button onClick={onNextRound} className="bg-blue-500 mx-2 text-white px-4 py-2 rounded"> Next Round </button>
      </div>
    </div>
  );
}

export default Result;