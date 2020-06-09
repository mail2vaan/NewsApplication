import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class SubContentNav extends React.Component {
    
    render() {
        const { onSubNavClick } = this.props;
        return (
            <ul class="nav nav-tabs nav-justified">
                        <li role="presentation" class="active"><a onClick={() => onSubNavClick('TamilNadu')}>TAMILNADU</a></li>
                        <li role="presentation"><a onClick={() => onSubNavClick('India')}>INDIA</a></li>
                        <li role="presentation"><a onClick={() => onSubNavClick('World')}>WORLD</a></li>
                        <li role="presentation"><a onClick={() =>onSubNavClick('Corona')}>CORONA</a></li>
                    </ul>
        );
    }
}

const connectedSubContentNav = connect(null, null)(SubContentNav);
export { connectedSubContentNav as SubContentNav };