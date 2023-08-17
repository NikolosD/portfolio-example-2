import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {theme} from "../../../styles/Theme";

const StyledMain = styled.section`
  
  padding: 72px 0 110px;

  ${FlexWrapper} {
    margin-bottom: 50px;
  }

  @media ${theme.media.tablet}{
    padding: 80px 0 60px;
  }
`

const Name = styled.div`
  font-size: 47px;
  font-weight: 400;
`

const Info = styled.p`
  font-size: 18px;
  font-weight: 400;
  //margin-left: -40px;

`

const Photo = styled.img`
  width: 100%;
  height: 387px;
  object-fit: cover;
  margin-top: 40px;
  
  @media ${theme.media.tablet}{
    height:100%
  }
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
`;

const Separator = styled.span`
  writing-mode: vertical-rl;
  text-orientation: mixed;
  margin: 4px 0;
  cursor: pointer;
`;

const Link = styled.a`
  writing-mode: vertical-rl;
  font-size: 16px;
  font-weight: bold;
  transform: rotate(-180deg);
  color: ${theme.colors.fontGray};

  &:hover {
    color: ${theme.colors.font};
  }
  
`

export const S = {
    StyledMain,
    Name,
    Info,
    Photo,
    LinkContainer,
    Separator,
    Link,
}