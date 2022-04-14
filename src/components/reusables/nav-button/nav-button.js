import React from 'react';
import {Link} from 'react-router-dom';

const NavLink = ({children, linkTo}) => {

  return (
    <Link className='nav-link-container' to={linkTo}>
      {children}
    </Link>
  )

}

export default NavLink;
