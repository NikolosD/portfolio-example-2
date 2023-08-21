import React from 'react';
import styled from "styled-components";
import {S} from './../../../header/headerMenu/HeaderMenu_Styles'
import {theme} from "../../../../styles/Theme";


export type TabStatusType = 'all' | 'store' | 'landing'

type TabMenuPropsType = {
    tabsItems: Array<{status: TabStatusType,title: string}>
    changeFilterStatus: (value: TabStatusType) => void
    currentFilterStatus: string
}

export const TabMenu: React.FC<TabMenuPropsType> = ({ tabsItems, changeFilterStatus, currentFilterStatus }) =>{
    return (
        <StyledTabMenu>
            <ul>

                {tabsItems.map((item, index) => {
                    return <ListItem key={index}>
                        <Link active={currentFilterStatus=== item.status} as={'button'} onClick={()=>{changeFilterStatus(item.status)}}>{item.title.toUpperCase()}</Link>
                    </ListItem>
                })}
            </ul>
        </StyledTabMenu>
    );
};

const StyledTabMenu = styled.nav`

  ul {
    display: flex;
    //flex-direction: column;
    justify-content: space-between;
    max-width: 352px;
    width: 100%;
    margin: -10px auto 40px;
  }
`


const ListItem = styled.li`


`

const Link = styled.a<{active?: boolean}>`
  position: relative;
  color: ${theme.colors.fontGray};
  font-family: Roboto, sans-serif;
  font-size: 18px;
  cursor: pointer;
  margin: 44px 0 100px;
  font-weight: 600;

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
`
