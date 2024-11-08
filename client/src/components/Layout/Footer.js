import React from 'react'
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div className="footer">
        <p className="text-center mt-3">
        <h5><Link to="/about">About</Link>|
            <Link to="/contact">Contact</Link>|
            <Link to="/policy">Privacy Policy</Link></h5>
        </p>

    </div>
  )
}

export default Footer