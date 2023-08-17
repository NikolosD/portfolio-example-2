import styled, {css} from "styled-components";
import {theme} from "../../../styles/Theme";


// Mobile Styles

const MobileMenu = styled.nav`

;

  ul {
    display: flex;
    justify-content: center;
    gap: 155px;
  }

  display: flex;
  justify-content: flex-end;


  &:before {
    content: '';
    background-color: ${theme.colors.fontGray};
    display: block;
    height: 1px;
    position: absolute;
    bottom: 0px;
    width: 100%;
    left: 50%;
    right: 0;
    transform: translateX(-50%);
    overflow: hidden;

`

const BurgerButton = styled.button<{ isOpen: boolean }>`
  z-index: 99999;
  position: fixed;
  width: 200px;
  height: 200px;
  top: -110px;
  right: -100px;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  span {
    display: block;
    width: 36px;
    height: 2px;
    background-color: ${theme.colors.font};
    position: absolute;
    bottom: 65px;
    left: 50px;
     
    ${props => props.isOpen && css<{ isOpen: boolean }>`
      width: 0;
      
    `}
    &:before {
      content: '';
      display: block;
      width: 36px;
      height: 2px;
      background-color: ${theme.colors.font};
      position: absolute;
      transform: translateY(-10px);

      ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: translateY(0) rotate(-45deg);
        width: 36px;
      `}
    }

    &:after {
      content: '';
      display: block;
      width: 36px;
      height: 2px;
      background-color: ${theme.colors.font};
      position: absolute;
      transform: translateY(10px);


      ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: translateY(0) rotate(45deg);
        width: 36px;
      `}
    }

  }
`

const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  background: rgba(31, 31, 32, 0.77);
  display: none;

  ${props => props.isOpen && css<{ isOpen: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
  `
  }
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 50px;
  }

`

// Desktop Styles


const Desktop = styled.nav`
  ul {
    display: flex;
    justify-content: space-between;
  }

  &:before {
    content: '';
    background-color: ${theme.colors.fontGray};
    display: block;
    height: 1px;
    position: absolute;
    bottom: 0;
    width: 100%;
    right: -50%;
    transform: translateX(-50%);
    overflow: hidden;

`


// Menu Styles


const Link = styled.a<{active?: boolean}>`
  position: relative;
  color: ${theme.colors.fontGray};
  font-family: Roboto, sans-serif;
  font-size: 18px;
  font-weight: bold;

  &:hover {
    color: ${theme.colors.font};

    &::before {
      width: 100%;
    }
  }

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 1px;
    background-color: ${theme.colors.fontGray};
    transition: 0.3s ease-out;
  }


  ${MobileMenu} & {
    
    &:hover{
      color: black;
    }
    color: white;
  }
`

const MenuItem = styled.li`
`


export const S = {
    MobileMenu,
    Link,
    BurgerButton,
    Desktop,
    MobileMenuPopup,
    MenuItem,

}

