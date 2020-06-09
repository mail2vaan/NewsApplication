import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class SubContentNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = { activeTabClassName: "tab1" };
        this.onSubNavClick = this.onSubNavClick.bind(this);
      }
      onSubNavClick(locale, activeTab) {
        this.setState({activeTabClassName: activeTab});
        this.props.onSubNavClick(locale);
      }
    render() {
        return (
            <ul class="nav nav-tabs nav-justified">
                        <li role="presentation" className={(this.state.activeTabClassName === "tab1") ? "active" : ""}><a onClick={() => this.onSubNavClick('TamilNadu', "tab1")}>TAMILNADU</a></li>
                        <li role="presentation" className={(this.state.activeTabClassName === "tab2") ? "active" : ""}><a onClick={() => this.onSubNavClick('India', "tab2")}>INDIA</a></li>
                        <li role="presentation" className={(this.state.activeTabClassName === "tab3") ? "active" : ""}><a onClick={() => this.onSubNavClick('World', "tab3")}>WORLD</a></li>
                        <li role="presentation" className={(this.state.activeTabClassName === "tab4") ? "active" : ""}><a onClick={() =>this.onSubNavClick('Corona', "tab4")}>CORONA</a></li>
                    </ul>
        );
    }
}

const connectedSubContentNav = connect(null, null)(SubContentNav);
export { connectedSubContentNav as SubContentNav };