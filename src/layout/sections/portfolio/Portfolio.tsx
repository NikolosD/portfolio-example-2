import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {PortfolioSolo} from "./portfolioSolo/PortfolioSolo";
import woman from '../../../assets/images/woman.jpeg'
import reebok from '../../../assets/images/reebok.png'
import camera from '../../../assets/images/camera.png'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {S} from './Portfolio_Styles'


export const Portfolio: React.FC = () => {

    const portfolioData = [
        {
            imageSrc: woman,
            alt:'womanImg',
            link:'Online fashion store - Homepage'
        },
        {
            imageSrc: reebok,
            alt:'reebokImg',
            link:'Reebok Store - Concept'
        },
        {
            imageSrc: camera,
            alt:'cameraImg',
            link:'Braun Landing Page - Concept'
        },
    ]

    return (
        <S.Portfolio>
            <Container>
            <SectionTitle>Portfolio</SectionTitle>
            <FlexWrapper justify={'center'} wrap={'wrap'} direction={'column'}>
                {portfolioData.map((p,index)=>{
                    return <PortfolioSolo imageSrc={p.imageSrc} alt={p.alt} link={p.link}/>
                })}

            </FlexWrapper>
            </Container>
        </S.Portfolio>
    );
};



