import React, { Component } from 'react'
import Context from '../context/LanguageContext'

export class LanguageSelector extends Component {
    static contextType = Context

    render() {
        return (
            <div>
                  Select a language: 
                  <i className='flag us' onClick={() => this.context.onLanguageChange('english')}/>  
                  <i className='flag nl' onClick={() => this.context.onLanguageChange('dutch')}/>  
            </div>
        )
    }
}

export default LanguageSelector
