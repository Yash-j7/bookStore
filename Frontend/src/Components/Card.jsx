import React from 'react'

function Card({ item }) {

    return (
        <div className='p-5 mt-10 md:ml-10 z-0 hover:scale-105 duration-200 rounded-xl'>
            <div className="card w-80 bg-base-100 shadow-xl">
                <img className='z-0 w-full h-[350px]' src={item.image} alt="Shoes" />
                <div className="card-body">
                    <h2 className="card-title">{item.title}</h2>
                    <p>{item.description}</p>
                    <div className="card-actions justify-end h-auto w-auto">
                        <a href={item.link} target="_blank">
                            <button className="btn btn-primary">{item.price}</button>
                        </a>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Card