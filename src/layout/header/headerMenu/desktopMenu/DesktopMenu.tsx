import React from 'react';
import styled from "styled-components";
import {theme} from "../../../../styles/Theme";
import {Menu} from "../menu/Menu";
import {S} from './../HeaderMenu_Styles'



type MainPropsType = {
    menuItems: Array<string>
}
export const DesktopMenu : React.FC<MainPropsType> = (props: MainPropsType) => {
    return (
        <S.Desktop>
            <Menu menuItems={props.menuItems}  />
        </S.Desktop>
    );
};


