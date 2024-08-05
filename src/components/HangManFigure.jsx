import React from 'react';

function HangmanFigure({ wrongGuesses }) {

    const totalLives = 6;
    const remainingLives = totalLives - wrongGuesses;
    // console.log(remainingLives);

    if (remainingLives > 4) {
        var colorClass = 'text-green-600'
    } else if(remainingLives === 4 || remainingLives === 3){
        colorClass = 'text-yellow-600'
    }
    else if(remainingLives === 2 || remainingLives === 1){
        colorClass = 'text-red-600'  
    } 

  return (
    <div className='flex flex-col m-10 items-center '>
        
        <h2 className='text-2xl font-bold'>Total Lifes : 6</h2>
        <h2 className={`text-2xl font-bold ${colorClass}`} >Remaining Lives : <span className = "" >{remainingLives} </span> </h2>
    </div>
  );
}

export default HangmanFigure;