import React, { Component } from 'react'

export class SearchBar extends Component {

    state = { term: '' }

    onFormSubmit = (event) => {
    //onFormSubmit(event) {    // to use this in line 16 use as onSubmit={e => this.onFormSubmit(e)}
        event.preventDefault();//prevent form to be submitted automatically
        this.props.onSubmit(this.state.term);
    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={(e) => this.setState({ term: e.target.value })}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;