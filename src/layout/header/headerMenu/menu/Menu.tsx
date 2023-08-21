import React from 'react';
import {S} from './../HeaderMenu_Styles'




const items = [
    {
        title: 'Home',
        href: 'home',
    },
    {
        title: 'About Me',
        href: 'aboutMe',
    },
    {
        title: 'Skills',
        href: 'skills',
    },
    {
        title: 'Portfolio',
        href: 'portfolio',
    },
    {
        title: 'Contact',
        href: 'contact',
    },
]

export const Menu : React.FC = () => {
    return (

            <ul>
                {items.map((item, index) => {
                    return <S.MenuItem key={index}>
                        <S.NavLink     activeClass='active'
                                       to={item.href}
                                       smooth={true}
                                       spy = {true}
                                       duration={2000} >
                            {item.title}

                        </S.NavLink>
                    </S.MenuItem>
                })}
            </ul>
    );
};


