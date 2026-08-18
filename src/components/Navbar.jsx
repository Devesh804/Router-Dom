import React from 'react'

const Navbar = () => {
  return (
    <div class='nav'>
        <h3>Router DOM</h3>
        <div>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link>
        </div>
      </div>
  )
}

export default Navbar