import React from 'react';
import styled from "styled-components";
import {font} from "../styles/Common";

export const SectionTitle = styled.h2 `
  text-align: center;
  line-height: normal;
  ${font({family:'Roboto, sans-serif', weight: 800, color: '#070707', Fmax: 34, Fmin: 28})};
`