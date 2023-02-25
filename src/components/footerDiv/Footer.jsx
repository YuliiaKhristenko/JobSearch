import React from 'react';
import {AiFillInstagram, AiOutlineTwitter, BsFacebook} from "react-icons/all.js";

const Footer = () => {
    return (
        <div className='p-20 mb-6 bg-blueColor rounded-xl gap-8 grid grid-cols-5 items-start justify-center'>
            <div>
                <h1 className='text-2xl text-white mb-6'><strong>Job</strong>Search</h1>
                <p className='text-white pb-3 opacity-70 leading-7'>We always make our seekers and companies find the best jobs and employers find the best candidates.</p>
            </div>

            <div className='grid justify-center'>
                <span className='text-lg font-semibold mb-6 text-white'>Company</span>
                <div className='grid gap-3'>
                    <li className='text-white opacity-70 hover:opacity-100'>About Us</li>
                    <li className='text-white opacity-70 hover:opacity-100'>Features</li>
                    <li className='text-white opacity-70 hover:opacity-100'>News</li>
                    <li className='text-white opacity-70 hover:opacity-100'>FAQ</li>
                </div>
            </div>

            <div className='grid justify-center'>
                <span className='text-lg font-semibold mb-6 text-white'>Resources</span>
                <div className='grid gap-3'>
                    <li className='text-white opacity-70 hover:opacity-100'>Account</li>
                    <li className='text-white opacity-70 hover:opacity-100'>Support Center</li>
                    <li className='text-white opacity-70 hover:opacity-100'>FeedBack</li>
                    <li className='text-white opacity-70 hover:opacity-100'>Contact Us</li>
                </div>
            </div>

            <div className='grid justify-center'>
                <span className='text-lg font-semibold mb-6 text-white'>Support</span>
                <div className='grid gap-3'>
                    <li className='text-white opacity-70 hover:opacity-100'>Events</li>
                    <li className='text-white opacity-70 hover:opacity-100'>Promo</li>
                    <li className='text-white opacity-70 hover:opacity-100'>Req Demo</li>
                    <li className='text-white opacity-70 hover:opacity-100'>Careers</li>
                </div>
            </div>

            <div className='grid'>
                <span className='text-lg font-semibold mb-6 text-white'>Contact Info</span>
                <div>
                   <small className='text-base text-white'>searchjob@gmail.com</small>
                    <div className='flex gap-4 my-4'>
                        <AiFillInstagram className='bg-white rounded-full text-blueColor h-8 w-8 icon'/>
                        <BsFacebook className='bg-white rounded-full text-blueColor h-8 w-8 icon'/>
                        <AiOutlineTwitter className='bg-white rounded-full text-blueColor h-8 w-8 icon'/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;