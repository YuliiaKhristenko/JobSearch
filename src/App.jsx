import React from 'react';
import Navbar from "./components/navbar/Navbar.jsx";
import Search from "./components/searchDiv/Search.jsx";
import Jobs from "./components/jobDiv/Jobs.jsx";
import Value from "./components/valueDiv/Value.jsx";
import Footer from "./components/footerDiv/Footer.jsx";

const App = () => {
    return (
        <div className='container bg-white'>
            <Navbar />
            <Search />
            <Jobs />
            <Value />
            <Footer />
        </div>
    );
};

export default App;