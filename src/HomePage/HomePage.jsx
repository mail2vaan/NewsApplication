import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { MainHeader } from '../MainHeader/index'
import { MainContent } from '../MainContent/index' 
import { Footer } from '../Footer/index'

import { userActions,  newsListActions} from '../_actions';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = { counter: 0 };
        this.onSubNavClick = this.onSubNavClick.bind(this);
      }
    componentDidMount() {
        this.props.getUsers();
        this.props.getNewsList('TamilNadu');
    }

    handleDeleteUser(id) {
        return (e) => this.props.deleteUser(id);
    }

    onSubNavClick(locale) {
        this.props.getNewsList(locale);
    }

    render() {
        const { newsList=[] } = this.props;
        return (
            <div className="container">
                <MainHeader />
                <MainContent newsList={newsList} onSubNavClick={this.onSubNavClick} />
                <Footer />
                {/*<div className="col-md-6 col-md-offset-3">
                <h1>Hi {user.firstName}!</h1>
                <p>You're logged in with React!!</p>
                <h3>All registered users:</h3>
                {users.loading && <em>Loading users...</em>}
                {users.error && <span className="text-danger">ERROR: {users.error}</span>}
                {users.items &&
                    <ul>
                        {users.items.map((user, index) =>
                            <li key={user.id}>
                                {user.firstName + ' ' + user.lastName}
                                {
                                    user.deleting ? <em> - Deleting...</em>
                                    : user.deleteError ? <span className="text-danger"> - ERROR: {user.deleteError}</span>
                                    : <span> - <a onClick={this.handleDeleteUser(user.id)}>Delete</a></span>
                                }
                            </li>
                        )}
                    </ul>
                }
                <p>
                    <Link to="/login">Logout</Link>
                </p>
            </div> */}
            </div>
            
        );
    }
}

function mapState(state) {
    const { users, authentication, newsList } = state;
    const { user } = authentication;
    return { user, users, newsList };
}

const actionCreators = {
    getNewsList: newsListActions.fetchNewsList,
    getUsers: userActions.getAll,
    deleteUser: userActions.delete
}

const connectedHomePage = connect(mapState, actionCreators)(HomePage);
export { connectedHomePage as HomePage };