import React from 'react';

function Keyboard({ onGuess, disabled, correctGuesses, wrongGuesses , score }) {
  const firstRow = 'qwertyuiop'.split('');
  const secondRow = 'asdfghjkl'.split('');
  const thirdRow = 'zxcvbnm'.split('');

    // console.log( "keyboard : " ,disabled,correctGuesses,wrongGuesses)

  const handleClick = (letter) => {
    if (!disabled && !correctGuesses.includes(letter) && !wrongGuesses.includes(letter)) {
      onGuess(letter);
    }
  };

  const renderButton = (letter) => (
    <button
      key={letter}
      onClick={() => handleClick(letter)}
      disabled={disabled || correctGuesses.includes(letter) || wrongGuesses.includes(letter)}
      className={`m-1 p-2 w-10 ${disabled || correctGuesses.includes(letter) || wrongGuesses.includes(letter) ? 'bg-gray-500' : 'bg-gray-700'} text-white rounded`}
    >
      {letter}
    </button>
  );

  return (
    <>
    <div className="flex flex-col items-center mb-8 space-y-2">
      <div className="flex justify-center">{firstRow.map(renderButton)}</div>
      <div className="flex justify-center">{secondRow.map(renderButton)}</div>
      <div className="flex justify-center">{thirdRow.map(renderButton)}</div>
    </div>

    <div>
        <h2 className='text-2xl'>your Score is : {score}</h2>
    </div>
    </>
  );
}

export default Keyboard;
