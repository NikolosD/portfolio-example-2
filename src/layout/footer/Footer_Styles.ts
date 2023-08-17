import styled from "styled-components";
import {theme} from "../../styles/Theme";
import {font} from "../../styles/Common";
import exp from "constants";

const Footer = styled.footer`
  padding-top: 114px;
  padding-bottom: 123px;

  @media ${theme.media.tablet} {
    padding: 80px 0 90px;
  }

`

const Title = styled.p`
  margin: 20px 0 30px;

  text-align: center;
  line-height: normal;
  ${font({family: 'Roboto-medium, sans-serif', weight: 400, Fmax: 18, Fmin: 14, color: `${theme.colors.font}`})}
`

const SocialList = styled.ul`
  display: flex;
  gap: 60px;

  @media ${theme.media.tablet} {
    gap: 45px;
  }

  @media ${theme.media.mobile} {
    gap: 30px;
  }
`

const SocialItem = styled.li`
  margin: 86px 0 45px;

  &:hover {
    transform: scale(1.1) translateY(-10px);
    opacity: 0.8;
    transition: transform 0.3s ease-in, opacity 0.3s ease-in;
  }
`

const SocialLink = styled.a`
  cursor: pointer;



`

const Copyright = styled.small`
  color: ${theme.colors.fontGray};
  text-align: center;
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-weight: 400;


  span {
    position: relative;
    display: inline-block;
    cursor: pointer;
  }

  span::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 1px;
    background-color: ${theme.colors.fontGray};
    transition: width 0.3s ease-out;
  }

  span:hover::before {
    width: 100%;
  }


`

export const S = {
    Footer,
    Title,
    SocialList,
    SocialItem,
    SocialLink,
    Copyright,
}