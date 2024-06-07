import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'

function Login() {
    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    const onSubmit = (data) => console.log(data);

    // Define the watch function to watch specific form inputs
    const watchEmail = watch("exampleRequired");

    return (
        <div>
            <dialog id="my_modal_3" className="modal ">
                <div className="modal-box bg-white dark:bg-slate-900">
                    <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
                        <h3 className="font-bold text-lg">Login</h3>
                        <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
                        <div className=' mt-5 space-y-5'>
                            <span>Email:</span>
                            <input {...register("EmailRequired", { required: true })}
                                className='ml-3 outline-none border' type="email" placeholder='Enter your email' />
                            <br />
                            {errors.EmailRequired && <span className=' text-red-500'>This field is required</span>}
                            <br />
                            <span>Password</span>
                            <input {...register("PasswordRequired", { required: true })}
                                type="password" className='ml-3 outline-none border' placeholder='Enter password' />
                            <br />
                            {errors.PasswordRequired && <span className=' text-red-500'>This field is required</span>}
                        </div>
                        <div className='flex justify-between mt-5'>
                            <a className="rounded-2xl duration-300 bg-black text-white px-4 py-2"><button>Login</button></a>
                            <p ><span className='text-sm '>Not registered?</span><Link to="/Signup" className='text-blue-500 underline cursor-pointer pl-2 mt-2'>Signup</Link></p>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    )
}

export default Login
