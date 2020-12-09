import React from 'react'
import './Botonera.css'
import * as ColorappActions from '../actions/ColorappActions';

const Botonera = () =>{

    const butonClick = (color) =>{
        ColorappActions.changeColor(color)
    }

    return(
        <div className="Botonera">
            <button onClick={e => butonClick('#ff0000')}>Rojo</button>
            <button onClick={e => butonClick('#00ff00')}>Verde</button>

        </div>
    )

}

export default Botonera