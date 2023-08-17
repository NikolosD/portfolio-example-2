import React from 'react';
import styled from "styled-components";


type MainPropsType ={
    menuItems: Array<string>
}
export const Main = (props : MainPropsType) => {
    return (
        <StyledMain>
            <ul>
                {props.menuItems.map((item,index)=>{
                    return <li key={index}>
                        <a href={''}>{item}</a>
                    </li>
                })}
            </ul>
        </StyledMain>
    );
};

const StyledMain = styled.nav`
ul{
  display: flex;
  justify-content: center;
  gap: 40px;
}
`
