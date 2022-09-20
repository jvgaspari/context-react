import React, { createContext, useState, useContext } from 'react';

const ContadorContext = createContext({});

function ContadorProvider({ children }) {
  const [contador, setContador] = useState(0);

  const acrescentar = () => {
    setContador(contador + 1);
  };

  const diminuir = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };

  const value = React.useMemo(() => ({
    contador, acrescentar, diminuir,
  }), [contador]);

  return (
    <ContadorContext.Provider value={value}>
      {children}
    </ContadorContext.Provider>
  );
}

function useContador() {
  const context = useContext(ContadorContext);

  return context;
}

export { ContadorProvider, useContador };
