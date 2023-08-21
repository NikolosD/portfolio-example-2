import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../components/SectionTitle";
import {Button} from "../../components/Button";
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";
import {theme} from "../../styles/Theme";
import {Container} from "../../components/Container";
import {font} from "../../styles/Common";
import {S} from './Footer_Styles'

export const Footer = () => {

    const footerIconData = [
        {
            iconId: 'linkedin',
        },
        {
            iconId: 'instagram',
        },
        {
            iconId: 'surface',
        },
        {
            iconId: 'behanceGroup',
        }
    ]

    return (
        <S.Footer>
            <Container>
                <SectionTitle  id={'contact'}> Contacts</SectionTitle>
                <FlexWrapper direction={'column'} align={'center'}>
                    <S.Title>Want to know more or just chat? <br/>
                        You are welcome!</S.Title>
                    <Button>Send message</Button>
                    <S.SocialList>

                        {footerIconData.map((f, index) => {
                            return <S.SocialItem key={index}>
                                <S.SocialLink href={'#'}>
                                    <Icon iconId={f.iconId} width={'41'} viewBox={'0 0 41 41'} height={'41'}/>
                                </S.SocialLink>
                            </S.SocialItem>
                        })}

                    </S.SocialList>
                    <S.Copyright>Like me on <br/>
                        <span>LinkedIn </span>, <span>Instagram </span>, <span>Behance </span>, <span>Dribble</span></S.Copyright>
                </FlexWrapper>
            </Container>
        </S.Footer>
    );
}
    ;


