import React from 'react'
import { Formulario } from './Components/Formulario';
import { Header } from './Components/Header';
import { ListaRecetas } from './Components/ListaRecetas';

import { CategoriasProvider } from './Context/CategoriasContext';
import { RecetasProvider } from './Context/RecetasContext';

function App() {
  return (
    <CategoriasProvider>
      <RecetasProvider>
          <Header />

          <div className='container mt-5'>
            <div className='row'>
              <Formulario />
            </div>

            <ListaRecetas />
          </div>
           
      </RecetasProvider>
    </CategoriasProvider>
  );
};

export default App;
