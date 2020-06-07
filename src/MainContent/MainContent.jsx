import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import baby from '../images/b1.jpg'

import { SubNav, SubContentNav, SubContent } from './index';

import { userActions } from '../_actions';

class MainContent extends React.Component {
    
    render() {
        const { newsList } = this.props;
        
        return (
            <div className="col-md-12">
                <div className="col-md-2 sidebar">
                    <SubNav />
                </div>
                <div className="col-md-10 content">
                    <SubContentNav />
                    <div className="row">
                       <SubContent newsList={newsList} />     
                    </div>
                </div>
            </div>

        );
    }
}

const connectedMainContent = connect(null, null)(MainContent);
export { connectedMainContent as MainContent };