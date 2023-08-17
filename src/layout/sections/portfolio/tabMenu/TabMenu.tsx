import React from 'react';
import styled from "styled-components";
import {S} from './../../../header/headerMenu/HeaderMenu_Styles'


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
                        <S.Link active={currentFilterStatus=== item.status} as={'button'} onClick={()=>{changeFilterStatus(item.status)}}>{item.title.toUpperCase()}</S.Link>
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
  cursor: pointer;
  margin: 44px 0 100px;
  font-weight: 600;

  
  
  &:hover{

  }
`
