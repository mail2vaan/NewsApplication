import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import baby from '../images/b1.jpg'

import { userActions } from '../_actions';

class MainContent extends React.Component {
    render() {
        return (
            <div className="col-md-12">
                <div className="col-md-2 sidebar">
                    <ul class="nav nav-pills nav-stacked">
                        <li>jedan</li>
                        <li>dva</li>
                        <li>tri</li>
                        <li>cetriri</li>
                        <li>pet</li>
                    </ul>
                </div>
                <div className="col-md-10 content">
                    <ul class="nav nav-tabs nav-justified">
                        <li role="presentation" class="active"><a href="#">TAMILNADU</a></li>
                        <li role="presentation"><a href="#">INDIA</a></li>
                        <li role="presentation"><a href="#">WORLD</a></li>
                        <li role="presentation"><a href="#">CORONA</a></li>
                    </ul>
                    <div className="col-md-12">
                        <div>
                            <div className="col-md-9">
                                <h1>Hindu</h1>
                                <h5>Title</h5>
                                <div>
                                    <p>Description</p>
                                    <p>uhfjoassfbqa iojhfoawowf hjgfjasf fjkahfahfhg jkfhjkasfhsa jhfowaq fuifhasshf fkjbakjsfbkjasf jfhbijwhfjkkaf jhbfijawbfna
                                    uhfjoassfbqa iojhfoawowf hjgfjasf fjkahfahfhg jkfhjkasfhsa jhfowaq fuifhasshf fkjbakjsfbkjasf jfhbijwhfjkkaf jhbfijawbfna
                                    uhfjoassfbqa iojhfoawowf hjgfjasf fjkahfahfhg jkfhjkasfhsa jhfowaq fuifhasshf fkjbakjsfbkjasf jfhbijwhfjkkaf jhbfijawbfna </p>
                                </div>
                            </div>
                            <div className="col-md-3 contentImage">
                                <img src={baby}/>
                            </div>
                            <hr />
                        </div>
                        <div>
                            <div className="col-md-9">
                                <h1>Hindu</h1>
                                <h5>Title</h5>
                                <div>
                                    <p>Description</p>
                                    <p>uhfjoassfbqa iojhfoawowf hjgfjasf fjkahfahfhg jkfhjkasfhsa jhfowaq fuifhasshf fkjbakjsfbkjasf jfhbijwhfjkkaf jhbfijawbfna
                                    uhfjoassfbqa iojhfoawowf hjgfjasf fjkahfahfhg jkfhjkasfhsa jhfowaq fuifhasshf fkjbakjsfbkjasf jfhbijwhfjkkaf jhbfijawbfna
                                    uhfjoassfbqa iojhfoawowf hjgfjasf fjkahfahfhg jkfhjkasfhsa jhfowaq fuifhasshf fkjbakjsfbkjasf jfhbijwhfjkkaf jhbfijawbfna </p>
                                </div>
                            </div>
                            <div className="col-md-3 contentImage">
                                <img src={baby}/>
                            </div>
                            <hr />
                        </div>
                        <div>
                            <div className="col-md-9">
                                <h1>Hindu</h1>
                                <h5>Title</h5>
                                <div>
                                    <p>Description</p>
                                    <p>uhfjoassfbqa iojhfoawowf hjgfjasf fjkahfahfhg jkfhjkasfhsa jhfowaq fuifhasshf fkjbakjsfbkjasf jfhbijwhfjkkaf jhbfijawbfna
                                    uhfjoassfbqa iojhfoawowf hjgfjasf fjkahfahfhg jkfhjkasfhsa jhfowaq fuifhasshf fkjbakjsfbkjasf jfhbijwhfjkkaf jhbfijawbfna
                                    uhfjoassfbqa iojhfoawowf hjgfjasf fjkahfahfhg jkfhjkasfhsa jhfowaq fuifhasshf fkjbakjsfbkjasf jfhbijwhfjkkaf jhbfijawbfna </p>
                                </div>
                            </div>
                            <div className="col-md-3 contentImage">
                                <img src={baby}/>
                            </div>
                            <hr />
                        </div>
                        <div>
                            <div className="col-md-9">
                                <h1>Hindu</h1>
                                <h5>Title</h5>
                                <div>
                                    <p>Description</p>
                                    <p>uhfjoassfbqa iojhfoawowf hjgfjasf fjkahfahfhg jkfhjkasfhsa jhfowaq fuifhasshf fkjbakjsfbkjasf jfhbijwhfjkkaf jhbfijawbfna
                                    uhfjoassfbqa iojhfoawowf hjgfjasf fjkahfahfhg jkfhjkasfhsa jhfowaq fuifhasshf fkjbakjsfbkjasf jfhbijwhfjkkaf jhbfijawbfna
                                    uhfjoassfbqa iojhfoawowf hjgfjasf fjkahfahfhg jkfhjkasfhsa jhfowaq fuifhasshf fkjbakjsfbkjasf jfhbijwhfjkkaf jhbfijawbfna </p>
                                </div>
                            </div>
                            <div className="col-md-3 contentImage">
                                <img src={baby}/>
                            </div>
                            <hr />
                        </div>
                        <div>
                            <div className="col-md-9">
                                <h1>Hindu</h1>
                                <h5>Title</h5>
                                <div>
                                    <p>Description</p>
                                    <p>uhfjoassfbqa iojhfoawowf hjgfjasf fjkahfahfhg jkfhjkasfhsa jhfowaq fuifhasshf fkjbakjsfbkjasf jfhbijwhfjkkaf jhbfijawbfna
                                    uhfjoassfbqa iojhfoawowf hjgfjasf fjkahfahfhg jkfhjkasfhsa jhfowaq fuifhasshf fkjbakjsfbkjasf jfhbijwhfjkkaf jhbfijawbfna
                                    uhfjoassfbqa iojhfoawowf hjgfjasf fjkahfahfhg jkfhjkasfhsa jhfowaq fuifhasshf fkjbakjsfbkjasf jfhbijwhfjkkaf jhbfijawbfna </p>
                                </div>
                            </div>
                            <div className="col-md-3 contentImage">
                                <img src={baby}/>
                            </div>
                            <hr />
                        </div>
                        
                        
                    </div>
                </div>
            </div>

        );
    }
}

const connectedMainContent = connect(null, null)(MainContent);
export { connectedMainContent as MainContent };