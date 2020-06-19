import React from 'react';
import NavItem from './NavItem';

const Navigation = ( {onRouteChange} ) => {
    return(
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
            <NavItem onRouteChange={onRouteChange} itemName={'Home'}/>
            <NavItem onRouteChange={onRouteChange} itemName={'About'}/>
            <NavItem onRouteChange={onRouteChange} itemName={'Explore'}/>
            <NavItem onRouteChange={onRouteChange} itemName={'Sign in'}/>
        </nav>
    )
}

export default Navigation;