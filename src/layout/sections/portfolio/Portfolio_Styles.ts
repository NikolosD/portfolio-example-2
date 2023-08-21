import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {SectionTitle} from "../../../components/SectionTitle";

const Portfolio = styled.section`
  
  padding: 110px 0 100px;
  
  @media ${theme.media.tablet}{
    padding: 90px 0 80px;
  }
  
  ${SectionTitle}{
      margin-bottom: 47px;
    }
`

const PortfolioSolo = styled.div`

`

const StyledImg = styled.img`
  cursor: pointer;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease 0s;
  
  &:hover{
    transform: scale(1.05);
  }
`

const Link = styled.a`
  cursor: pointer;
  margin: 44px 0 100px;
  font-weight: 600;
  text-decoration: underline;
  
  transition: font-size 0.3s ease;
  
  &:hover{
    text-decoration: none;
    font-size: 17px;
  }
`

export const S = {
    Portfolio,
    PortfolioSolo,
    StyledImg,
    Link,
}