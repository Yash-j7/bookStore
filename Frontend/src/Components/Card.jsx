import React from 'react'

function Card({ item }) {

    return (
        <div className='p-5 mt-10 md:ml-10 z-0 hover:scale-105 duration-200 rounded-xl'>
            <div className="card w-80 bg-base-100 shadow-xl">
                <img className='z-0' src="https://imgs.search.brave.com/pRUbrf-dZWnJUNfh2qICBeZdpftLiMaeHsEiR2G7Sws/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9i/b29rLWNvbXBvc2l0/aW9uLXdpdGgtb3Bl/bi1ib29rXzIzLTIx/NDc2OTA1NTUuanBn/P3NpemU9NjI2JmV4/dD1qcGc" alt="Shoes" />
                <div className="card-body">
                    <h2 className="card-title">{item.title}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">{item.price}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card