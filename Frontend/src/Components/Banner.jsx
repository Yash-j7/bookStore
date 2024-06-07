import React from 'react'
import banner from '../../public/banner.jpg'
function Banner() {
    return (
        <div className='max-w-screen-2xl container mx-auto md:px-20 px-10 flex flex-col md:flex-row '>
            <div className='w-full md:w-1/2 order-2 md:order-1'>
                <div className='text-4xl mt-36'>
                    Welcome Back,learn something <span className='text-purple-600'>new everyday</span>
                    <p className='text-xl mt-5'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nulla labore iste magnam adipisci. Dolores voluptas similique, cupiditate fugit enim, nostrum corrupti perferendis magni odio suscipit, error adipisci illum consequatur?
                        Soluta necessitatibus corporis voluptatibus eveniet, velit nisi odit optio quas totam ab, error aperiam voluptatem eius illo dolore minima vero maiores neque
                    </p>
                    <label className=" border mt-10 flex items-center gap-2 dark:bg-white">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                        <input type="email" className="grow outline-none border text-lg" placeholder="Email" />
                    </label>
                    <button className="btn btn-active rounded-xl bg-fuchsia-700 text-white mt-5">Secondary</button>
                </div>

            </div>
            <div className='w-full md:w-1/2 order-1 mt-36 '>
                <img src={banner} alt="" className='w-[200] p-5 md:ml-4 h-92' />
            </div>
        </div>
    )
}

export default Banner