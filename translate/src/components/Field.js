import React, { Component } from 'react'
import Context from '../context/LanguageContext';

export class Field extends Component {
    static contextType = Context;

    render() {
        const text = this.context.language === 'english' ? 'Name' : 'Naam'

        return (
            <div className='ui field'>
                <label>{text}</label>
                <input />
            </div>
        )
    }
}

export default Field
