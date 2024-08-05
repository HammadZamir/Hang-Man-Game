import React from 'react';


function Header({ category }) {
  return (
    <header className="text-center mb-8">
      <h1 className="text-4xl font-bold mb-2">Hangman Game</h1>
      <p className="text-lg">Find the hidden word - Enter a letter</p>
      
        <p className="text-xl mt-4">
          <strong>Category:</strong> {category}
        </p>
      
    </header>
  );
}

export default Header;