import axios from 'axios';
import React, { createContext,useEffect,useState } from 'react';

export const ModalContext = createContext();

export const ModalProvider = ( props ) => {
    
    const [ idReceta, setIdReceta ] = useState(null);
    const [ informacion, setInformacion ] = useState({});

    useEffect( () => {

        const obtenerReceta = async () =>{
            if( !idReceta ) return;

            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idReceta}`;
            const resultado = await axios.get( url );

            setInformacion( resultado.data.drinks[0] );
        }
        obtenerReceta();
    }, [idReceta]);
    return(
        <ModalContext.Provider
            value={{
                informacion,
                setIdReceta,
                setInformacion
            }}
        >
            { props.children }
        </ModalContext.Provider>
    );
}
