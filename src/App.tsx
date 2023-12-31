import './App.css';
import styled from 'styled-components';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {AboutMe} from "./layout/sections/aboutme/AboutMe";
import {Skills} from "./layout/sections/skills/Skills";
import {Portfolio} from "./layout/sections/portfolio/Portfolio";
import {Footer} from "./layout/footer/Footer";



function App() {
    return (
        <div className="App">

            <Header/>
            <Main/>
            <AboutMe/>
            <Skills/>
            <Portfolio/>
            <Footer/>
        </div>
    );
}

export default App;

