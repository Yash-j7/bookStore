import React from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';
import { useForm } from 'react-hook-form';

function Signup() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => console.log(data);

    return (
        <div className='flex justify-center h-screen w-auto items-center'>
            <div id="" className="w-[600px]">
                <div className="modal-box bg-white dark:bg-slate-900">
                    <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
                        {/* if there is a button in form, it will close the modal */}
                        <h3 className="font-bold text-lg">Signup</h3>
                        <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
                        <div className='mt-5 space-y-10 mb-14'>
                            <div>
                                Email:
                                <input
                                    {...register("email", { required: true })}
                                    className='ml-3 outline-none border' type="email" placeholder='Enter your email' />
                                {errors.email && <span className='text-red-500'>This field is required</span>}
                            </div>

                            <div>
                                <span>Password:</span>
                                <input
                                    {...register("password", { required: true })}
                                    type="password" className='ml-3 outline-none border' name="password" id="password" placeholder='Enter password' />
                                {errors.password && <span className='text-red-500'>This field is required</span>}
                            </div>
                        </div>
                        <div >
                            <button className="rounded-2xl duration-300 bg-black text-white px-4 py-2" type="submit">Signup</button>

                        </div>
                    </form>
                    <div className='flex justify-end mt-5'>
                        <span className='pt-2 mr-2'>Already Registered?</span>
                        <a className="rounded-2xl duration-300 bg-black text-white px-4 py-2" onClick={() => document.getElementById("my_modal_3").showModal()}>Login</a>
                        <Login />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;
