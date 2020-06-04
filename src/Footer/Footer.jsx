import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';

class Footer extends React.Component {
    render() {
        return (
            <div className="col-md-12">
                <h4>Footer Text</h4>
            </div>

        );
    }
}

const connectedFooter = connect(null, null)(Footer);
export { connectedFooter as Footer };