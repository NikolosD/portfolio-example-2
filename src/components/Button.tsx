import styled from "styled-components";
import {theme} from "../styles/Theme";

export const Button = styled.button `
  color: #FFF;
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-family: Roboto, sans-serif;
  font-weight: 800;
  border-radius: 20px;
  background-color: black;
  cursor: pointer;
  padding: 13px 30px 13px 30px ;
  border: none;
  width: 180px;

  &:hover {
    transition: transform 0.3s ease-out;
    transform: scale(1.1);
  }

`