import React, { PropTypes } from 'react'
import Header from './header'
import Search from './search'
import Footer from './footer'

const AppContent = () => (
    <div className='myApp'>
        <Header />

        <Search />

        <Footer />
    </div>

)

export default AppContent

AppContent.propTypes = {

}