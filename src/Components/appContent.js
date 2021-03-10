import React, { PropTypes } from 'react'
import Header from './header'
import Search from './search'

const AppContent = () => (
    <div className='myApp'>
        <Header />

        <Search />
    </div>

)

export default AppContent

AppContent.propTypes = {

}