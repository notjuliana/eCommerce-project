import React, { Component } from 'react'
import background from '../img/background.jpg'
import styled from 'styled-components'

export default class Default extends Component {
    render() {
        return (
            <Page>
            <div className='background'>
                <h3 className='title'>PAGE NOT FOUND</h3>
            </div>
            </Page>
            
        )
    }
}

const Page = styled.div `

    .background {
        background-image: url(${background});
        background-size: cover;
        opacity: 0.6;
        height: 100vh;
        width: 100%;
        margin-top: 0px;
        margin-bottom: 0px;
        position: relative;

    .title {
        text-align: center;
        padding: 150px;
        color: white;
        font-size: 3em;
    }    
     }                  
`
