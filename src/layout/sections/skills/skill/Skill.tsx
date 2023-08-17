import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import styled from "styled-components";
import Rating from "../../../../components/rating/Rating";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {theme} from "../../../../styles/Theme";
import {S} from './../Skills_Styles'


type SkillPropsType = {
    iconId: string
    title: string

    rating: number

}

export const Skill = (props: SkillPropsType) => {

    const splitTitle = props.title.split(' ');
    const firstPart = splitTitle[0];
    const remainingPart = splitTitle.slice(1).join(' ');

    return (
        <S.Skill>
            <FlexWrapper align={'center'} direction={'column'} justify={'space-between'}>
                <Icon iconId={props.iconId} height={'90px'} width={'90px'} viewBox={'0 0 90 90'}/>
                <S.SkillTitle>
                    {firstPart}<br/>
                    {remainingPart}

                </S.SkillTitle>
                <Rating rating={props.rating}></Rating>
            </FlexWrapper>
        </S.Skill>
    );
};



