import React from 'react';
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {S} from  './../Portfolio_Styles'

type PortfolioSoloPropsType = {
    imageSrc: string
    alt: string
    link: string
}

export const PortfolioSolo: React.FC<PortfolioSoloPropsType>= ({imageSrc, link, alt}: PortfolioSoloPropsType) => {
    return (
        <S.PortfolioSolo>
            <FlexWrapper direction={'column'} align={'center'}>
                <S.StyledImg src={imageSrc} alt={alt}/>
                <S.Link>{link}</S.Link>
            </FlexWrapper>
        </S.PortfolioSolo>
    );
};

