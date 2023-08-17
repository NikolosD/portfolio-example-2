import React, {useEffect, useState} from 'react';
import {DesktopMenu} from './headerMenu/desktopMenu/DesktopMenu';
import {Container} from '../../components/Container';
import {MobileMenu} from "./headerMenu/mobileMenu/MobileMenu";
import {S} from './Header_Styles'


const items = ['Home', 'About me', 'Skills', 'Portfolio', 'Contacts'];

export const Header : React.FC = () => {

    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 768;

    React.useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth));
    }, []);

    return (
        <S.Header>
            <Container>
                {width < breakpoint ? <MobileMenu menuItems={items}/> :
                    <DesktopMenu menuItems={items}/>
                }
            </Container>
        </S.Header>
    )
        ;
};

