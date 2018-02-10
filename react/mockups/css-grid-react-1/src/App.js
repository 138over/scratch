import React, { Component } from 'react'
import styled, { injectGlobal } from 'styled-components'

class App extends Component {
    render() {
        return (
            <Container>
                <Prose>
                    <h1>Introduction</h1>
                    <p>
                        Are creatures of the cosmos intelligent beings bits of 
                        moving fluff a very small stage in a vast cosmic arena 
                        Tunguska event, rich in heavy atoms concept of the 
                        number one the only home we have ever known astonishment 
                        another world great turbulent clouds white dwarf.
                    </p>
                </Prose>
                <Sidebar>
                    <Box>
                        <BoxHeader>Actions</BoxHeader>
                        <BoxMenu>
                            <li><a href="">Do a thing</a></li>
                            <li><a href="">Register your bad self</a></li>
                            <li><a href="">Hold the phone</a></li>
                        </BoxMenu>
                    </Box>
                    <Box>
                        <BoxHeader>Related Stuff</BoxHeader>
                        <BoxMenu>
                            <li><a href="">Just a link</a></li>
                            <li><a href="">Another link</a></li>
                        </BoxMenu>
                    </Box>
                </Sidebar>
                <Prose>
                    <h2>Additional Information</h2>
                    <p>
                        Laws of physics Euclid courage of our questions? 
                        Permanence of the stars something incredible is 
                        waiting to be known two ghostly white figures in 
                        coveralls and helmets are soflty dancing tendrils of 
                        gossamer clouds hydrogen atoms laws of physics a very 
                        small stage in a vast cosmic arena extraordinary 
                        claims require extraordinary evidence encyclopaedia 
                        galactica brain is the seed of intelligence courage 
                        of our questions. Venture dream of the minds eye 
                        ship of the imagination? Hydrogen atoms circumnavigated.
                        A very small stage in a vast cosmic arena Euclid star 
                        stuff harvesting star light vastness is bearable only 
                        through love Drake Equation radio telescope!
                    </p>
                    <p>
                        Not a sunrise but a galaxyrise something incredible 
                        is waiting to be known circumnavigated, radio telescope 
                        great turbulent clouds how far away intelligent beings, 
                        dispassionate extraterrestrial observer the ash of 
                        stellar alchemy paroxysm of global death venture? 
                        Hundreds of thousands! Tunguska event rings of Uranus 
                        birth. Descended from astronomers not a sunrise but a 
                        galaxyrise stirred by starlight, gathered by gravity 
                        descended from astronomers culture radio telescope 
                        billions upon billions. Rich in mystery paroxysm of 
                        global death quasar and billions upon billions upon 
                        billions upon billions upon billions upon billions upon 
                        billions!   
                    </p>
                </Prose>
            </Container>
        )
    }
}

injectGlobal`
    @font-face {
        font-family: 'Verdana, Geneva, sans-serif'
    }
    
    body {
        margin: 0;
    }
`

const Prose = styled.div`
    margin-top: 1rem;
`

const Box = styled.div`
    background: #dbe5ea;
    border-radius: 0.5em;
    overflow: hidden;
`

const BoxHeader = styled.h2`
    background: #0F1C3F;
    color: #fff;
    font-size: 1.25em;
    line-height: 1;
    padding: 1rem ;
    margin: 0;
`

const BoxMenu = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    
    > * + * {
        border-top: 2px solid transparent;
    }
    
    a {
        background-color: rgba(255,255,255,0.5);
        display: block;
        line-height: 1;
        padding: 1rem;
        text-decoration: none;
    }
`

const Container = styled.div`
    display: grid; 
    grid-gap: 1.5em; 
    margin: 1.5em auto; 
    max-width: 64em; 
    padding: 0 1.5em;
    
    @media (min-width: 50em) {
        grid-template-columns: 2fr 1fr;
    }

`
const Sidebar = styled.div`
    display: inherit;
    grid-gap: inherit;
    margin: 0;
    
    @media (min-width: 34em) and (max-width: 49.9375em) {
        grid-template-columns: 1fr 1fr;
    }
    
    @media (min-width: 50em) {
        grid-auto-rows: min-content; 
        grid-row: span 2; 
    }    
`

export default App

