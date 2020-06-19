import React from 'react';

const NavItem = ({ onRouteChange, itemName }) => {
    const newRoute = itemName;
    return(
        <p onClick={() => onRouteChange(newRoute)} className='nav-item'>
            <h4>{itemName}</h4>
        </p>
    )
}

export default NavItem;