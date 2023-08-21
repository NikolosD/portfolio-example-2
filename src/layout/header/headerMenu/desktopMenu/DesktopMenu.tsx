import React from 'react';
import styled from "styled-components";
import {theme} from "../../../../styles/Theme";
import {Menu} from "../menu/Menu";
import {S} from './../HeaderMenu_Styles'




export const DesktopMenu : React.FC  = () => {
    return (
        <S.Desktop>
            <Menu/>
        </S.Desktop>
    );
};


