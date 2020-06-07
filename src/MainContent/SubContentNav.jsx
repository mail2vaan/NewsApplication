import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class SubContentNav extends React.Component {
    
    render() {
        return (
            <ul class="nav nav-tabs nav-justified">
                        <li role="presentation" class="active"><a href="#">TAMILNADU</a></li>
                        <li role="presentation"><a href="#">INDIA</a></li>
                        <li role="presentation"><a href="#">WORLD</a></li>
                        <li role="presentation"><a href="#">CORONA</a></li>
                    </ul>
        );
    }
}

const connectedSubContentNav = connect(null, null)(SubContentNav);
export { connectedSubContentNav as SubContentNav };