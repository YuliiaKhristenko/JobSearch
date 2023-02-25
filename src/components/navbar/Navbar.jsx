import React from 'react';

const Navbar = () => {
    return (
        <div className='container flex justify-between items-center'>
            <h1 className='text-2xl text-blueColor cursor-pointer'><strong>Job</strong>Search</h1>

            <div className='flex gap-8'>
                <a href='#' className='relative text-[#6f6f6f] hover:text-blueColor'>Jobs</a>
                <a href='#' className='relative text-[#6f6f6f] hover:text-blueColor'>Companies</a>
                <a href='#' className='relative text-[#6f6f6f] hover:text-blueColor'>About</a>
                <a href='#' className='relative text-[#6f6f6f] hover:text-blueColor'>Contact</a>
                <a href='#' className='relative text-[#6f6f6f] hover:text-blueColor'>Blog</a>
                <a href='#' className='relative text-[#6f6f6f] hover:text-blueColor'>Login</a>
                <a href='#' className='relative text-[#6f6f6f] hover:text-blueColor'>Register</a>
            </div>

            <button className="burger hidden">
                <span className="burger-line top-line"></span>
                <span className="burger-line mid-line"></span>
                <span className="burger-line bottom-line"></span>
            </button>
        </div>
    );
};

export default Navbar;