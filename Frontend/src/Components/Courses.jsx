import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import axios from 'axios'
import Card from './Card'
import { Link } from 'react-router-dom'

function Courses() {
    const [book, setBook] = useState([])

    useEffect(() => {
        const getBook = async () => {
            try {
                const res = await axios.get("http://localhost:4000/book")
                setBook(res.data)
                console.log(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        getBook()
    }, [])

    return (
        <div className='dark:bg-slate-700 dark:text-white'>
            <Navbar />
            <div className='min-h-screen max-w-screen-2xl z-10 container mx-auto md:px-10 px-10'>
                <h1 className='text-2xl pt-32 text-center'>We're delighted to have you <span className='text-pink-500'>here:)</span></h1>
                <p className='text-lg mt-5'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt consequuntur, odit amet animi distinctio autem temporibus reiciendis ex, alias at est quo voluptas quia? Est architecto doloribus dolores illum rerum.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem atque quo non nesciunt consequatur ab aperiam quia dolorum autem dolores aliquid quos reiciendis id esse doloribus ut, voluptatibus hic? Enim.
                </p>
                <div className='flex mt-5 items-center justify-center'>
                    <Link to={"/"} className="rounded-2xl duration-300 bg-red-800 text-white px-4 py-2">
                        <button>Back</button>
                    </Link>
                </div>
                <div className='mt-10 grid grid-cols-1 md:grid-cols-3 md:mr-10'>
                    {book.map((item) => <Card item={item} key={item.id} />)}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Courses
