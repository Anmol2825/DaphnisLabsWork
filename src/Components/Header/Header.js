import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
function Header() {
  return (
    <div id='header_main'>
      <div className='directory'>
        Medical Darpan &#62; Search &#62; <span style={{ "color": "black", fontWeight: "700" }}>FabiFlu Tablet</span>
      </div>
      <div className='search_engine'>
        <SearchIcon style={{ position: 'absolute', left: "20px" }} />
        <input className='input_text' /><button className='search_button'>Search</button>
      </div>
      <div className='selected'>
        Paracetamol &nbsp;  <span style={{ color: "grey", fontSize: "13px" }}> (128 products) </span>&nbsp;&nbsp; <span style={{ color: "black", fontSize: "12px", backgroundColor: "teal", color: "white", padding: "4px", borderRadius: '2px', cursor: "pointer" }}>FabiFlu Tablet X</span>&nbsp;&nbsp;
        <span style={{ "color": "black", backgroundColor: "teal", color: "white", fontSize: "12px", padding: "3px", borderRadius: '2px', cursor: "pointer" }}>500mg X</span> &nbsp;&nbsp;
        <button style={{ color: "red", backgroundColor: "white", border: "none" }}>Remove All</button>
      </div>
    </div>
  )
}

export default Header