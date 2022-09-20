import React from 'react';
import { Link } from 'react-router-dom';
import { useContador } from '../../hooks/contador';

function About() {
  const { acrescentar, diminuir } = useContador();

  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>
          That feels like an existential question, don&apos;t you
          think?
        </p>
      </main>
      <div style={{ margin: '16px' }}>
        <h2>
          Alterar valor do contador
        </h2>
        <button type="button" onClick={() => acrescentar()}>
          Somar
        </button>
        <button type="button" onClick={() => diminuir()}>
          Diminuir
        </button>
      </div>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}

export default About;
