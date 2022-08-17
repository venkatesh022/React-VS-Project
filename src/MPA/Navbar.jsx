import React from 'react'

const Navbar = () => {
  return (
    <React.Fragment>
       <nav>
        <h2>G7 SUMMIT</h2>
        <div>
            <ul>
                <li> <a href="/">HOME</a> </li>
                <li><a href="/countries">Countries</a></li>
                <li><a href="/about">About</a></li>
            </ul>
        </div>
       </nav>
    </React.Fragment>
  )
}

export default Navbar