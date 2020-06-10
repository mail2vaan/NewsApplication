import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class SubNavRight extends React.Component {
    
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

const connectedSubNavRight = connect(null, null)(SubNavRight);
export { connectedSubNavRight as SubNavRight };