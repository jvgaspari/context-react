import React from 'react';
import { Link } from 'react-router-dom';
import { useContador } from '../../hooks/contador';

function Home() {
  const { contador } = useContador();

  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
        <div style={{
          display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100px',
        }}
        >
          <p>Contador: </p>
          <span>
            {contador}
          </span>
        </div>
      </main>
      <nav>
        <Link to="/about">Alterar o contador na pagina sobre</Link>
      </nav>
    </>
  );
}

export default Home;
