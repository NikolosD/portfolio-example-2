import styled from "styled-components";
import {theme} from "../../../styles/Theme";

const Skills = styled.section`
padding: 91px 0 110px;

  @media ${theme.media.tablet}{
    padding: 80px 0 60px;
  }
`

const Title = styled.p`
  text-align: center;
        margin: 70px 0 83px;
`


const Skill = styled.div`
  width: 166px;
`

const SkillTitle = styled.figcaption`
  margin: 24px 0 40px;
  color: ${theme.colors.fontGray};
  text-align: center;
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-weight: 800;

`


export const S = {

    Skills,
    Title,
    Skill,
    SkillTitle,

}