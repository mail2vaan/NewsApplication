import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class MainHeader extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-inverse navbar-fixed-top">
                    <div className="container-fluid">
                        <div className="navbar-header col-md-12">
                            <a className="navbar-brand" href="#">
                                News Update
                            </a>
                            <p className="navbar-text navbar-right"><Link to="/login">Logout</Link></p>
                        </div>
                    </div>
                </nav>
            </div>

        );
    }
}

const connectedMainHeader = connect(null, null)(MainHeader);
export { connectedMainHeader as MainHeader };