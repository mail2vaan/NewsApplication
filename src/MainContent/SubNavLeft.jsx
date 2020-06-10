import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class SubNavLeft extends React.Component {
    
    render() {
        return (
            <ul className="nav nav-pills nav-stacked">
            <li>jedan</li>
            <li>dva</li>
            <li>tri</li>
            <li>cetriri</li>
            <li>pet</li>
        </ul>
        );
    }
}

const connectedSubNavLeft = connect(null, null)(SubNavLeft);
export { connectedSubNavLeft as SubNavLeft };