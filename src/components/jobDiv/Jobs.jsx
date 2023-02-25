import React from 'react';
import {BiTimeFive} from "react-icons/all.js";
import logo1 from '../../assets/logo1.png'
import logo2 from '../../assets/logo2.png'
import logo3 from '../../assets/logo3.png'
import logo4 from '../../assets/logo4.png'
import logo5 from '../../assets/logo5.png'
import logo6 from '../../assets/logo6.png'
import logo7 from '../../assets/logo7.png'
import logo8 from '../../assets/logo8.png'

const Data = [
    {
        id: 1,
        title: 'Web Developer',
        time: 'Now',
        location: 'New York',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, consequatur.',
        image: logo1,
        company: 'Novac Linus Co.'
    },
    {
        id: 2,
        title: 'UI/UX Designer',
        time: '12hrs',
        location: 'Canada',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, consequatur.',
        image: logo2,
        company: 'Liquid Accessments'
    },
    {
        id: 3,
        title: 'Software Eng',
        time: '8hrs',
        location: 'Chicago',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, consequatur.',
        image: logo3,
        company: 'Web Teach Agency'
    },
    {
        id: 4,
        title: 'Product Manager',
        time: '10min',
        location: 'France',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, consequatur.',
        image: logo6,
        company: 'Newcastle'
    },
    {
        id: 5,
        title: 'Data Scientist',
        time: '2hrs',
        location: 'Germany',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, consequatur.',
        image: logo7,
        company: 'Government'
    },
    {
        id: 6,
        title: 'Researcher',
        time: '4hrs',
        location: 'San Francisco',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, consequatur.',
        image: logo8,
        company: 'Nimeloe - UK'
    },
    {
        id: 7,
        title: 'QA Testing',
        time: '30min',
        location: 'London',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, consequatur.',
        image: logo4,
        company: 'Nin Co.'
    },
    {
        id: 8,
        title: 'Security analyst',
        time: '2min',
        location: 'Manchester',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, consequatur.',
        image: logo5,
        company: 'Nome And Sons'
    },
]

const Jobs = () => {
    return (
        <div>
           <div className='flex flex-wrap gap-10 justify-center items-center py-10'>

               {Data.map(({id, title, time, location, desc,image, company}) => {
                       return (
                           <div key={id} className='w-[250px] p-4 bg-white rounded-xl hover:bg-blueColor hover:text-white shadow-lg shadow-greyIsh-400/700'>
                               <div className='flex justify-between items-center gap-4'>
                                   <h1 className='text-base font-semibold'>{title}</h1>
                                   <span className='flex items-center text-[#ccc] gap-1'><BiTimeFive/>{time}</span>
                               </div>
                               <h6 className='text-[#ccc]'>{location}</h6>
                               <p className='text-xs text-[#95959] pt-5 border-t-2 mt-5'>{desc}</p>
                               <div className='flex items-center gap-2 hover:text-white'>
                                   <img src={image} alt="logo" className='w-[10%]'/>
                                   <span className='text-sm py-4 block'>{company}</span>
                               </div>
                               <button
                                   className='w-full border-2 rounded-xl p-3 text-sm text-textColor hover:bg-white block'>Apply Now
                               </button>
                           </div>
                       )
                   })
               }
           </div>
        </div>
    );
};

export default Jobs;