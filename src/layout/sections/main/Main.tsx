import React from 'react';
import photo from '../../../assets/images/person.png'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {S} from './Main_Styles'
import Typewriter from 'typewriter-effect';


export const Main: React.FC = () => {

    const typewriterOptions = {
        strings: ['UX | UI designer' + `<br/>` + '24 years old, Minsk'],
        autoStart: true,
        pauseFor: 1000000, // Pause for 5 seconds after typing
    };

    return (
        <S.StyledMain id={'home'}>
            <Container>
                <FlexWrapper justify={'space-between'} align={'flex-end'}>
                    <S.Name> Denis <br/>Novik </S.Name>


                    <S.Info>
                        <Typewriter options={typewriterOptions}/>
                    </S.Info>
                    <S.LinkContainer>
                        <S.Link href="#">RU</S.Link>
                        <S.Separator>|</S.Separator>
                        <S.Link href="#">ENG</S.Link>
                    </S.LinkContainer>
                </FlexWrapper>
                <S.Photo src={photo} alt=""/>
            </Container>
        </S.StyledMain>
    );
};

