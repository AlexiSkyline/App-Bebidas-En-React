import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

export const RecetasContext = createContext();

export const RecetasProvider = ( props ) => {

    const [ recetas, setRecetas ] = useState([]);
    const [ busqueda, setBusquedaRecetas ] = useState({
        nombre: '',
        categoria: ''
    });
    const [ consulta, setConsulta ] = useState(false);

    const { nombre, categoria } = busqueda;

    useEffect(() => {
        if( consulta ) {
            const obtenerRecetas = async () => {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}`;
                
                const resultado = await axios.get( url );

                setRecetas( resultado.data.drinks );
            }

            obtenerRecetas();
        }
    }, [busqueda]);
    
    return (
        <RecetasContext.Provider
            value={{
                setBusquedaRecetas,
                setConsulta,
                recetas
            }}
        >
            { props.children }
        </RecetasContext.Provider>
    );
}