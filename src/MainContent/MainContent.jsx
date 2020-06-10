import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import baby from '../images/b1.jpg'

import { SubNavLeft,SubNavRight,  SubContentNav, SubContent } from './index';

import { userActions } from '../_actions';

class MainContent extends React.Component {
    
    render() {
        const { newsList, onSubNavClick } = this.props;
        
        return (
            <div className="col-md-12">
                <div className="col-md-2 sidebar">
                    <SubNavLeft />
                </div>
                <div className="col-md-8 content">
                    <SubContentNav onSubNavClick={onSubNavClick} />
                    <div className="row">
                       <SubContent newsList={newsList} />     
                    </div>
                </div>
                <div className="col-md-2 sidebar sidebarRight">
                    <SubNavRight />
                </div>
            </div>

        );
    }
}

const connectedMainContent = connect(null, null)(MainContent);
export { connectedMainContent as MainContent };