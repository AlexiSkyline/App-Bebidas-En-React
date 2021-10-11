import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'

// * Crear el Context

export const CategoriasContext = createContext();

// * Provider es donde se encuentra las funciones y state
export const CategoriasProvider = ( props ) => {

    const [ categorias, setCategorias ] = useState([]);

    useEffect( () => {
        
        const obtenerCategorias = async () => {
            const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
            
            const categorias = await axios.get(url);

            setCategorias( categorias.data.drinks );
        }
        obtenerCategorias();

    }, [categorias]);

    return (
        <CategoriasContext.Provider
            value={{
                categorias
            }}
        >
            { props.children }
        </CategoriasContext.Provider>
    );
}