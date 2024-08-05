import React from 'react';

function Word({ word, correctGuesses }) {
    // console.log(word , " , " , correctGuesses)
// p a s t a
  return (
    <div className="flex justify-center mb-8">
      {word.split('').map((letter, index) => (
        <span
          className="border-2 border-white mx-1 text-2xl w-8 text-center"
        >
          {correctGuesses.includes(letter) ? letter : '_'}
        </span>
      )) }

    </div>
  );
}

export default Word;