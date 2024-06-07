import React from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import Footer from './Footer'
import Books from './Books'

function Home() {
    return (
        <div>
            <Navbar />
            <Banner />
            <Books />
            <Footer />
        </div>
    )
}

export default Home