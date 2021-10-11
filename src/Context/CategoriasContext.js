import React, { createContext } from 'react'

// * Crear el Context

export const CategoriasContext = createContext();

// * Provider es donde se encuentra las funcuones y state
export const CategoriasProvider = ( props ) => {


    return (
        <CategoriasContext.Provider
            value={{

            }}
        >
            { props.children }
        </CategoriasContext.Provider>
    );
}