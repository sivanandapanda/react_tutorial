import React, { Fragment, Component } from "react";
import { connect } from 'react-redux'
import { fetchStream, deleteStream } from '../../actions'
import Modal from "../Modal";
import history from '../../history'
import { Link } from "react-router-dom";

export class StreamDelete extends Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id)
    }

    renderActions() {
        const {id} = this.props.stream;
        return (
            <Fragment>
                <button className="ui primary button" onClick={() => this.props.deleteStream(id)}>Delete</button>
                <Link className="ui button" to='/'>Cancel</Link>
            </Fragment>
      );
    }

    renderContent() {
        if(this.props.stream) {
            return `Are you sure you want to delete this stream with title '${this.props.stream.title}'?`
        } else {
            return 'Are you sure you want to delete this stream?'
        }
    }

    render() {
        return (
              <Modal
                title="Delete Stream"
                content={this.renderContent()}
                actions={this.renderActions()}
                onDismiss={() => history.push('/')}
              />
          );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {stream: state.streams[ownProps.match.params.id]}
}

export default connect(mapStateToProps, {fetchStream, deleteStream})(StreamDelete)
