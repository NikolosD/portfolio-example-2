import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
// import {Skill} from "./skill/Skill";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {S} from './Skills_Styles'
import {Slider} from "../../../components/slider/Slider";

export const Skills : React.FC = () => {

   const skillData = [
        {
            iconId: 'photoshop',
            title: 'Adobe Photoshop',
            rating : 4,
        },
       {
           iconId: 'illustrator',
           title: 'Adobe Illustrator',
           rating : 3,
       },
       {
           iconId: 'afterEffects',
           title: 'Adobe After Effects',
           rating : 4,
       },
       {
           iconId: 'figma',
           title: 'Figma',
           rating : 3,
       },
    ]

    return (
        <S.Skills  id={'skills'}>
                <Container>
            <SectionTitle>Skills</SectionTitle>
            <S.Title>I work in such programs as</S.Title>
            <FlexWrapper  justify={'center'} gap={'90px'} >

                <Slider/>
                {/*{skillData.map((s,index)=>{*/}
                {/*    return <Skill iconId={s.iconId} title={s.title} rating={s.rating}/>*/}
                {/*})}*/}
            </FlexWrapper>
                </Container>
            </S.Skills>
    );
};

