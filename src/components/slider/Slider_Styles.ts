import styled from "styled-components";
import {theme} from "../../styles/Theme";

const Slider = styled.div`
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Slide = styled.div`

  text-align: center;
`





const Pagination = styled.div`
  span {
    display: inline-block;
    width: 7px;
    height: 7px;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 20px;

    & + span {
      margin-left: 5px;
    }

    &.active {
      background-color: ${theme.colors.font};
      width: 20px;
    }

  }
`

export const S = {
    Slider,
    Slide,
    Pagination,

}