import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import i18n from '../config/translation'

const Home = () => {
    return (
        <div>
            <h3>{i18n.t('home')}</h3>
            <StyledLign>
                <Link to="/login">Login</Link>
            </StyledLign>
            <StyledLign>
                <Link to="/deminor">Jouer</Link>
            </StyledLign>
            <StyledLign>
                <Link to="/score">Score</Link>
            </StyledLign>
        </div>
    )
}

const StyledLign = styled.div`
    display: flex;
    margin-left: 25%;
    margin-right: 5%;
    background-color: white;
    border: solid #32a1ce;
    align-items: center;
    justify-content: center;
`


export default Home