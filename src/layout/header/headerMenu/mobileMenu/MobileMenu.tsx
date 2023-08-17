import React, {useState} from 'react';
import styled, {css} from "styled-components";
import {theme} from "../../../../styles/Theme";
import { Menu} from "../menu/Menu";
import {S} from './../HeaderMenu_Styles'


type MainPropsType = {
    menuItems: Array<string>
}
export const MobileMenu: React.FC<MainPropsType> = (props: MainPropsType) => {

    const [menuIsOpen, setMenuIsOpen] = useState(false)
    const onBurgerBtnClick = () =>{setMenuIsOpen(!menuIsOpen)}

    return (
        <S.MobileMenu>

            <S.BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
                <span></span>
            </S.BurgerButton>

            <S.MobileMenuPopup isOpen={menuIsOpen} onClick={()=>{setMenuIsOpen(false)}}>
                <Menu menuItems={props.menuItems}/>
            </S.MobileMenuPopup>

        </S.MobileMenu>
    );
};
