import React, {useState} from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {PortfolioSolo} from "./portfolioSolo/PortfolioSolo";
import woman from '../../../assets/images/woman.jpeg'
import reebok from '../../../assets/images/reebok.png'
import camera from '../../../assets/images/camera.png'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {S} from './Portfolio_Styles'
import {TabMenu, TabStatusType} from "./tabMenu/TabMenu";
import {AnimatePresence,motion} from "framer-motion";


export const tabsItems: Array<{ status: TabStatusType, title: string }> = [
    {
        title: 'All',
        status: 'all',
    },
    {
        title: 'landing Page',
        status: 'landing',
    },
    {
        title: 'Store',
        status: 'store',
    },
]


const portfolioData = [
    {
        imageSrc: woman,
        alt:'womanImg',
        link:'Online fashion store - Homepage',
        type: 'store',
    },
    {
        imageSrc: reebok,
        alt:'reebokImg',
        link:'Reebok Store - Concept',
        type: 'store',
    },
    {
        imageSrc: camera,
        alt:'cameraImg',
        link:'Braun Landing Page - Concept',
        type: 'landing',
    },
]




export const Portfolio: React.FC = () => {

    const [currentFilterStatus, setCurrentFilterStatus] = useState('all')
    let filteredPortfolio = portfolioData

    if (currentFilterStatus === 'store') {
        filteredPortfolio = portfolioData.filter(portfolio => portfolio.type === 'store')
    }

    if (currentFilterStatus === 'landing') {
        filteredPortfolio = portfolioData.filter(portfolio => portfolio.type === 'landing')
    }



    function changeFilterStatus(value: TabStatusType) {
        setCurrentFilterStatus(value)
    }



    return (
        <S.Portfolio>
            <Container>
            <SectionTitle>Portfolio</SectionTitle>
                <TabMenu tabsItems={tabsItems} changeFilterStatus={changeFilterStatus}
                         currentFilterStatus={currentFilterStatus}/>
            <FlexWrapper justify={'center'} wrap={'wrap'} direction={'row'} align={'center'}>
                <AnimatePresence>
                {filteredPortfolio.map((p,index)=>(
                    <motion.div style={{width:'400px',flexGrow:1}}
                                layout
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                key={index}
                    >
                  <PortfolioSolo imageSrc={p.imageSrc} alt={p.alt} link={p.link}/>
                    </motion.div>
                ))}
                </AnimatePresence>
            </FlexWrapper>
            </Container>
        </S.Portfolio>
    );
};



