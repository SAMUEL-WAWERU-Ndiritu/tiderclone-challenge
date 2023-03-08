import React from 'react'
import ReactDom from 'react-dom'
import App from './App'
import './index.css'


function Main(){
    return(

        <div className='container'>
            <div className='row'>
                <div className='col-sm-8 col-md-9 m-auto' >
                        <div className="main">
                          <App/>
                        </div>
                </div>
            </div>
        </div>
        
    
    )
}


ReactDom.render(<Main/>,document.getElementById("root"))