import React, {useState} from 'react';
import {AiOutlineCloseCircle, AiOutlineSearch, BsHouseDoor, CiLocationOn} from "react-icons/all.js";

const Search = () => {
    const [job, setJob] = useState('')
    const [company, setCompany] = useState('')
    const [location, setLocation] = useState('')

    function clearJob() {
        setJob('')
    }
    function clearCompany() {
        setCompany('')
    }
    function clearLocation() {
        setLocation('')
    }

    return (
        <div className='grid gap-10 bg-greyIsh rounded-[10px] p-12'>
           <form>
               <div className='flex justify-between items-center rounded-2 gap-[10px] bg-white p-5 shadow-lg shadow-greyIsh-700'>

                   <div className='flex gap-2 items-center'>
                       <AiOutlineSearch className='icon text-[25px]'/>
                       <input
                           value={job}
                           onChange={event => setJob(event.target.value)}
                           type="text"
                           className='bg-transparent text-blue-500 focus:outline-none w-[100%]'
                           placeholder='Search Job Here...'
                       />
                       <AiOutlineCloseCircle onClick={clearJob} className='icon text-[30px] text-[#a5a6a6] hover:text-textColor'/>
                   </div>

                   <div className='flex gap-2 items-center'>
                       <BsHouseDoor className='icon text-[25px]'/>
                       <input
                           value={company}
                           onChange={event => setCompany(event.target.value)}
                           type="text"
                           className='bg-transparent text-blue-500 focus:outline-none w-[100%]'
                           placeholder='Search by company...'
                       />
                       <AiOutlineCloseCircle onClick={clearCompany} className='icon text-[30px] text-[#a5a6a6] hover:text-textColor'/>
                   </div>

                   <div className='flex gap-2 items-center'>
                       <CiLocationOn className='icon text-[25px]'/>
                       <input
                           value={location}
                           onChange={event => setLocation(event.target.value)}
                           type="text"
                           className='bg-transparent text-blue-500 focus:outline-none w-[100%]'
                           placeholder='Search by location...'
                       />
                       <AiOutlineCloseCircle onClick={clearLocation} className='icon text-[30px] text-[#a5a6a6] hover:text-textColor'/>
                   </div>

                   <button className='bg-blueColor h-full p-5 px-10 rounded-[10px] text-white text-center cursor-pointer hover:bg-blue-400 lg:px-4 lg:py-2 lg:h-1/2'>Search</button>
               </div>
           </form>

            <div className='flex items-center gap-10 justify-center'>
                <div className='flex items-center gap-2'>
                    <label htmlFor="relevance" className='text-[#808080] font-semibold'>Sort by:</label>
                    <select id="relevance" className='bg-white rounded-md px-4 py-1'>
                        <option value="">Relevance</option>
                        <option value="">Inclusive</option>
                        <option value="">Starts with</option>
                        <option value="">Contains</option>
                    </select>
                </div>
                <div className='flex items-center gap-2'>
                    <label htmlFor="type" className='text-[#808080] font-semibold'>Type:</label>
                    <select id="type" className='bg-white rounded-md px-4 py-1'>
                        <option value="">Full-time</option>
                        <option value="">Part-time</option>
                        <option value="">Remote</option>
                        <option value="">Contract</option>
                    </select>
                </div>
                <div className='flex items-center gap-2'>
                    <label htmlFor="level" className='text-[#808080] font-semibold'>Level:</label>
                    <select name="" id="level" className='bg-white rounded-md px-4 py-1'>
                        <option value="">Senior</option>
                        <option value="">Middle</option>
                        <option value="">Junior</option>
                    </select>
                </div>

                <button className='text-[#a1a1a1]'>Clear All</button>
            </div>
        </div>
    );
};

export default Search;