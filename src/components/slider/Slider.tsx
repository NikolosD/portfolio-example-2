import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {S} from './Slider_Styles'
import {mapPartialCoords} from "react-alice-carousel/lib/utils";
import {Skill} from "../../layout/sections/skills/skill/Skill";
import {FlexWrapper} from "../FlexWrapper";
import './../../styles/slider.css'
import {theme} from "../../styles/Theme";
import {Container} from "../Container";

const responsive = {
    0: { items: 1 },
    768: { items: 2 },
    1100: { items: 4 },
};

type SlidePropsType = {
    iconId: string
    title: string
    rating: number
}


const sliderData = [
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

const Slide = (props: SlidePropsType) => {
    return (
        <S.Slide>
            <FlexWrapper justify={'center'}>
            <Skill
                iconId={props.iconId}
                title={props.title}
                rating={props.rating}
            />
            </FlexWrapper>
        </S.Slide>
    )
}

const items = sliderData.map((s, index) => (
    <Slide key={index} iconId={s.iconId} title={s.title} rating = {s.rating}/>
));

export const Slider = () => (
    <S.Slider>
        <AliceCarousel
            mouseTracking
            items={items}
            responsive={responsive}
        />
    </S.Slider>

);
