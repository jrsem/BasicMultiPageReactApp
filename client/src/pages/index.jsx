import React from 'react';
import { Link } from "react-router-dom";
const IndexPage = () => {
  return (
    <>
      <ul>
        {/* link to url (http://localhost:3000/home;about;contact ..) */}
        <li><Link to="/home" >Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/work">Work</Link></li>
        <li><Link to="/specialize">Specialize</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </>
  )
}
export default IndexPage;//to let the outher module use the page using "import" command