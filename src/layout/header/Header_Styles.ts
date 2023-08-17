import styled from "styled-components";
import {theme} from "../../styles/Theme";
import {Container} from "../../components/Container";

const Header = styled.header`
  background-color: #ffffff;
  position: sticky;
  top: 0;
  padding: 28px 0;
  z-index: 99;
  
  @media ${theme.media.tablet}{
    padding: 24px 0;
  }
  

  
  }
  
`;

export const S ={
    Header,
}