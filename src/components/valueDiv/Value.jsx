import React from 'react';
import simple from '../../assets/simple.png'
import love from '../../assets/love.png'
import security from '../../assets/security.png'

const Value = () => {
    return (
        <div className='mb-16 mt-24'>
            <h1 className='text-textColor text-2xl px-2 my-8 mb-12 font-bold block w-[400px]'>The value that holds us true and to account</h1>
            <div className='grid grid-cols-3 gap-40 items-center'>

                <div className='rounded-xl hover:bg-[#eeedf7] p-6'>
                    <div className='flex items-center gap-3'>
                        <div className='p-1 rounded-xl bg-[#dedef8] h-10 w-10 flex items-center justify-center'>
                            <img src={simple} alt="img" className='w-[70%]'/>
                        </div>
                        <span className='font-semibold text-textColor text-lg cursor-pointer'>Simplicity</span>
                    </div>
                    <div className='text-xs text-textColor font-semibold opacity-50 py-4'>
                        <p>Things being made beautiful simple are at the heart of everything we do.</p>
                    </div>
                </div>

                <div className='rounded-xl hover:bg-[#f7edf5] p-6'>
                    <div className='flex items-center gap-3'>
                        <div className='p-1 rounded-xl bg-[#f7d1e1] h-10 w-10 flex items-center justify-center'>
                            <img src={love} alt="img" className='w-[70%]'/>
                        </div>
                        <span className='font-semibold text-textColor text-lg cursor-pointer'>Social Good</span>
                    </div>
                    <div className='text-xs text-textColor font-semibold opacity-50 py-4'>
                        <p>We believe in making things better for everyone, even if just by a little bit!</p>
                    </div>
                </div>

                <div className='rounded-xl hover:bg-[#fcfae3] p-6'>
                    <div className='flex items-center gap-3'>
                        <div className='p-1 rounded-xl bg-[#f3f2ad] h-10 w-10 flex items-center justify-center'>
                            <img src={security} alt="img" className='w-[70%]'/>
                        </div>
                        <span className='font-semibold text-textColor text-lg cursor-pointer'>Trust</span>
                    </div>
                    <div className='text-xs text-textColor font-semibold opacity-50 py-4'>
                        <p>We work on the basis of creating which can be nurtured through authenticity and transparency</p>
                    </div>
                </div>
            </div>

            <div className='bg-blue-100 mt-8 flex justify-between p-20 rounded-lg'>
                <div>
                    <h1 className='text-blueColor text-3xl font-bold py-2'>Ready to switch a career?</h1>
                    <h2 className='text-textColor text-2xl font-bold'>Let's get started!</h2>
                </div>
                <button className='border-2 rounded-xl font-semibold text-blueColor text-xl py-2 px-10 hover:bg-white border-blueColor'>Get Started</button>
            </div>
        </div>
    );
};

export default Value;