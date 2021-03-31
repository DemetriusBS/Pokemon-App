import React, { PropTypes } from 'react'

const Info = ({ results }) => (
    <div className='display'>

        <label className='label-results' for='name'>Nome do Pokemon</label>
        <input className='input-results' id='name' readOnly value='Pikachu' />

        <label for='height' className='label-results'>Altura</label>
        <input className='input-results' id='height' readOnly value='85 cm' />

        <label for='weight' className='label-results'>Peso</label>
        <input className='input-results' id='weight' readOnly value='5 KG' />

    </div>
)

export default Info