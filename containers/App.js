import React, {Component}from 'react'
import {connect} from 'react-redux'

import Header from '../components/Header'

class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Header/>
                {this.props.children && React.cloneElement(this.props.children, {
                    key: this.props.pathname
                })}
            </div>
        )
    }
}

let mapStateToProps = function (state) {
    return {
        pathname: state.routing.locationBeforeTransitions.pathname
    }
};

export default connect(mapStateToProps)(App)

