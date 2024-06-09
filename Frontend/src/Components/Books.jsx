import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import axios from 'axios'

import "slick-carousel/slick/slick-theme.css";
import Card from "./Card";
import { useEffect, useState } from 'react'





function Books() {
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
        const freeBooks = book.filter((book) => book.price == "free");
        console.log(freeBooks)
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        
        <div className="max-w-screen-2xl container mx-auto md:px-10 px-10">

            <Slider {...settings}>

                {freeBooks.map((item) => (
                    <Card item={item} key={item.id} />
                ))}

            </Slider>
        </div>
    );
}

export default Books;
