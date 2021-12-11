import React from "react";
import ReactDom from "react-dom";
import SeasonDisplay from './SeasonDisplay';
import Loader from './Loader';

class App extends React.Component {
    state = {lat: null, errorMesasge: ''};

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat: position.coords.latitude}),
            error => this.setState({errorMesasge: error.message})
        );
    }

    componentDidUpdate() {
        console.log("My component updared - rerendered");
    }

    renderContent() {
        if(this.state.errorMesasge && !this.state.lat) {
            return <div> Error: {this.state.errorMesasge}</div>;
        } 
        
        if(!this.state.errorMesasge && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat}/>;
        }
        
        return <Loader message="Please accept location request"/>;
    }

    render() {
        return (
            <div className="border red">
                {this.renderContent()}
            </div>
        );
    }
}


ReactDom.render(<App/>, document.querySelector('#root'));