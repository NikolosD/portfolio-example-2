import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {S} from './AboutMe_Styles'
import {Container} from "../../../components/Container";



export const AboutMe : React.FC = () => {


    const paragraphs = [
        "Hi, I'm Denis – UX/UI designer from Minsk. \nI'm interested in design and everything connected with it.",
        "I'm studying at courses \"Web and mobile design \ninterfaces\" in IT-Academy.",
        "Ready to implement excellent projects \nwith wonderful people.",
    ];

    return (
        <S.AboutMe>
            <Container>
            <FlexWrapper align={'center'} direction={'column'}>
                <SectionTitle>About me</SectionTitle>
                <S.Title>
                    {paragraphs.map((paragraphs,index)=>(
                        <p key={index}>{paragraphs}</p>
                    ))}
                </S.Title>
            </FlexWrapper>
            </Container>
        </S.AboutMe>
    );
};

