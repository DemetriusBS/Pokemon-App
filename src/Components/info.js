import React, { PropTypes } from 'react'

const Info = ({ results }) => (
    <div className='display'>

        <label className='label-results' for='name'>Nome do Pokemon</label>
        <input className='input-results' id='name' readOnly value={results.name} />

        <label for='height' className='label-results'>Altura</label>
        <input className='input-results' id='height' readOnly value={results.height} />

        <label for='weight' className='label-results'>Peso</label>
        <input className='input-results' id='weight' readOnly value={results.weight} />

    </div>
)

export default Info