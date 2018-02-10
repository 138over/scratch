import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import styled, { injectGlobal } from 'styled-components'

class App extends Component {
    render() {
        return (
            <Wrapper>
                <Nav>
                    <h1>Demo</h1>
                    <nav>
                        <NavItems>
                            <Link to="/">Home</Link>
                            <Link to="/project">Projects</Link>
                            <Link to="/workspace">Workspaces</Link>

                        </NavItems>
                    </nav>
                </Nav>
                <Route exact path="/" component={Home}/>
                <Route path="/project" component={Project}/>
                <Route path="/workspace" component={Workspace}/>
            </Wrapper>
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

class Home extends Component {
    render() {
        return (
            <Prose>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis enim
                    sit amet metus laoreet, ut condimentum metus dapibus. Phasellus sed gravida
                    augue, eu finibus felis. Integer augue libero, aliquam lacinia nisl sed,
                    sagittis fringilla nisl. Phasellus sapien mi, porttitor in metus sed, iaculis
                    dignissim mauris.
                </p>

                <ProseSplash>
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/62127/rfd-bots-r2.png" alt=""/>
                </ProseSplash>

                <p>Vivamus fringilla orci dui, vitae aliquet tortor hendrerit eget. Nam nec dui
                    accumsan, posuere ligula sed, dictum velit. Praesent in lorem ac libero lacinia
                    luctus. Duis sed ante sit amet massa tempus dignissim. Mauris vitae finibus risus.
                    In nec diam velit. Aenean pulvinar urna ut ligula elementum tincidunt. Cum sociis
                    natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut libero
                    tortor, lacinia eu pharetra at, bibendum vitae turpis. Aenean at bibendum dui.
                    Curabitur sit amet tempus nisi, at molestie ligula. Aliquam tristique ligula a
                    hendrerit luctus. Curabitur tristique quis erat et egestas.</p>

                <p>Vivamus porta purus in libero tempor gravida. Nullam elementum nunc sit amet
                    tortor blandit, id gravida diam convallis. Nam in erat interdum, pharetra
                    turpis eu, pellentesque arcu. Cras lobortis placerat ligula, ac venenatis libero
                    blandit a. Pellentesque vehicula necaugue non ullamcorper. Pellentesque viverra
                    at mauris at egestas. Sed at tortor sed lacus aliquet gravida. Sed ullamcorper
                    imperdiet ipsum, scelerisque ultrices magna dapibus a. Nam blandit vestibulum
                    gravida. Phasellus lorem lorem, convallis ut massa nec, interdum varius elit.
                    Sed at metus diam. Aliquam erat volutpat. Morbi ante tortor, aliquam sit amet
                    eleifend sed, aliquam eu ex. Pellentesque ipsum turpis, consectetur quis ornare
                    vel, aliquet ac sem. Quisque molestie, urna et malesuada dapibus, urna ipsum
                    tincidunt enim, mollis dapibus velit lacus sed metus. Vestibulum ante ipsum
                    primis in faucibus orci luctus et ultrices posuere cubilia.</p>
            </Prose>
        )
    }
}

class Project extends Component {
    render() {
        return (
            <ProjectContent>
                <h2>Projects</h2>
            </ProjectContent>
        )
    }
}

class Workspace extends Component {
    render() {
        return (
            <WorkspaceContent>
                <h2>Workspaces</h2>
            </WorkspaceContent>
        )
    }
}

const ProjectContent = styled.div`
    display: flex;
    flex-direction: column;
    padding: 5px;
    height: 100vh;
`

const WorkspaceContent = styled.div`
    display: flex;
    flex-direction: column;
    padding: 5px;
    height: 100vh;
`

const Wrapper = styled.div`
    display: grid;
    
    @media (min-width: 40em) {
        grid-template-columns: 12em 1fr;
    }
    
`

const Nav = styled.div`
    align-items: center;
    display: flex;
    background-color: #0F1C3F;
    color: #fff;
    padding: 1em;
    
    @media (min-width: 40em) {
        align-items: start;
        flex-direction: column;
    }
    
    > h1 {
      margin-right: auto;
    }
`

const NavItems = styled.div`
    display: grid;
    grid-auto-flow: column;
    grid-gap: 1em;
    list-style: none;
    padding-left: 0;
      
    a {
        color: #fff;
    }
    
    @media (min-width: 40em) {
        grid-auto-flow: row;
        margin-top: 1em;
    }
`

const Prose = styled.div`
    display: grid;
    grid-template-columns: 
        [full-start] minmax(1em, 1fr) 
        [main-start] minmax(0, 40em) 
        [main-end] minmax(1em, 1fr) 
        [full-end];
    
    > * {
        grid-column: main;
    }
`

const ProseSplash = styled.div`
    grid-column: full;
    text-align: center;
    background-color: #aacae1;
    background-image: 
        linear-gradient(182deg, transparent 74%, #016b59 74.1%), 
        linear-gradient(178deg, transparent 68%, #018e77 68.1%), 
        linear-gradient(181deg, transparent 58%, #01b295 58.1%), 
        linear-gradient(179deg, transparent 50%, #2bbfa7 50.1%);
    
    > img {
        max-width: 100%;
    }
`

export default App

