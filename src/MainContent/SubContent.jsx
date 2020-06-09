import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import baby from '../images/b1.jpg'

import { userActions } from '../_actions';
import { SubContentNav } from './index'

class SubContent extends React.Component {

    render() {
        const { newsList } = this.props;
        if (newsList.length === 0) {
            return null;
        }
        if (newsList.newsList.length === 0) {
            return null
        }
        return (
            <div>
                {newsList.newsList[0].News.map((news) => {
                    return (<div><div className="col-md-12">
                        <p>{newsList.newsList[0].local}</p>
                        <div className="col-md-8">
                            <h1><a href={news.link} target="_blank">{news.source}</a></h1>
                            <h5 className="title">{news.title}</h5>
                            <div>
                                <p>{news.description}</p>
                            </div>
                        </div>
                        <div className="col-md-3 contentImage">
                            <img src={news.imageUrl} />
                        </div>
                    </div>
                        <div className="col-md-12">
                            <hr />
                        </div>
                    </div>)
                })}

            </div>

        );
    }
}

const connectedSubContent = connect(null, null)(SubContent);
export { connectedSubContent as SubContent };