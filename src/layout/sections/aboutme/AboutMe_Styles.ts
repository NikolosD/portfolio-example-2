import styled from "styled-components";
import {theme} from "../../../styles/Theme";

const AboutMe = styled.section`
  padding: 120px 0 107px;
  
  @media ${theme.media.tablet}{
    padding: 80px 15px 60px;
  }
`


const Title = styled.p`
  margin-top: 18px;
  color: ${theme.colors.font};
  text-align: center;
  font-family: Roboto, sans-serif;
  font-size: 18px;
  font-weight: 600;

  p {
    margin-bottom: 44px;
    display: block;
  }
  
  p:last-of-type{
    margin-bottom: 22px;
  }
  
`

export const S = {
    AboutMe,
    Title,
}

