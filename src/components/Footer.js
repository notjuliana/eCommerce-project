import React, { Component } from 'react'


export default class Footer extends Component {
    render() {
            
        return (
           <div style={{
               
                        textAlign: 'center',
                        padding: '20px',
                        background: '#2D2D2D',
                        bottom: '0',
                        marginTop: '50px',
                        width: '100%'    
               }}>
               <h4 style={{color: '#fff'}}>
                   Copyright © 2020 All rights reserved.
               </h4>
               <h5 style={{color: '#fff'}}>
                   This is a project from Barcelona Code School Bootcamp.
               </h5>
           </div>
        )
    }
}
