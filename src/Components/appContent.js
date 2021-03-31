import React, { PropTypes } from 'react'
import Header from './header'
import Search from './search'
import Info from './info'
import Footer from './footer'

const AppContent = ({results, handleSearch}) => (
    <div className='myApp'>
        <Header />

        <Search handleSearch={handleSearch}/>

        <Info />

        <Footer />
    </div>

)

export default AppContent

AppContent.propTypes = {

}