import React, { PropTypes } from 'react'

const Search = ({ handleSearch }) => {
    return <input type='text' className='inputInfo' placeholder='Informe o nome do Pokemon ...'
        onKeyUp={handleSearch}
    />
}

Search.propTypes = {

}

export default Search