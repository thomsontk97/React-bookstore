

import React,{useState} from 'react';
import axios from 'axios';



const Navbar = ({setBooks})=>{

    const [search, setSearch] = useState('');

const handleSearch = async () => {
  const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}`);
  setBooks(response.data.items);
};


    return(
        <div className="navbar">
            <div className='title'>KaezonBooks.in</div>
            <div className='search'>
            <input type="text" className="search-inpt" placeholder="Search"
            value={search} onChange={(e) => setSearch(e.target.value)}
            />
            <button className="btn" onClick={handleSearch}>Search</button>
            </div>
            <div className='title2'>
                <p>My Account</p>
            </div>
        </div>
    )
}


export default Navbar;